import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import folderIcon from '../../icons/links/folder_icon.png';
import openFolderIcon from '../../icons/links/open_folder_icon.png';
import './WorksFolder.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const WorksFolder = () => {
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="works-folder-wrap"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      custom={0.15}
    >
      <motion.div
        className="works-folder-glow"
        animate={{ opacity: isHovered ? 0.7 : 0, scale: isHovered ? 1 : 0.94 }}
        transition={{ duration: 0.35 }}
        aria-hidden="true"
      />

      <Link
        to="/trabalhos"
        className="works-folder-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Ver todos os trabalhos de design"
      >
        <div className="works-folder-icon-stack" aria-hidden="true">
          <motion.img
            src={folderIcon}
            alt=""
            className="works-folder-icon"
            animate={
              prefersReducedMotion
                ? {}
                : {
                    opacity: isHovered ? 0 : 1,
                    scale: isHovered ? 0.82 : 1,
                    y: isHovered ? -6 : 0,
                  }
            }
            transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <motion.img
            src={openFolderIcon}
            alt=""
            className="works-folder-icon works-folder-icon-open"
            animate={
              prefersReducedMotion
                ? {}
                : {
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.82,
                    y: isHovered ? 0 : 6,
                  }
            }
            transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
          />
        </div>

        <div className="works-folder-text">
          <span className="works-folder-eyebrow">coleção</span>
          <span className="works-folder-title">Ver todos os trabalhos</span>
          <span className="works-folder-hint">
            {projects.length} projetos de design
          </span>
        </div>

        <motion.span
          className="works-folder-arrow"
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <ArrowRight aria-hidden="true" />
        </motion.span>

        <span className="works-folder-star" aria-hidden="true">✦</span>
      </Link>
    </motion.div>
  );
};

export default WorksFolder;
