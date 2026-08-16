import React, { useEffect, useState } from 'react';
import { motion, useInView, animate, useReducedMotion } from 'framer-motion';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const useCountUp = (target, { duration = 1.4, start }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    const controls = animate(0, target, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => setValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [target, duration, start]);

  return value;
};

const Stat = ({ number, suffix, label, start, prefersReducedMotion }) => {
  const count = useCountUp(number, { start });

  return (
    <div className="about-stat">
      <span className="about-stat-number">
        {prefersReducedMotion ? number : count}
        <span className="about-stat-suffix">{suffix}</span>
      </span>
      <span className="about-stat-label">{label}</span>
    </div>
  );
};

const About = () => {
  const prefersReducedMotion = useReducedMotion();
  const statsRef = React.useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });

  return (
    <section id="about" className="about">
      <div className="container about-container">
        <motion.div
          className="about-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.span className="about-eyebrow" variants={fadeUp}>
            sobre mim
          </motion.span>
          <motion.h2 className="about-title" variants={fadeUp} custom={0.05}>
            Design que comunica de verdade.
          </motion.h2>
          <motion.p className="about-intro" variants={fadeUp} custom={0.1}>
            Sou Fábio Borges Filho, um designer visual apaixonado por criar materiais que comunicam de verdade.
          </motion.p>
          <motion.p className="about-description" variants={fadeUp} custom={0.15}>
            Trabalho diariamente com criação visual no Canva, desenvolvendo desde posts para redes sociais até identidades visuais completas. Meu foco é transformar ideias em peças visuais impactantes e funcionais.
          </motion.p>

          <motion.div className="about-stats" ref={statsRef} variants={fadeUp} custom={0.2}>
            <Stat
              number={1}
              suffix="+"
              label="Ano de Experiência"
              start={statsInView}
              prefersReducedMotion={prefersReducedMotion}
            />
            <div className="about-stat-divider" aria-hidden="true" />
            <Stat
              number={10}
              suffix="+"
              label="Projetos Realizados"
              start={statsInView}
              prefersReducedMotion={prefersReducedMotion}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
