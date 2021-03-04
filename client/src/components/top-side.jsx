import React, {useState} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
CalendarOutlined,
ScheduleOutlined,
UserOutlined,
} from '@ant-design/icons';
import logoUrl from '../images/logo-dark.png';
import TableSchedule from './tableSchedule'
import { Row, Col } from 'antd';
import CSVReader2 from './uploadFile'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Page = () => {

  const [collapsed, setCollapse] = useState(false);
  const onCollapse = (collapsed) => (setCollapse(collapsed));
    const [resSchedule, setResSchedule] = useState([]);
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo"> 
            <a href="https://techstars.com">
                <img src={logoUrl} alt="tecchstarts icon" />
            </a>
            </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<CalendarOutlined />}>
              Generate Schedule
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
             <Row>
                <Col span={20}> <TableSchedule resSchedule={resSchedule}/></Col>
                <Col span={4}>
                        <Row className='charts'><CSVReader2 setResSchedule={setResSchedule}/></Row>
                        <Row className='charts'></Row>
                        <Row className='charts'></Row>
                </Col>
            </Row>
          </Content>
          {/*<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>*/}
        </Layout>
      </Layout>
    );
}

export default Page;