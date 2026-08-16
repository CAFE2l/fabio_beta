import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import heroImage from '../../Trabalhos/img_violada.jpeg';

const HeroPhoto = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="hero-photo-wrap">
      <div className="hero-photo-ring" aria-hidden="true" />

      <motion.div
        className="hero-photo-frame"
        animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }}
        transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
      >
        <img
          src={heroImage}
          alt="Fábio Borges"
          className="hero-photo"
        />
        <div className="hero-photo-shine" aria-hidden="true" />
      </motion.div>

      <motion.div
        className="hero-photo-badge"
        aria-hidden="true"
        animate={prefersReducedMotion ? {} : { rotate: 360 }}
        transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
      >
        <svg viewBox="0 0 100 100" className="hero-photo-badge-svg">
          <defs>
            <path
              id="hero-badge-circle"
              d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
            />
          </defs>
          <text className="hero-photo-badge-text">
            <textPath href="#hero-badge-circle">
              • designer visual • canva • criatividade •
            </textPath>
          </text>
        </svg>
      </motion.div>

      <span className="hero-photo-star" aria-hidden="true">✦</span>
    </div>
  );
};

export default HeroPhoto;
