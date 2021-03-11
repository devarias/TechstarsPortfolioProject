import React, { useState, useEffect }from 'react';
import { Dropdown, Button, Space} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import DropMenu from './Menu';
import ColorCode from './ColorCode';
import TableResults from './TableResults';
import '../styles/DropDown.css';


function DropDown() {

    const [mentorData, setMentorData] = useState("");
    const [companyData, setCompanyData] = useState("");
    const [displayTable, setDisplayTable] = useState(false);

    const getData = async () => {
        await fetch(
            'https://ts-api-p2.herokuapp.com/api/mentors',
            {
                method: 'GET',
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json"
                }
            }
        )
            .then((response) => response.json())
            .then((result) => {
                setMentorData(result);
                 
            })
            .catch((error) => {
                console.error('Error:', error);     
            });

        await fetch(
            'https://ts-api-p2.herokuapp.com/api/companies',
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }
            }
        )
            .then((response) => response.json())
            .then((result) => {
                setCompanyData(result);   
        })
            .catch((error) => {
                console.error('Error:', error);     
        });

    }

    useEffect(() => getData(), []); 

  return (
    <>
    <ColorCode/>
    <Space wrap>
        <Dropdown overlay={<DropMenu data={mentorData} displayTable={setDisplayTable}/>}>
        <Button>
        {displayTable ?  mentorData[0].mentor : 'Select a Mentor'}
        <DownOutlined />
        </Button>
        </Dropdown>
        <Dropdown overlay={<DropMenu data={companyData} displayTable={setDisplayTable}/>}>
        <Button>
        Select a Company
        <DownOutlined />
        </Button>
        </Dropdown>
    </Space>
    {displayTable ? <TableResults mentors={mentorData} company={companyData}/> : null}
    </>
  
  )
}
export default DropDown;