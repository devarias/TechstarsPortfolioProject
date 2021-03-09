import React from 'react';
import '../assets/styles/Survey.css'
import { Avatar } from 'antd';
import { Slider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { AiOutlineCheckCircle, AiOutlineBulb, AiOutlineCloseCircle } from "react-icons/ai";

function Survey(props) {
  const marks = {
    1: '1',
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
            <Avatar position='relative' size={64} icon={<UserOutlined />} />
            <span>{props.company}</span>
            <div className='buttons'>
              <button className='button1'><AiOutlineCheckCircle/> Want To</button>
              <button className='button1'><AiOutlineBulb/> Willing</button>
              <button className='button1'><AiOutlineCloseCircle/> Won't</button>
            </div>
            <div className='slider'>
              <Slider min={1} max={5} marks={marks} defaultValue={1}/>
            </div>
            <button className='button'>Submit</button>
            <input type="text" placeholder="Feedback" name="Feedback" />
          </div>
        </div>
  )
}
export default Survey;
