import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import './WorksPage.css';

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
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

const WorksPage = () => {
  return (
    <motion.div
      className="works-page"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="works-page-container">
        <motion.div variants={fadeUp} custom={0}>
          <Link to="/#projects" className="back-link">
            <ArrowLeft className="back-icon" aria-hidden="true" />
            Voltar para o início
          </Link>
        </motion.div>

        <motion.div className="works-heading" variants={fadeUp} custom={0.1}>
          <span className="works-eyebrow">portfólio</span>
          <h1 className="works-title">Trabalhos</h1>
          <p className="works-subtitle">
            Todos os projetos de design em uma prateleira de coleção.
          </p>
        </motion.div>

        <div className="works-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WorksPage;
