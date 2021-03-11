import React, { useState } from 'react';
import TableSchedule from './TableSchedule';
import UploadFile from './UploadFile';
import Navsider from './Navsider';
import TableReschedule from './TableReschedule';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../styles/Page.css';
const { Content, Sider } = Layout;

/**
 * Page component creates the SPA layout for the application
 */
const Page = () => {
  /*View state is used to manage the views for the SPA. The number would be
   *the index of the  component on the viewObjects array. */
  const [view, setView] = useState(0);
  /*Collapse state manges the collapse of the sidebar menu */
  const [collapsed, setCollapse] = useState(false);
  /*Reschedule state stores the result from the fetching process in the upload file component
  and sends the result to the table schedule component. */
  const [resSchedule, setResSchedule] = useState([]);
  /* ViewSelect manages the higlighted item in the menu and is used when the switch between components
  is automatic */
  const [viewSelect, setViewSelect] = useState(['0']);
  /* viewComponents is an array of objects for the SPA */
  const viewComponents = [
    { component: null, classes: null, route: null },
    { component: null, classes: null, route: null },
    { component: null, classes: null, route: null },
    {
      component: (
        <UploadFile
          setResSchedule={setResSchedule}
          setView={setView}
          setViewSelect={setViewSelect}
        />
      ),
      classes: 'charts',
      route: '/GenerateMeetings',
    },
    {
      component: <TableSchedule resSchedule={resSchedule} />,
      classes: 'table',
      route: '/MeetingsTable',
    },
    { component: <TableReschedule />, classes: 'table', route: '/Reschedule' },
  ];
  const onCollapse = (collapsed) => setCollapse(collapsed);

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
          width='220'
        >
          <Navsider setView={setView} viewselect={viewSelect} />
        </Sider>
        <Layout className='site-layout'>
          <Content>
            <Row className='content'>
              <Switch>
                <Route path={viewComponents[view].route}>
                  <Col span={24} className={viewComponents[view].classes}>
                    {viewComponents[view].component}
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
