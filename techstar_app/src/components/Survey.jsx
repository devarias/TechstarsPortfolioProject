import React from 'react';
import '../assets/styles/Survey.css'
import { Avatar } from 'antd';
import { Slider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { AiOutlineCheckCircle, AiOutlineBulb, AiOutlineCloseCircle } from "react-icons/ai";

function Survey(props) {
  const marks = {
    1: {style: {color: '#ff0000'},label: <strong>1</strong>,},
    2: '2',
    3: '3',
    4: '4',
    5: {
      style: {
        color: '#39C463',
      },
      label: <strong>5</strong>,
    },
  };
  return(
        <div className="container">
          <div className="survey-box">
            <Avatar size={80} icon={<UserOutlined />} />
            <span>{props.companies}</span>
            <div className='buttons'>
              <button className='button1'><AiOutlineCheckCircle size={20}/><span className='icontxt'>Want To</span></button>
              <button className='button2'><AiOutlineBulb size={20}/><span className='icontxt'>Willing</span></button>
              <button className='button3'><AiOutlineCloseCircle size={20}/><span className='icontxt'>Won't</button>
            </div>
            <div className='slider'>
              <p className='slidetxt'>Mentor Helpfullness</p>
              <Slider min={1} max={5} marks={marks} defaultValue={1}/>
            </div>
            <div>
              <p className='slidetxt'>Please Explain: (Optional)</p>
            </div>
            <textarea className='feedback' cols="20" rows="5" placeholder="Type here" name="Feedback" />
            <button className='button'>Submit</button>
          </div>
        </div>
  )
}
export default Survey;
