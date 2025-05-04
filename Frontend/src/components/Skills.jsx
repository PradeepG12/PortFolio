import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../css/skills.css";
import skills from '../assets/utils/Skills';

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-title">
        <h2>Skills</h2>
        <p>My technical expertise</p>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="progress-circle">
              <CircularProgressbar
                value={skill.level}
                text={`${skill.level}%`}
                strokeWidth={10}
                styles={buildStyles({
                  textSize: "20px",
                  pathColor: "#6366f1",
                  textColor: "#222",
                  trailColor: "#ddd",
                })}
              />
            </div>
            <p className="skill-name">
              {<skill.icon />} {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
