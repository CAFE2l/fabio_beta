import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import WorksFolder from './WorksFolder';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container projects-container">
        <motion.div
          className="projects-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.span className="projects-eyebrow" variants={fadeUp}>
            portfólio
          </motion.span>
          <motion.h2 className="projects-title" variants={fadeUp} custom={0.05}>
            Trabalhos
          </motion.h2>
          <motion.p className="projects-subtitle" variants={fadeUp} custom={0.1}>
            Uma seleção de peças criadas para marcas e presença digital.
          </motion.p>
        </motion.div>

        <WorksFolder />
      </div>
    </section>
  );
};

export default Projects;
