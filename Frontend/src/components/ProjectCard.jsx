import React, {useState} from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const [showFull, setShowFull] = useState(false);
  const maxChars = 100; 

  const toggleReadMore = () => setShowFull(!showFull);

  return (
    <div className="project-card">
      {/* 1. Project Image */}
      <div className="project-image-container">
        <img src={project.image} alt={project.title} className="project-image" />
      </div>

      {/* 2. Title, Description, Tech Stack */}
      <div className="project-details">
        <h3>{project.title}</h3>
        <p>
          {showFull ? project.description : `${project.description.slice(0, maxChars)}...`}
          {project.description.length > maxChars && (
            <span onClick={toggleReadMore} style={{ color: '#00acee', cursor: 'pointer', marginLeft: '5px' }}>
              {showFull ? 'Read less' : 'Read more'}
            </span>
          )}
        </p>
        <div className="tech-stack">
          <h5>Tech Stack : </h5>
          {project.tech?.map((Icon, index) => (
            <span key={index}>{<Icon />}</span>
          ))}
        </div>
      </div>

      {/* 3. Links (Demo & GitHub) */}
      <div className="project-links">
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
          Demo <FaExternalLinkAlt />
        </a>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          Code <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
