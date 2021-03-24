import React from 'react';
import '../assets/styles/header.css';
import { Progress } from 'antd';
import Tutorial from './Tutorial';
import logoUrl from '../assets/static/logo-dark.png';

function Header() {
  return (
    <div className='barbckg'>
      <div className='bar'>
        <Progress percent={30} />
      </div>
      <div className='btn-circle'>
        <Tutorial />
      </div>
    </div>
  );
}

export default Header;
