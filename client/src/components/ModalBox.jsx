import React from 'react';
import { Modal } from 'antd';

function ModalBox(props) {


  const handleOk = () => {
    props.setIsModalVisible(false);
  };

  return (
    <>
      <Modal title="Result Summary" visible={props.isModalVisible} onOk={handleOk}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default ModalBox;
