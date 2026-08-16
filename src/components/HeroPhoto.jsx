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

      <span className="hero-photo-star" aria-hidden="true">✦</span>
    </div>
  );
};

export default HeroPhoto;
