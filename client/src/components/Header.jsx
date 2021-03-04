import React from 'react'
import { useLocation } from 'react-router-dom';
import logoUrl from '../images/logo-dark.png';
import LogoutButton from './LogoutButton';
import '../styles/header.css';

function Header() {

  const currentLocation = useLocation();

  const navBar = () => {
    if (currentLocation.pathname !== '/') {
      return (<>
      <a className="active" href="/Home">Home</a>
      <a href="#schedule">Schedule</a>
      <a href="#reschedule">Reschedule</a>
      <a href="#AddMentor">Add mentor</a>
      <a href="#DelMentor">Delete mentor</a>
      </>)
    } 
  }
  
    return (
        <div className="logo">
        <a href="https://techstars.com">
        <img src={logoUrl} alt="tecchstarts icon" />
        </a>
        <section className="topnav">
          {navBar()}
          <LogoutButton/>
        </section>
        
        </div>
    )
}

export default Header;
