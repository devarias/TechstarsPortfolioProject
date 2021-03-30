import React, { useEffect, useState } from 'react';
import '../assets/styles/Survey.css';
import { Avatar, Slider, Radio, Button } from 'antd';
import { getMentorName, getCompanyName } from './Data';
import { UserOutlined } from '@ant-design/icons';
import {
  AiOutlineCheckCircle,
  AiOutlineBulb,
  AiOutlineCloseCircle,
} from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';
import { unit } from './Name';
import axios from 'axios';
export let counter = 0;
export let swt = 0;
let num = 0;
const mentorSurveyApi = 'https://techstars-api.herokuapp.com/api/mentor_survey';
const companySurveyApi =
  'https://techstars-api.herokuapp.com/api/company_survey';

function Survey(props) {
  //Set Data from components
  let [mentorId, setMentorId] = useState('');
  let [companyId, setCompanyId] = useState('');
  /* let [ranking, setRanking] = useState(0);
  let [voting, setVoting] = useState(0); */
  let ranking = 1;
  let voting;
  let feedback = '';
  //Visual Updates
  const [state, setState] = useState(true);
  const [flag, setFlag] = useState(false);
  const [flip, isFlipped] = useState(true);
  const [count, setCount] = useState(0);
  const marks = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: { style: { color: '#39C463' }, label: <strong>5</strong> },
  };
  const id = useLocation().pathname.slice(8);
  let max = unit + 1;
  useEffect(async () => {
    await getMentorName(id).then(async (name) => {
      setMentorId(name);
    });
    await getCompanyName(id).then(async (name) => {
      setCompanyId(name);
    });
  }, []);
  function handleSubmit(mentorId, companyId, url) {
    const survey = {
      mentor_id: mentorId,
      company_id: companyId,
      vote: voting,
      feedback: feedback,
      ranking: ranking,
    };
    axios
      .post(url, {
        survey,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  }
  function onChange(element, card) {
    setState(!state);
    if (state) {
      setCount((num += 1));
      swt = 1;
      feedback = document.getElementById(props.meetings).value;
      if (card === 1) {
        handleSubmit(element.mentor_id, element.company_id, mentorSurveyApi);
      } else if (card === 2) {
        handleSubmit(element.mentor_id, element.company_id, companySurveyApi);
      }
      console.log(props.meetings + feedback);
    } else {
      setCount((num -= 1));
      swt = 2;
    }
    isFlipped(!flip);
    counter = (num * 100) / max;
    console.log(state);
    console.log(counter);
  }

  return (
    <div className='container'>
      {/* Front of the card */}
      <ReactCardFlip isFlipped={!flip} flipDirection='horizontal'>
        <div className='survey-box-front'>
          <Avatar size={80} icon={<UserOutlined />} />
          <span>{props.meetings}</span>
          <div className='buttons'>
            <Radio.Group buttonStyle='solid' defaultValue={props.vals}>
              <Radio.Button
                style={{
                  background: '#39C643',
                  borderRadius: '15px 0px 0px 15px',
                }}
                value={1}
                /* llamar funcion si la data no es null*/
                onClick={() => {
                  setFlag(true);
                  voting = 1;
                  console.log(props.meetings + voting);
                }}
              >
                <AiOutlineCheckCircle size={15} />
                Want To
              </Radio.Button>
              <Radio.Button
                style={{ background: '#ff9800' }}
                value={2}
                onClick={() => {
                  setFlag(true);
                  voting = 2;
                  console.log(props.meetings + voting);
                }}
              >
                <AiOutlineBulb size={15} />
                Willing
              </Radio.Button>
              <Radio.Button
                style={{
                  background: '#ff0000',
                  borderRadius: '0px 15px 15px 0px',
                }}
                value={3}
                onClick={() => {
                  setFlag(true);
                  voting = 3;
                  console.log(props.meetings + voting);
                }}
              >
                <AiOutlineCloseCircle size={15} />
                Won't
              </Radio.Button>
            </Radio.Group>
          </div>
          <div className='slider'>
            <p className='slidetxt1'>{props.txt}</p>
            <Slider
              min={1}
              max={5}
              marks={marks}
              defaultValue={1}
              onAfterChange={(value) => {
                ranking = value;
                console.log(props.meetings + 'Rank is' + ranking);
              }}
            />
          </div>
          <div>
            <p className='slidetxt2'>Please Explain: (Optional)</p>
          </div>
          <textarea
            id={props.meetings}
            className='feedback'
            maxlength='250'
            cols='10'
            rows='5'
            placeholder='Type here'
            name='Feedback'
            value={feedback.value}
          />
          <div className='lock'>
            <Button
              style={{ margin: '0', background: '#39C643' }}
              type='secondary'
              size='large'
              shape='round'
              disabled={flag ? false : true}
              ghost={flag ? false : true}
              onClick={() => {
                onChange(props.element, props.c);
              }}
            >
              {!state ? 'Undo' : 'Submit'}
            </Button>
          </div>
        </div>

        {/* Back of the card */}

        <div className='survey-box-back'>
          <div className='back'>
            <AiOutlineCheckCircle size={100} color={'#39C643'} />
            <p>Thank you for your feedback!</p>
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
            </Button>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}
export default Survey;
