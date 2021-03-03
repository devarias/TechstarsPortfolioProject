import React from 'react'
import '../styles/header.css';
import logoUrl from '../images/logo-dark.png';

function Header() {
    return (
        <div className="logo">
        <a href="https://techstars.com">
        <img src={logoUrl} alt="tecchstarts icon" />
        </a>
        <section className="topnav">
          <a className="active" href="#home">Home</a>
          <a href="#schedule">Schedule</a>
          <a href="#reschedule">Reschedule</a>
          <a href="#AddMentor">Add mentor</a>
          <a href="#DelMentor">Delete mentor</a>
        </section>
        </div>
    )
}

export default Header;
