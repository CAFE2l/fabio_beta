import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container projects-container">
        <h2 className="projects-title">Trabalhos</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Link key={project.slug} to={`/project/${project.slug}`} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-img"
                />
              </div>
              <div className="project-content">
                <span className="project-category">{project.tags[0]}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;