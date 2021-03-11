import React, { useState, useEffect } from "react";
import { Dropdown, Button, Space, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import ManageSurveyTable from './ManageSurveyTable';
import "../styles/ModifySurvey.css";

function ModifySurvey() {

  const [mentorData, setMentorData] = useState([]);
  const [displayTable, setDisplayTable] = useState(false);

  const getData = async () => {
    await fetch("https://ts-api-p2.herokuapp.com/api/mentors", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setMentorData(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // await fetch(
    //     'https://ts-api-p2.herokuapp.com/api/companies',
    //     {
    //         method: 'GET',
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json"
    //         }
    //     }
    // )
    //     .then((response) => response.json())
    //     .then((result) => {
    //         setCompanyData(result);
    // })
    //     .catch((error) => {
    //         console.error('Error:', error);
    // });
  };

  useEffect(() => getData(), []);

  function handleMenuClick({ key }) {
    if (key === '0') {
      setDisplayTable(true);
    }
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="0">Select All</Menu.Item>
      {mentorData.map((obj, index) => (
        <Menu.Item key={index + 1}>
          {obj.mentor ? obj.mentor : obj.company}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <>
      <h2>Modify a Survey</h2>
      <Space wrap>
        <Dropdown overlay={menu}>
          <Button>
            Select a Mentor
            <DownOutlined />
          </Button>
        </Dropdown>
      </Space>
      {displayTable ? <ManageSurveyTable mentors={mentorData}/> : null}
    </>
  );
}
export default ModifySurvey;
