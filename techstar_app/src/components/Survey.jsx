import React from "react";
import '../assets/styles/Survey.css'
/* import { FaBeer } from "@react-icons/all-files/fa/FaBeer"; */
import Avatar from 'react-avatar';

function Survey(props) {
  return(
    <ul>
      <li>
        <div className="container">
          <Avatar name="Valentina Jaramillo" round={true}
          style={{border: 'solid 2px #39C463'}} />
          <span>{props.company}</span>
          {/* <button>Login</button> */}
        </div>
      </li>
    </ul>
  )
}
export default Survey;
