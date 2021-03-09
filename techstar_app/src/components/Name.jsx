import React from "react";
import { Data } from "../data";
import Survey from './Survey';
import { Row, Col } from 'antd';
import '../assets/styles/Survey.css'

/* const style = { background: '#0092ff', padding: '8px 0' }; */

function Name(){
  return (
      <Row justify="center" align="top" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {
              Data.map((meet, i)=>
                  {
                    return (
                      <Col key={i} company={meet.company}>
                        <Survey company={meet.company}>{meet.company}</Survey>
                      </Col>
                    )
                  }
                )
            }
      </Row>
  );
}
export default Name;