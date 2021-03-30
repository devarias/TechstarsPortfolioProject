import React, { useEffect, useState } from 'react';
import {
  getDataMentors,
  getDataCompanies,
  getMentorName,
  getCompanyName,
  mentorOrCompany,
} from './Data';
import Survey from './Survey';
import HeaderComp from './HeaderComp';
import HeaderMent from './HeaderMent';
import { Row, Col } from 'antd';
import '../assets/styles/Survey.css';
import { useLocation } from 'react-router-dom';
import ColoredScrollbars from './ColoredScrollbars';
/* import { Scrollbars } from 'react-custom-scrollbars'; */
/* const max = 100; */
export let unit;

function Name(props) {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [flag, setFlag] = useState(0);
  const [msg, setMsg] = useState('');
  const id = useLocation().pathname.slice(8);

  useEffect(async () => {
    const flaggy = await mentorOrCompany(id);
    setFlag(flaggy);
    if (flaggy === 1) {
      await getMentorName(id)
        .then(async (name) => {
          setName(name);
          await getDataMentors(id)
            .then((list) => {
              setList(list[0]);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
      setMsg('Company Preparedness');
    } else if (flaggy === 2) {
      await getCompanyName(id)
        .then(async (name) => {
          setName(name);
          await getDataCompanies(id)
            .then((list) => {
              setList(list[0]);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(id);
      setMsg('Mentor Helpfullness');
    }
  }, []);
  function showSurveys() {
    if (list[name] && flag === 1) {
      unit = list[name].length;
      /* console.log(unit); */
      return list[name].map((elem, i) => {
        //needs to be true when we got meetings performed.
        if (elem.meetingDone === false) {
          return (
            (unit = i),
            (
              /* console.log(unit), */
              <Col key={i} meetings={elem.company}>
                <Survey
                  meetings={elem.company}
                  vals={0}
                  txt={msg}
                  element={elem}
                  c={1}
                >
                  {elem.company}
                </Survey>
              </Col>
            )
          );
        }
      });
    } else if (list[name] && flag === 2) {
      /* console.log(unit); */
      return list[name].map((elem, i) => {
        if (elem.meetingDone === false) {
          return (
            (unit = i),
            (
              <Col key={i} meetings={elem.mentor}>
                <Survey
                  meetings={elem.mentor}
                  vals={0}
                  txt={msg}
                  element={elem}
                  c={2}
                >
                  {elem.mentor}
                </Survey>
              </Col>
            )
          );
        }
      });
    }
  }
  function showHeader() {
    if (flag === 1) {
      return <HeaderComp />;
    } else if (flag === 2) {
      return <HeaderMent />;
    }
  }
  return (
    <>
      <ColoredScrollbars style={{ zIndex: 3, height: '100vh' }}>
        {showHeader()}
        <Row
          justify='center'
          align='top'
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        >
          {showSurveys()}
        </Row>
      </ColoredScrollbars>
    </>
  );
}
export default Name;
