import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
function Tutorial() {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={showModal}>
        <QuestionCircleOutlined style={{ fontSize: '20px' }} />
      </Button>
      <Modal
        centered='true'
        title='Mentor Matching Machine'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key='back' onClick={handleOk}>
            OK
          </Button>,
        ]}
      >
        <p>
          Hit this if you want to have a second meeting with the company or
          mentor
        </p>
        <button className='button1'>Want To</button>
        <p>
          Hit this if you are willing to have a second meeting with the company
          or mentor
        </p>
        <button className='button2'>Willing</button>
        <p>Hit this if you do not want to meet with the company or mentor</p>
        <button className='button3'>Won't</button>
      </Modal>
    </>
  );
}

export default Tutorial;
