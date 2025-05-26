import React from 'react'
import Logo from '../assets/logo.jpg'
import '../css/nav.css'
import NavData from '../assets/utils/NavData'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
      <div className="logoContainer">
        <img src={Logo} alt="" className="logo" />
        <p><Link to='/about'>Dev</Link></p>
      </div>
      <nav className="nav-list">
        {NavData.map((item, index) => {
          return (
            <li key={index} className={item.className}>
              <a href={item.link} className="nav-link">
                <h3>{item.title}</h3>
              </a>
            </li>
            )
          })
        }
      </nav>
      <div className="contact-btn">
        <button>Contact</button>
      </div>
    </div>
  )
}

export default Nav