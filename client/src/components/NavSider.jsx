import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { TeamOutlined, ScheduleOutlined, HomeOutlined, BarChartOutlined, TableOutlined, UploadOutlined, LogoutOutlined} from '@ant-design/icons';
import logoUrl from '../images/logo-dark.png';
import LogoutButton from './LogoutButton';

const { SubMenu } = Menu;

function NavSider() {


    return (
        <>
        <div className="logo">
          <a  href="https://techstars.com">
          <img src={logoUrl} alt="techstarts icon" />
          </a>
        </div>
        <Menu theme='dark' mode="inline" >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to='/Home'>Home</Link>
          </Menu.Item>
            <SubMenu key="sub2" title="Matching" icon={<TeamOutlined/>}>
              <Menu.Item key="2" icon={<BarChartOutlined  />}>
                <Link to='/Dashboard'>Dashboard</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<TableOutlined />}>
                <Link to='/Results'>Results</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title="Scheduling" icon={<ScheduleOutlined />}>
              <Menu.Item key="4" icon={<UploadOutlined />}>
              <Link to='/FileUpload'>FileUpload</Link>
              </Menu.Item>
            </SubMenu>
          <Menu.Item key="5" icon={<LogoutOutlined />}>
            <LogoutButton/>
          </Menu.Item>
        </Menu>
        </>
    )
}
export default NavSider;
