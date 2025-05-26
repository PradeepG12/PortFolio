import React from 'react'
import '../css/about.css'
import AboutPic from '../assets/about-pic.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className="information">
        <h1>About Me</h1>
        <div className="name"><p>Name : PRADEEP G</p></div>
        <div className="location"><p>From : Namakkal</p></div>
        <div className="phne"><p>Phne.No : 6379406671</p></div>
        <div className="mail"><p>Email : pg649599@gmail.com </p></div>
        <div className="professation"><p>Course : BE[CSE], 2021 - 2025</p></div>
        <div className="college"><p>College : FEAT , AU</p></div>
      </div>
      <div className="img">
        <img src={AboutPic} alt="" />
      </div>
    </div>
  )
}

export default About