import React from 'react'
import Logo from '../assets/logo.jpg'
import '../css/nav.css'


const Nav = () => {
  return (
    <div className='nav'>
      <div className="logoContainer">
        <img src={Logo} alt="" className="logo" />
        <p>Dev</p>
      </div>
      <nav className="nav-list">
        <li className='borderActive'><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Services</li>
      </nav>
      <div className="contact-btn">
        <button>Contact</button>
      </div>
    </div>
  )
}

export default Nav