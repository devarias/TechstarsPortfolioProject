import React, { useState, useEffect } from 'react';
import '../assets/styles/header.css';
import { Progress } from 'antd';
import TutorialComp from './TutorialComp';
import { counter } from './Survey';

function HeaderComp() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will run every second!');
      setCount(counter);
    }, 1000);
    return () => clearInterval(interval);
  }, [counter]);

  console.log('counter' + counter);
  return (
    <div className='barbckg'>
      <div className='bar'>{<Progress percent={counter} />}</div>
      <div className='btn-circle'>
        <TutorialComp />
      </div>
    </div>
  );
}

export default HeaderComp;
