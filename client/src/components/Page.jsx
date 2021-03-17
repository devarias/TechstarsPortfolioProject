import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import TableSchedule from "./TableSchedule";
import { Row, Col } from "antd";
import CSVReader2 from "./UploadFile";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Navsider from "./Navsider";
import TableReschedule from "./TableReschedule";
import "../styles/Page.css";
import LoadTable from './LoadTable';
import NotFound from './NotFound';

const { Content, Sider } = Layout;

const Page = () => {
  const [view, setView] = useState(0);
  const [collapsed, setCollapse] = useState(false);
  const [resSchedule, setResSchedule] = useState([]);
  const [viewSelect, setViewSelect] = useState(["0"]);
  /* state to control the view of the table, it assures that all the content necessary is caught */
  const [tableDisplay, setTableDisplay] = useState(null);
  /* companies variable returned from the back-end */
  const [companies, setCompanies] = useState([]);

  const getData = async () => {
    const response = await fetch(
     'http://localhost:3033/api/companies',
     {
       method: 'GET',
       headers: {
         'content-Type': 'application/json',
         Accept: 'aplication/json',
       },
     } 
    );
    return response.json();
  };

  useEffect(async() => {
    let result = await getData();
    setCompanies(result);
    setTableDisplay(true);
  }, []);

  const classObjects = [
    "home",
    "surveyStatus",
    "results",
    "charts",
    "table",
  ];
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
    <LoadTable/>,
    <LoadTable/>,
    <CSVReader2
      setResSchedule={setResSchedule}
      setView={setView}
      setViewSelect={setViewSelect}
    />,
    <TableSchedule resSchedule={resSchedule} companies={companies} tableDisplay={tableDisplay}/>,
    <TableReschedule />,
  ];

 

  return (
    <Router>
      <Switch>
        {/* <Route exact path='/survey/:id' component={NotFound}/> */}
        <Route path='/Error' component={NotFound}/>
          <Layout style={{ minHeight: "100vh" }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
              <Navsider setView={setView} viewselect={viewSelect} />
            </Sider>
            <Layout className="site-layout">
              <Content>
                <Row className="content">
                  <Switch>
                    <Route exact path={pathRoute[view]}>
                      <Col span={24} className={classObjects[view]}>
                        {viewObjects[view]}
                      </Col>
                    </Route>
                    <Redirect to="/Error" />
                  </Switch>
                </Row>
              </Content>
            </Layout>
          </Layout>
      </Switch>
    </Router>
  );
};

export default Page;
