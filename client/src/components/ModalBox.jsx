import React from 'react';
import { Modal } from 'antd';
import '../styles/ModalBox.css';

function ModalBox(props) {


  const handleOk = () => {
    props.setIsModalVisible(false);
  };

  const handleCancel = () => {
    props.setIsModalVisible(false);
  };

  const info = props.modalContent;
  const surveyVotes = ["Won't", "is Willing", "Want", "Want"];
  const surveyClass = ["wont", "willing", "want", "want"];
  const codeColor = ['empty','notMatch', 'willing', 'goodMatch', 'strongMatch', 'perfectMatch'];

  return (
    <>
      <Modal title="Result Summary" visible={props.isModalVisible} onOk={handleOk} onCancel={handleCancel} cancelButtonProps={{ style: { display: 'none' } }}>
        <div className='modalBox'>
          <p><b>{props.mentorName}</b> <span className={surveyClass[info.mentorVote]}>{surveyVotes[info.mentorVote]}</span> to lead {info.company}.<br/>
          The score of how prepared is <span className={codeColor[info.mentorRanking]}>{info.mentorRanking}</span>.<br/>
          The feedback is:<br/><span>{info.mentorFeedback ? info.mentorFeedback : 'None'}</span></p>
          <p><b>{info.company}</b> <span className={surveyClass[info.companyVote]}>{surveyVotes[info.companyVote]}</span> to be mentored by {props.mentorName}.<br/>
          The score of helpfulness is <span className={codeColor[info.companyRanking]}>{info.companyRanking}</span>.<br/>
          The feedback is:<br/><span>{info.companyFeedback ? info.companyFeedback : 'None'}</span></p>
        </div>
      </Modal>
    </>
  );
};
export default ModalBox;
