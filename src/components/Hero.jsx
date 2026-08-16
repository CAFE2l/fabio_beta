import React from 'react';
import { motion } from 'framer-motion';
import tropheuImage from '../../Trabalhos/tropheu-removebg-preview.png';
import HeroPhoto from './HeroPhoto';
import './Hero.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const titleContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};

const titleLine = {
  hidden: { opacity: 0, y: 28, rotate: 2 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-decor" aria-hidden="true">
        <span className="hero-decor-star hero-decor-star-1">✦</span>
        <span className="hero-decor-star hero-decor-star-2">✦</span>
        <span className="hero-decor-blob hero-decor-blob-1" />
        <span className="hero-decor-blob hero-decor-blob-2" />
      </div>

      <div className="container hero-container">
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <HeroPhoto />
        </motion.div>

        <div className="hero-content">
          <motion.div
            className="hero-badge"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            <span className="hero-badge-dot" />
            <span className="hero-badge-text">Designer Visual</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            variants={titleContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span className="hero-title-line" variants={titleLine}>
              FÁBIO
            </motion.span>
            <motion.span className="hero-title-line" variants={titleLine}>
              H. BORGES
            </motion.span>
            <motion.span className="hero-title-line hero-title-accent" variants={titleLine}>
              FILHO
            </motion.span>
          </motion.h1>

          <motion.div
            className="hero-card"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
          >
            <div className="hero-card-header">
              <span className="hero-card-text">designer • criação visual no Canva</span>
              <img
                src={tropheuImage}
                alt="Troféu"
                className="hero-card-trophy"
              />
            </div>
            <p className="hero-card-description">
              Crio artes e materiais visuais completos no Canva — posts, identidades, apresentações e peças que comunicam de verdade.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
