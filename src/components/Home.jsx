import React from 'react'
import '../css/home.css' 
import MyPic from '../assets/main-my-pic.gif'
import { SlSocialInstagram,SlSocialLinkedin } from "react-icons/sl";
import { PiWhatsappLogo } from "react-icons/pi";
import { FaGithub ,FaDownload } from "react-icons/fa";

const Home = () => {
  return (
    <div className='home' id='home'>
      <div className="information">
        <p>Hello,<span>I'm Pradeep</span></p>
        <h1>and <span>DEVELOPER</span></h1>
        <div className='links'>
          <li><SlSocialLinkedin /></li>
          <li><FaGithub /></li>
          <li><PiWhatsappLogo /></li>
          <li><SlSocialInstagram /></li>
        </div>
        <div className="btn">
          <button>RESUME <FaDownload /></button>
        </div>
      </div>
      <div className="main-img">
        <img src={MyPic} alt="" />
      </div>
    </div>
  )
}

export default Home