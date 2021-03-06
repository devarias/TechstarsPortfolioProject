import React, {useState, useEffect} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
CalendarOutlined,
ScheduleOutlined,
UserOutlined,
FileAddOutlined
} from '@ant-design/icons';
import logoUrl from '../images/logo-dark.png';
import TableSchedule from './tableSchedule'
import { Row, Col } from 'antd';
import CSVReader2 from './uploadFile'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Page = () => {
  const [view, setView] = useState(0)
  const [collapsed, setCollapse] = useState(false);
  const [resSchedule, setResSchedule] = useState([]);
  const [viewSelect, setViewSelect] = useState(['0']);
  const classObjects = ['charts', 'table']
  const onCollapse = (collapsed) => (setCollapse(collapsed));
  const handleView = ({ item, key, keyPath, domEvent }) => { 
    setView(key); 
    setViewSelect([key]);}
  const viewObjects = [<CSVReader2 setResSchedule={setResSchedule} setView={setView} setViewSelect={setViewSelect}/>, <TableSchedule resSchedule={resSchedule}/>]

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo"> 
            <a href="https://techstars.com">
                <img src={logoUrl} alt="tecchstarts icon" />
            </a>
            </div>
          <Menu theme="dark" selectedKeys={viewSelect} mode="inline" onClick={handleView}>
            <Menu.Item key="0" icon={<FileAddOutlined />} >
              Generate Meetings Table
            </Menu.Item>
            <Menu.Item key="1" icon={<CalendarOutlined />}>
              Meetings Table
            </Menu.Item>
            <Menu.Item key="2" icon={<ScheduleOutlined />}>
              Reschedule
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Mentors">
              <Menu.Item key="3">Add mentor</Menu.Item>
              <Menu.Item key="4">Remove mentor</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
           {/*<Header className="site-layout-background" style={{ padding: 0 }} />*/}
            <Content>
              <Row className="content">
                <Col span={24} className={classObjects[view]}>{viewObjects[view]}</Col>
              </Row> 
            </Content>
          {/*<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>*/}
        </Layout>
      </Layout>
    );
}

export default Page;