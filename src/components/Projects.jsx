import React from 'react';
import './Projects.css';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container projects-container">
        <h2 className="projects-title">Trabalhos</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.slug} 
              project={project} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;