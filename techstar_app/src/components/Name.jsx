import React, { useEffect, useState } from 'react';
import { getData, getName } from './Data';
import Survey from './Survey';
import { Row, Col } from 'antd';
import '../assets/styles/Survey.css';
import { useLocation } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';

function Name(props) {
  const [list, setList] = useState([]);
  const [mentorName, setMentorName] = useState('');
  const id = useLocation().pathname.slice(8);

  useEffect(async () => {
    let mounted = true;
    await getData().then((items) => {
      if (mounted) {
        setList(items);
      }
    });
    await getName(id).then((name) => {
      setMentorName(name);
    });

    return () => (mounted = false);
  }, []);

  return (
    <Row
      justify='center'
      align='top'
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
    >
      {list.map((meet, i) => {
        if (meet.mentor === mentorName /* && meet.slot !== null */) {
          return (
            <Col key={i} meetings={meet.company}>
              <Survey meetings={meet.company} vals={0} card={list[i]}>
                {meet.company}
              </Survey>
            </Col>
          );
        }
      })}
    </Row>
  );
}
export default Name;
