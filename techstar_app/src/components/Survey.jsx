import React, { useState } from 'react';
import '../assets/styles/Survey.css';
import { Avatar, Slider, Popover, Radio, Button } from 'antd';
/* import Lock from './Lock'; */
import { UserOutlined, LockOutlined, UnlockOutlined } from '@ant-design/icons';
import {
  AiOutlineCheckCircle,
  AiOutlineBulb,
  AiOutlineCloseCircle,
} from 'react-icons/ai';

function Survey(props) {
  const [state, setState] = useState(true);
  const [flag, setFlag] = useState(false);
  const content = (
    <div className='popcover'>
      <p>Cant touch this! ♫♪♪</p>
      <p>Click below to undo</p>
    </div>
  );
  const marks = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: { style: { color: '#39C463' }, label: <strong>5</strong> },
  };

  function onChange() {
    setState(!state);
    console.log(state);
  }

  return (
    <div className='container'>
      <div className='survey-box'>
        <Avatar size={80} icon={<UserOutlined />} />
        <span>{props.meetings}</span>
        <div className='buttons'>
          <Radio.Group buttonStyle='solid'>
            <Radio.Button
              style={{
                background: '#39C643',
                borderRadius: '15px 0px 0px 15px',
              }}
              value='a'
              onClick={() => setFlag(true)}
            >
              <AiOutlineCheckCircle size={15} />
              Want To
            </Radio.Button>
            <Radio.Button
              style={{ background: '#ff9800' }}
              value='b'
              onClick={() => setFlag(true)}
            >
              <AiOutlineBulb size={15} />
              Willing
            </Radio.Button>
            <Radio.Button
              style={{
                background: '#ff0000',
                borderRadius: '0px 15px 15px 0px',
              }}
              value='c'
              onClick={() => setFlag(true)}
            >
              <AiOutlineCloseCircle size={15} />
              Won't
            </Radio.Button>
          </Radio.Group>
        </div>
        <div className='slider'>
          <p className='slidetxt1'>Mentor Helpfullness</p>
          <Slider min={1} max={5} marks={marks} defaultValue={1} />
        </div>
        <div>
          <p className='slidetxt2'>Please Explain: (Optional)</p>
        </div>
        <textarea
          className='feedback'
          maxlength='250'
          cols='10'
          rows='5'
          placeholder='Type here'
          name='Feedback'
        />
        <div className='lock'>
          <Popover
            placement='top'
            content={content}
            visible={!state}
            style={{}}
          >
            <Button
              style={{ margin: '0', background: '#39C643' }}
              type='secondary'
              size='large'
              shape='round'
              disabled={flag ? false : true}
              ghost={flag ? false : true}
              onClick={() => {
                onChange();
              }}
            >
              {!state ? 'Undo' : 'Submit'}
              {!state ? <LockOutlined /> : <UnlockOutlined />}
            </Button>
          </Popover>
        </div>
        {/* <button className='button'>Submit</button> */}
      </div>
    </div>
  );
}
export default Survey;
