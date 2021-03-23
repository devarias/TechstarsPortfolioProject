import React from 'react';
import '../assets/styles/header.css';
import logoUrl from '../assets/static/logo-dark.png';

function Header() {
  return (
    <div className='logo'>
      <a href='https://techstars.com'>
        <img src={logoUrl} alt='techstarts icon' />
      </a>
    </div>
  );
}

export default Header;
