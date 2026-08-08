import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Image } from 'lucide-react';
import { projects } from '../data/projects';
import './ProjectPage.css';

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (!project) {
    return (
      <motion.div 
        className="project-page-error"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Link to="/#projects" className="back-link">
          ← Voltar para Trabalhos
        </Link>
        <p>Projeto não encontrado.</p>
      </motion.div>
    );
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <motion.div 
      className="project-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="project-page-container">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Link to="/#projects" className="back-link">
            <span className="back-icon">←</span>
            <span className="back-text">Voltar para Trabalhos</span>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div 
          className="project-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="project-hero-grid">
            <motion.div 
              className="project-hero-image-container"
              layoutId={`project-image-${project.slug}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="project-hero-image"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              />
              <div className="project-hero-overlay" />
            </motion.div>

            <motion.div 
              className="project-hero-content"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.h1 
                className="project-hero-title"
                layoutId={`project-title-${project.slug}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                {project.title}
              </motion.h1>

              <motion.div 
                className="project-hero-meta"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                <span className="project-hero-year">{project.year}</span>
              </motion.div>

              <motion.p 
                className="project-hero-subtitle"
                layoutId={`project-subtitle-${project.slug}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                {project.subtitle}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>

        {/* Description Section */}
        <motion.div 
          className="project-description-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <div className="project-description-card">
            <h2 className="project-section-title">Sobre o Projeto</h2>
            <p className="project-description-text">{project.description}</p>
          </div>
        </motion.div>

        {/* Tags Section */}
        <motion.div 
          className="project-tags-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          <div className="project-tags-card">
            <h2 className="project-section-title">Ferramentas e Técnicas</h2>
            <div className="project-tags-list">
              {project.tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  className="project-tag"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + index * 0.1, duration: 0.3 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div 
          className="project-navigation"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          {prevProject && (
            <Link to={`/project/${prevProject.slug}`} className="project-nav-link project-nav-prev">
              <span className="project-nav-icon project-nav-arrow" aria-hidden="true">←</span>
              <div className="project-nav-content">
                <span className="project-nav-label">Anterior</span>
                <span className="project-nav-title">{prevProject.title}</span>
              </div>
            </Link>
          )}

          <Link to="/#projects" className="project-nav-link project-nav-center">
            <span className="project-nav-icon" aria-hidden="true">
              <Image />
            </span>
            <div className="project-nav-content">
              <span className="project-nav-label">Ver todos</span>
              <span className="project-nav-title">Projetos</span>
            </div>
          </Link>

          {nextProject && (
            <Link to={`/project/${nextProject.slug}`} className="project-nav-link project-nav-next">
              <div className="project-nav-content">
                <span className="project-nav-label">Próximo</span>
                <span className="project-nav-title">{nextProject.title}</span>
              </div>
              <span className="project-nav-icon project-nav-arrow" aria-hidden="true">→</span>
            </Link>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectPage;
