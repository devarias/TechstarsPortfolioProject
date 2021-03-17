import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import TableSchedule from "./TableSchedule";
import { Row, Col } from "antd";
import CSVReader2 from "./UploadFile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navsider from "./Navsider";
import TableReschedule from "./TableReschedule";
import SurveyStatus from "./ModifySurvey";
import EditMentors from "./EditMentors";
import "../styles/Page.css";
import LoadTable from "./LoadTable";

const { Content, Sider } = Layout;

const Page = () => {
  const [view, setView] = useState(0);
  const [collapsed, setCollapse] = useState(false);
  const [resSchedule, setResSchedule] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [pendingMeetings, setPendingMeetings] = useState({});
  const [tableDisplay, setTableDisplay] = useState(false);
  const [rechargeMeetings, setRechargeMeetings] = useState(false);
  const [rechargeReschedule, setRechargeReschedule] = useState(false);
  const [reloadMentors, setReloadMentors] = useState(false);

  const getData = async (path) => {
    const response = await fetch(`http://localhost:3033/api/${path}`, {
      method: "GET",
      headers: {
        "content-Type": "application/json",
        Accept: "aplication/json",
      },
    });
    return response.json();
  };

  useEffect(async () => {
    let results = await getData("table");
    setResSchedule(results);
    results = await getData("companies");
    setCompanies(results);
    results = await getData("pending");
    setPendingMeetings(results);
    results = await getData("mentors");
    setMentors(results);
    setTableDisplay(true);
    setRechargeMeetings(false);
    setRechargeReschedule(false);
    setReloadMentors(false);
  }, [rechargeMeetings, rechargeReschedule, reloadMentors]);

  const classObjects = ["home", "surveyStatus", "results", "charts", "table"];
  const pathRoute = [
    "/Home",
    "/SurveyStatus",
    "/Results",
    "/GenerateMeetings",
    "/MeetingsTable",
  ];
  const onCollapse = (collapsed) => setCollapse(collapsed);
  const viewObjects = [
    "home",
    <SurveyStatus />,
    <LoadTable />,
    <CSVReader2 setRechargeMeetings={setRechargeMeetings} setView={setView} />,
    <TableSchedule
      resSchedule={resSchedule}
      companies={companies}
      tableDisplay={tableDisplay}
      setRechargeMeetings={setRechargeMeetings}
    />,
    <TableReschedule
      pendingMeetings={pendingMeetings}
      setRechargeReschedule={setRechargeReschedule}
      setView={setView}
      mentors={mentors}
    />,
    <EditMentors
      mentors={mentors}
      companies={companies}
      setReloadMentors={setReloadMentors}
    />,
  ];

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <Navsider setView={setView} />
        </Sider>
        <Layout className="site-layout">
          <Content>
            <Row className="content">
              <Switch>
                <Route path={pathRoute[view]}>
                  <Col span={24} className={classObjects[view]}>
                    {viewObjects[view]}
                  </Col>
                </Route>
              </Switch>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default Page;
