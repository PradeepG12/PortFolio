import React from 'react';
import '../css/AboutMe.css';
import { Link } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="home-btn-container">
        <Link to="/" className="home-btn"><BiArrowBack /> Home Page</Link>
      </div>

      <h1>About Me</h1>
      <p>
        Hi, I'm <strong>Pradeep</strong>, a passionate Software Development Engineer (SDE) with a strong focus on backend development. I specialize in building robust, scalable systems and solving complex problems. With hands-on experience in designing APIs, optimizing databases, and developing backend infrastructure, I am deeply committed to creating efficient and high-performing applications.
      </p>
      <p>
        I’m currently doing an internship, where I’ve gained valuable experience working on real-world projects and developing web applications. This internship has allowed me to apply my knowledge in building scalable solutions and collaborating with teams to deliver functional, user-friendly products.
      </p>
      <p>
        I have solved 50+ problems on LeetCode, which has sharpened my problem-solving skills and deepened my understanding of algorithms and data structures. While I am backend-heavy, I am actively improving my skills in frontend technologies and exploring the MERN stack.
      </p>
      
      <h3>What I Do:</h3>
      <ul>
        <li>Design and implement backend systems using technologies such as Django, FastAPI, and Node.js.</li>
        <li>Build scalable and high-performance REST APIs and GraphQL endpoints.</li>
        <li>Optimize databases (PostgreSQL, MongoDB) for performance and scalability.</li>
        <li>Contribute to real-world web applications through my internship experience.</li>
        <li>Focus on clean, maintainable code and best practices for backend development.</li>
      </ul>

      <h3>My Tech Stack:</h3>
      <ul>
        <li><strong>Backend:</strong> Django, FastAPI, Node.js</li>
        <li><strong>Database:</strong> PostgreSQL, MongoDB</li>
        <li><strong>Tools:</strong> Docker, Git, AWS, Nginx</li>
        <li><strong>Algorithms & Data Structures:</strong> Extensive experience solving problems on LeetCode.</li>
      </ul>
    </div>
  );
}

export default AboutMe;
