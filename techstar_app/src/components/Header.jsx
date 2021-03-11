import React from 'react'
import '../styles/header.css';
import logoUrl from '../images/logo-dark.png';

function Header() {
    return (
        <div className="logo">
        <a href="https://techstars.com">
        <img src={logoUrl} alt="techstarts icon" />
        </a>
        </div>
    )
}

export default Header;
