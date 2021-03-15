import React from 'react';
import { Modal } from 'antd';
import { FireFilled } from "@ant-design/icons";
import '../styles/ModalBox.css';

function ModalBox(props) {


  const handleOk = () => {
    props.setIsModalVisible(false);
  };

  const handleCancel = () => {
    props.setIsModalVisible(false);
  };

  let mentorVote = 4;
  let companyVote = 4;
  let mentorRanking = 0;
  let companyRanking = 0;
  let mentorFeedback = 'None';
  let companyFeedback = 'None';
  const info = props.modalContent;
  const surveyVotes = ["Won't", "is Willing", "Want", "Want", "is pending"];
  const surveyClass = ["wont", "willing", "want", "want", "pending"];
  const codeColor = ['pending','notMatch', 'willing', 'goodMatch', 'strongMatch', 'perfectMatch'];

  if (info.mentorVote){
    mentorVote = info.mentorVote;
    mentorRanking = info.metorRanking;
    mentorFeedback = info.mentorFeedback
  }
  if (info.companyVote) {
    companyVote = info.companyVote;
    companyRanking = info.companyRanking
    companyFeedback = info.companyFeedback
  }

  return (
    <>
      <Modal title="Result Summary" visible={props.isModalVisible} onOk={handleOk} onCancel={handleCancel} cancelButtonProps={{ style: { display: 'none' } }}>
        <div className='modalBox'>
          <FireFilled className={`${info.matchResult !== 6 ? codeColor[info.matchResult ? info.matchResult + 1 : 0] : codeColor[5]} modalFireball`}/>
          <p><b>{props.mentorName}</b> <span className={surveyClass[mentorVote]}>{surveyVotes[mentorVote]}</span> to lead {info.company}.<br/>
          The score of how prepared is <span className={codeColor[mentorRanking]}>{mentorRanking}</span>.<br/>
          The feedback is:<br/><span>{mentorFeedback}</span></p>
          <p><b>{info.company}</b> <span className={surveyClass[companyVote]}>{surveyVotes[companyVote]}</span> to be mentored by {props.mentorName}.<br/>
          The score of helpfulness is <span className={codeColor[companyRanking]}>{companyRanking}</span>.<br/>
          The feedback is:<br/><span>{companyFeedback}</span></p>
        </div>
      </Modal>
    </>
  );
};
export default ModalBox;
