import React from 'react'
import '../css/home.css' 
import MyPic from '../assets/main-my-pic.gif'
import { SlSocialInstagram,SlSocialLinkedin } from "react-icons/sl";
import { PiWhatsappLogo } from "react-icons/pi";
import { FaGithub ,FaDownload } from "react-icons/fa";

const Home = () => {
  return (
    <>
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
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,0L34.3,21.3C68.6,43,137,85,206,112C274.3,139,343,149,411,144C480,139,549,117,617,106.7C685.7,96,754,96,823,122.7C891.4,149,960,203,1029,197.3C1097.1,192,1166,128,1234,112C1302.9,96,1371,128,1406,144L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg> */}
    </>
  )
}

export default Home