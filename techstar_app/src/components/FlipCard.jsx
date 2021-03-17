import React, { useState } from 'react';
import '../assets/styles/Survey.css';
import Survey from './Survey';
import ReactCardFlip from 'react-card-flip';

function FlipCard(props) {
  const [state, setState] = useState(false);
  function handleClick() {
    setState(!state);
  }
  <ReactCardFlip setState={true} flipDirection='horizontal'>
    <Survey /* meetings={meetings.company} */ vals={0}></Survey>
    <Survey /* meetings={meetings.mentor} */ vals={1}></Survey>
  </ReactCardFlip>;
}
export default FlipCard;
