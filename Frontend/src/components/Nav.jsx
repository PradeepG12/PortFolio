import React from 'react'
import Logo from '../assets/logo.jpg'
import '../css/nav.css'
import NavData from '../assets/utils/NavData'

const Nav = () => {
  return (
    <div className='nav'>
      <div className="logoContainer">
        <img src={Logo} alt="" className="logo" />
        <p>Dev</p>
      </div>
      <nav className="nav-list">
        {NavData.map((item, index) => {
          return (
            <li key={index} className={item.className}>
              <a href={item.link} className="nav-link">{item.title}</a>
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