import React, { useState } from "react";
import { Table, Button } from "antd";

const TableReschedule = () => {
  const [keyRow, setKeyRow] = useState(null);
  const handleDelete = (target) => {
    console.log(target);
    console.log(target.value);
  };
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Age", dataIndex: "age", key: "age" },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (record) => {
        console.log(record.key);
        setKeyRow(record.key);
        return (
          <Button type="Link" target={keyRow} onClick={handleDelete}>
            Delete
          </Button>
        );
      },
    },
  ];

  const data = [
    {
      key: 1,
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: 2,
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: 3,
      name: "Not Expandable",
      age: 29,
      address: "Jiangsu No. 1 Lake Park",
    },
    {
      key: 4,
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default TableReschedule;
