import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../styles/StartButton.css';

function StartButton() {
    const { loginWithRedirect} = useAuth0();
    return (
        <button className='login' onClick={() => {loginWithRedirect()}}>
          Start here
        </button>
    )
};
export default StartButton;
