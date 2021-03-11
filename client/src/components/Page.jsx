import React, {useState} from 'react';
import { Layout } from 'antd';
import TableSchedule from './tableSchedule'
import { Row, Col } from 'antd';
import CSVReader2 from './uploadFile'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navsider from './Navsider'
import DropDown from './DropDown';
import ModifySurvey from './ModifySurvey';
const { Content, Sider } = Layout;

const Page = () => {
  const [view, setView] = useState(0);
  const [collapsed, setCollapse] = useState(false);
  const [resSchedule, setResSchedule] = useState([]);
  const [viewSelect, setViewSelect] = useState(['0']);
  const classObjects = ['home', 'surveyStatus', 'results', 'modify', 'charts', 'table']
  const pathRoute =['/Home', '/SurveyStatus', '/Results','/ModifySurvey', '/GenerateMeetings', '/MeetingsTable']
  const onCollapse = (collapsed) => (setCollapse(collapsed));
  const viewObjects = ['home', 'dashboard', <DropDown/>, <ModifySurvey/>, <CSVReader2 setResSchedule={setResSchedule} setView={setView} setViewSelect={setViewSelect}/>, <TableSchedule resSchedule={resSchedule}/>]

    return (
      <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <Navsider setView={setView} viewselect={viewSelect}/>
        </Sider>
        <Layout className="site-layout">
            <Content>
            <Row className='content'>
              <Switch>
                <Route path={pathRoute[view]}>
                  <Col span={24} className={classObjects[view]}>{viewObjects[view]}</Col> 
                </Route>
              </Switch>
            </Row>
            </Content>
        </Layout>
      </Layout>
      </Router>
    );
}

export default Page;