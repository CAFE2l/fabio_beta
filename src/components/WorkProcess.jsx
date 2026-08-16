import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  MessageSquareText,
  Palette,
  PencilLine,
  SlidersHorizontal,
  PackageCheck,
} from 'lucide-react';
import './WorkProcess.css';

const steps = [
  {
    icon: MessageSquareText,
    title: 'Briefing',
    description: 'Entendo a necessidade, o público e o objetivo da marca antes de qualquer traço.',
  },
  {
    icon: Palette,
    title: 'Moodboard',
    description: 'Reúno referências visuais e defino a direção estética do projeto.',
  },
  {
    icon: PencilLine,
    title: 'Rascunho',
    description: 'Primeiras versões e conceitos prontos para a sua validação.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Refinamento',
    description: 'Ajustes finos com base no seu feedback até o encaixe perfeito.',
  },
  {
    icon: PackageCheck,
    title: 'Entrega',
    description: 'Arquivos finais organizados, prontos para usar onde precisar.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const stepsContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
  hover: {
    scale: 1.02,
    y: -4,
    transition: { type: 'spring', stiffness: 320, damping: 22 },
  },
};

const WorkProcess = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const handleChange = (e) => setIsDesktop(e.matches);
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  return (
    <section id="process" className="workprocess">
      <div className="container workprocess-container">
        <motion.div
          className="workprocess-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.span className="workprocess-eyebrow" variants={fadeUp}>
            processo
          </motion.span>
          <motion.h2 className="workprocess-title" variants={fadeUp} custom={0.05}>
            Como eu trabalho.
          </motion.h2>
          <motion.p className="workprocess-subtitle" variants={fadeUp} custom={0.1}>
            Da primeira conversa à entrega final: um fluxo claro em cinco etapas.
          </motion.p>
        </motion.div>

        <motion.div
          className="workprocess-steps"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stepsContainer}
        >
          <motion.div
            className="workprocess-track"
            aria-hidden="true"
            initial={prefersReducedMotion ? false : isDesktop ? { scaleX: 0 } : { scaleY: 0 }}
            whileInView={
              prefersReducedMotion ? undefined : isDesktop ? { scaleX: 1 } : { scaleY: 1 }
            }
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            style={{ transformOrigin: isDesktop ? 'left center' : 'top center' }}
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.title}
                className="workprocess-step"
                variants={stepVariants}
                whileHover={prefersReducedMotion ? undefined : 'hover'}
              >
                <span className="workprocess-step-index" aria-hidden="true">
                  0{index + 1}
                </span>
                <span className="workprocess-step-badge">
                  <Icon className="workprocess-step-icon" aria-hidden="true" />
                </span>
                <h3 className="workprocess-step-title">{step.title}</h3>
                <p className="workprocess-step-desc">{step.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkProcess;
