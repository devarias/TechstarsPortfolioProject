import React, { useState }from 'react';
import { Table } from 'antd';
import { FireFilled } from "@ant-design/icons";
import ModalBox from './ModalBox';

function TableResults(props) {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleModal = () => {
        setIsModalVisible(true);
    };
  
    const columns =  props.company.map(obj => {
        return {
            title: obj.company,
            dataIndex: 'companyName',
            key: 'companyName',
            width: 80,
            filters: [
              {
                text: <FireFilled className='perfectMatch'/>,
                value: 'Perfect',
              },
              {
                text: <FireFilled className='strongMatch'/>,
                value: 'Strong',
              },
              {
                text: <FireFilled className='goodMatch'/>,
                value: 'Good',
              },
              {
                text: <FireFilled className='willing'/>,
                value: 'Willing',
              },
              {
                text: <FireFilled className='notMatch'/>,
                value: 'NoMatch',
              },
              {
                text: <FireFilled className='pending'/>,
                value: 'Pending',
              },
            ],
            onFilter: (value, record) => record.name.indexOf(value) === 0,
        }
    })

    columns.unshift(
        {
            title: 'Mentor / Company',
            dataIndex: 'mentorName',
            key: 'mentorName',
            fixed: 'left',
            width: 80,
            render: text => <span onClick={handleModal}>{text}</span>  
        }
    )

    const data = props.mentors.map((obj, index) => {
        return {
            key: index,
            mentorName: obj.mentor,
            companyName: 'SoftLake Co',
        }
    })

    console.log(isModalVisible);
    return (
    <>
    <ModalBox isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>
    <Table
        columns={columns}
        dataSource={data}
        size='default'
        pagination={false}
        expandable
        scroll={{ x: 'calc(700px + 50%)', y: 240 }}
    />
    </>
    )

};
export default TableResults;