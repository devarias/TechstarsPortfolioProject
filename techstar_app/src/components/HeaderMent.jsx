import React from 'react';
import '../assets/styles/header.css';
import { Progress } from 'antd';
import TutorialMent from './TutorialMent';
import logoUrl from '../assets/static/logo-dark.png';
import { counter } from './Survey';

function HeaderMent(props) {
  return (
    <div className='barbckg'>
      <div className='bar'>
        <Progress percent={counter} />
      </div>
      <div className='btn-circle'>
        <TutorialMent />
      </div>
    </div>
  );
}

export default HeaderMent;
