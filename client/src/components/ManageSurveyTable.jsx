import React from 'react';
import { Table } from 'antd';

function ManageSurveyTable(props) {


    const columns = [
        {
            title: `name`,
            dataIndex: 'name',
            key: 'name',
            width: 80,
            filters: props.mentors.map(obj => {
                return {
                    text: obj.mentor,
                    value: obj.mentor,
                }
            }),
            onFilter: (value, record) => record.name.indexOf(value) === 0,
        }
    ]


    const data = props.mentors.map((obj, index) => {
        return {
            key: index,
            name: obj.mentor,
        }
    })

    return (
    <div className='modifySurvey'>
        <Table
            columns={columns}
            dataSource={data}
            size='small'
            pagination={false}
        />
        <button>Modify Survey</button>
    </div>
    )

};
export default ManageSurveyTable;