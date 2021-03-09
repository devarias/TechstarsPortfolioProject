import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  TeamOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Data } from "../data";
import logoUrl from '../assets/static/logo-dark.png';
import '../assets/styles/header.css';

const { SubMenu } = Menu;

function NavSider({setView, viewSelect}) {
  const handleView = ({ key }) => {
    console.log(key);
    setView(key);
    // setViewSelect([key]);
    }

    return (
        <>
        <div className="logo">
          <a  href="https://techstars.com">
          <img src={logoUrl} alt="techstarts icon" />
          </a>
        </div>
        <Menu theme='dark' selectedKeys={viewSelect} mode="inline" onClick={handleView}>
            <SubMenu key="sub2" title="Companies" icon={<TeamOutlined/>}>
            {
              Data.map((meet, i)=>
                  {
                    return (
                    <Menu.Item key={i + 1} company={meet.company} icon={<SettingOutlined />}>
                      <Link to={'/'+ meet.mentor + '/' + meet.company}>{meet.company}</Link>
                    </Menu.Item>
                    )
                  }
                )
            }
            </SubMenu>
        </Menu>
        </>
    )
}
export default NavSider;