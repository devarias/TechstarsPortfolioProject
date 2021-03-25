import React from 'react';
import '../assets/styles/header.css';
import { Progress } from 'antd';
import TutorialComp from './TutorialComp';
import logoUrl from '../assets/static/logo-dark.png';

function HeaderComp(props) {
  return (
    <div className='barbckg'>
      <div className='bar'>
        <Progress percent={30} />
      </div>
      <div className='btn-circle'>
        <TutorialComp />
      </div>
    </div>
  );
}

export default HeaderComp;
