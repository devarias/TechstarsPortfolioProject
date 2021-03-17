import React, { useEffect, useState } from 'react';
import { getData, getName, getCompName } from './Data';
import Survey from './Survey';
import { Row, Col } from 'antd';
import '../assets/styles/Survey.css';
import { useLocation } from 'react-router-dom';

function Name(props) {
  const [list, setList] = useState([]);
  const [mentorName, setMentorName] = useState('');
  const [companyName, setCompanyName] = useState('');
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
    await getCompName(id).then((name) => {
      setCompanyName(name);
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
        } else if (meet.company === companyName) {
          return (
            <Col key={i} meetings={meet.mentor}>
              <Survey meetings={meet.mentor} vals={0} card={list[i]}>
                {meet.mentor}
              </Survey>
            </Col>
          );
        }
      })}
    </Row>
  );
}
export default Name;
