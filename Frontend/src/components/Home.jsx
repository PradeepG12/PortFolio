import React from 'react'
import '../css/home.css' 
import MyPic from '../assets/images/home_page_img.png'
import { SlSocialInstagram,SlSocialLinkedin } from "react-icons/sl";
import { PiWhatsappLogo } from "react-icons/pi";
import { FaGithub ,FaDownload } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-content">
        {/* Left Section */}
        <div className="left-content">
          <p className="intro">Hi, I'm <span>Pradeep</span></p>
          <h1 className="subtitle">Full-Stack Developer</h1>

          <div className="social-links">
            <a href="https://linkedin.com" target="_blank"><SlSocialLinkedin /></a>
            <a href="https://github.com" target="_blank"><FaGithub /></a>
            <a href="https://wa.me" target="_blank"><PiWhatsappLogo /></a>
            <a href="https://instagram.com" target="_blank"><SlSocialInstagram /></a>
          </div>

          <div className="resume-btn">
            <button>
              View Resume <FaDownload />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-content">
          <img src={MyPic} alt="Profile" />
        </div>
      </div>
    </section>
  )
}

export default Home