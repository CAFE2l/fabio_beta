import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Image, Sparkles } from 'lucide-react';
import { projects } from '../data/projects';
import './ProjectPage.css';

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (!project) {
    return (
      <motion.div
        className="project-page"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="project-page-container">
          <Link to="/#projects" className="back-link">
            <ArrowLeft className="back-icon" aria-hidden="true" />
            Voltar para Trabalhos
          </Link>
          <div className="project-page-error">
            <p>Projeto não encontrado.</p>
          </div>
        </div>
      </motion.div>
    );
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <motion.div
      className="project-page"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="project-page-container">
        <motion.div variants={fadeUp} custom={0}>
          <Link to="/#projects" className="back-link">
            <ArrowLeft className="back-icon" aria-hidden="true" />
            Voltar para Trabalhos
          </Link>
        </motion.div>

        <div className="project-hero">
          <motion.div
            className="project-hero-image-container"
            layoutId={`project-image-${project.slug}`}
            variants={fadeUp}
            custom={0.1}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="project-hero-image"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            />
            <div className="project-hero-overlay" aria-hidden="true" />
            <span className="project-hero-year">{project.year}</span>
          </motion.div>

          <motion.div className="project-hero-content" variants={fadeUp} custom={0.2}>
            <motion.h1
              className="project-hero-title"
              layoutId={`project-title-${project.slug}`}
            >
              {project.title}
            </motion.h1>
            <motion.p
              className="project-hero-subtitle"
              layoutId={`project-subtitle-${project.slug}`}
            >
              {project.subtitle}
            </motion.p>
          </motion.div>
        </div>

        <motion.div className="project-description-section" variants={fadeUp} custom={0.3}>
          <div className="project-description-card">
            <h2 className="project-section-title">Sobre o Projeto</h2>
            <p className="project-description-text">{project.description}</p>
          </div>
        </motion.div>

        <motion.div className="project-tags-section" variants={fadeUp} custom={0.4}>
          <div className="project-tags-card">
            <h2 className="project-section-title">Ferramentas e Técnicas</h2>
            <div className="project-tags-list">
              {project.tags.map((tag) => (
                <motion.span
                  key={tag}
                  className="project-tag"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  <Sparkles className="project-tag-icon" aria-hidden="true" />
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div className="project-navigation" variants={fadeUp} custom={0.5}>
          {prevProject ? (
            <Link to={`/project/${prevProject.slug}`} className="project-nav-link project-nav-prev">
              <ArrowLeft className="project-nav-arrow" aria-hidden="true" />
              <div className="project-nav-content">
                <span className="project-nav-label">Anterior</span>
                <span className="project-nav-title">{prevProject.title}</span>
              </div>
            </Link>
          ) : (
            <span className="project-nav-placeholder" />
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

          {nextProject ? (
            <Link to={`/project/${nextProject.slug}`} className="project-nav-link project-nav-next">
              <div className="project-nav-content">
                <span className="project-nav-label">Próximo</span>
                <span className="project-nav-title">{nextProject.title}</span>
              </div>
              <ArrowRight className="project-nav-arrow" aria-hidden="true" />
            </Link>
          ) : (
            <span className="project-nav-placeholder" />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectPage;
