import React from 'react';
import '../css/projects.css';
import ProjectCard from './ProjectCard';
import projectData from '../assets/utils/projectData';

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
