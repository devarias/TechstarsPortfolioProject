import React, { useEffect, useState } from 'react';
import { getData } from './Data';
import Survey from './Survey';
import { Row, Col } from 'antd';
import '../assets/styles/Survey.css'

function Name(){
  const [list, setList] = useState([]);
  useEffect(() => {
    let mounted = true;
    getData()
      .then(items => {
        if(mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])

  return (
      <Row justify="center" align="top" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {
              list.map((meet, i)=>
                  {
                    if (meet.mentor === "Ed Hallen" && meet.slot) {
                    return (
                      <Col key={i} meetings={meet.company}>
                        <Survey meetings={meet.company}>{meet.company}</Survey>
                      </Col>
                    )}
                    return ([])
                  }
                )
            }
      </Row>
  );
}
export default Name;