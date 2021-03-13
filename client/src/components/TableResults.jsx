import React, { useState } from "react";
import { Table } from "antd";
import { FireFilled } from "@ant-design/icons";
import ModalBox from "./ModalBox";
import { default as dataResults } from "../fakeresults.json";

function TableResults(props) {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [rowKey, setRowKey] = useState(0);
  const [modalContent, setModalContent] = useState({});

  const handleModal = (company, value) => {
    const mentor = Object.keys(dataResults[rowKey])[0];
    const resultIndex = dataResults[rowKey][mentor].findIndex(
      (obj) => obj.company === company && obj.matchResult === value
    );
    if (
      data[rowKey]["mentorName"] === mentor &&
      data[rowKey][company] ===
        dataResults[rowKey][mentor][resultIndex].matchResult
    ) {
      setModalContent(dataResults[rowKey][mentor][resultIndex]);
    }
    setIsModalVisible(true);
  };

  const columns = props.company.map((obj) => {
    return {
      title: obj.company,
      dataIndex: obj.company,
      key: obj.company,
      width: 80,
      render: (value) => {
        if (value !== undefined) {
          const codeColor = [
            "notMatch",
            "willing",
            "goodMatch",
            "strongMatch",
            "perfectMatch",
          ];
          let classColor;
          codeColor.forEach((vote, index) =>
            index === value
              ? (classColor = vote)
              : value === 6
              ? (classColor = codeColor[4])
              : null
          );
          return (
            <FireFilled
              onClick={() => handleModal(obj.company, value)}
              className={classColor}
            />
          );
        }
      },
      filters: [
        {
          text: <FireFilled className="perfectMatch" />,
          value: "Perfect",
        },
        {
          text: <FireFilled className="strongMatch" />,
          value: "Strong",
        },
        {
          text: <FireFilled className="goodMatch" />,
          value: "Good",
        },
        {
          text: <FireFilled className="willing" />,
          value: "Willing",
        },
        {
          text: <FireFilled className="notMatch" />,
          value: "NoMatch",
        },
        {
          text: <FireFilled className="pending" />,
          value: "Pending",
        },
      ],
      onFilter: (value, record) => record.name.indexOf(value) === 0,
    };
  });

  columns.unshift({
    title: "Mentor / Company",
    dataIndex: "mentorName",
    key: "mentorName",
    fixed: "left",
    width: 80,
    render: (value) => value,
  });

  const getData = (results) => {
    let array = [];
    for (const obj of results) {
      let mentor = Object.keys(obj)[0];
      let objfinal = { key: results.indexOf(obj), mentorName: mentor };
      obj[mentor].forEach((objresult, index) => {
        objfinal[objresult.company] = objresult.matchResult;
      });
      array.push(objfinal);
    }
    return array;
  };

  const data = getData(dataResults);

  return (
    <>
      <ModalBox
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        modalContent={modalContent}
        mentorName={data[rowKey]["mentorName"]}
      />
      <Table
        columns={columns}
        dataSource={data}
        size="default"
        pagination={false}
        onRow={(record) => ({
          onMouseEnter: () => {
            setRowKey(record.key);
          },
        })}
        expandable
        scroll={{ x: "calc(700px + 50%)", y: 240 }}
      />
    </>
  );
}
export default TableResults;
