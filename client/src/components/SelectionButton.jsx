import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/SelectionButton.css';

function SelectionButton(props) {

 const history = useHistory();

 const handleSelection = (event) => {
     event.preventDefault();
     history.push(props.path);
 }

  return(
      <button className='selection' onClick={handleSelection}>
        {props.name}
      </button>
  )
}
export default SelectionButton;
