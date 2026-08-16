import React from 'react';
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import canvaLogo from '../../Trabalhos/canva.png';
import './Skills.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const toolCardVariants = {
  ...fadeUp,
  hover: {
    scale: 1.02,
    y: -4,
    transition: { type: 'spring', stiffness: 320, damping: 22 },
  },
};

const toolIconVariants = {
  hover: {
    rotate: -8,
    scale: 1.1,
    transition: { type: 'spring', stiffness: 300, damping: 11 },
  },
};

const Skills = () => {
  const radarRef = React.useRef(null);
  const radarInView = useInView(radarRef, { once: true, margin: '-80px' });
  const prefersReducedMotion = useReducedMotion();

  const skills = [
    { subject: 'Criação no Canva', value: 92, fullMark: 100 },
    { subject: 'Identidade Visual', value: 86, fullMark: 100 },
    { subject: 'Social Media', value: 90, fullMark: 100 },
    { subject: 'Apresentações', value: 82, fullMark: 100 },
    { subject: 'Tipografia', value: 80, fullMark: 100 },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container skills-container">
        <motion.div
          className="skills-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.span className="skills-eyebrow" variants={fadeUp}>
            habilidades
          </motion.span>
          <motion.h2 className="skills-heading-title" variants={fadeUp} custom={0.05}>
            O que eu sei fazer bem.
          </motion.h2>
        </motion.div>

        <div className="skills-grid">
          <motion.div
            ref={radarRef}
            className="skills-radar-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.div className="skills-card-header" variants={fadeUp}>
              <span className="skills-label skills-label-blue">ponto forte</span>
              <h3 className="skills-title">Um radar de pontos fortes.</h3>
            </motion.div>
            <motion.div className="skills-radar" variants={fadeUp} custom={0.1}>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="72%" data={skills}>
                  <PolarGrid stroke="rgba(44, 62, 80, 0.14)" strokeDasharray="3 3" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: '#7A8FA5', fontSize: 11, fontFamily: 'Inter, sans-serif' }}
                  />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Skills"
                    dataKey="value"
                    stroke="#4A90A4"
                    strokeWidth={2.5}
                    fill="#4A90A4"
                    fillOpacity={radarInView ? 0.32 : 0}
                    isAnimationActive
                    animationDuration={1400}
                    animationBegin={radarInView ? 0 : 9999}
                    dot={{ r: 3, fill: '#4A90A4', strokeWidth: 0 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.96)',
                      borderRadius: '12px',
                      border: '1px solid rgba(44, 62, 80, 0.12)',
                      fontFamily: 'Inter, sans-serif',
                      boxShadow: '0 8px 24px rgba(44, 62, 80, 0.12)',
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </motion.div>
          </motion.div>

          <motion.div
            className="skills-tools-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.div className="skills-card-header" variants={fadeUp}>
              <span className="skills-label skills-label-warm">ferramenta</span>
              <h3 className="skills-title">O que eu uso no dia a dia.</h3>
            </motion.div>
            <motion.a
              href="https://www.canva.com"
              target="_blank"
              rel="noopener noreferrer"
              className="skills-tool-card"
              variants={toolCardVariants}
              custom={0.1}
              whileHover={prefersReducedMotion ? undefined : 'hover'}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
            >
              <motion.span className="skills-tool-icon" variants={toolIconVariants}>
                <img src={canvaLogo} alt="" className="skills-tool-icon-img" />
              </motion.span>
              <span className="skills-tool-body">
                <span className="skills-tool-name">
                  Canva
                  <ArrowUpRight className="skills-tool-arrow" aria-hidden="true" />
                </span>
                <span className="skills-tool-caption">
                  Design e edição visual para redes, identidades e materiais completos.
                </span>
              </span>
            </motion.a>

            <motion.div className="skills-note" variants={fadeUp} custom={0.18}>
              <Sparkles className="skills-note-icon" aria-hidden="true" />
              <p>
                Do rascunho à peça final: organização, referência e direção visual em cada entrega.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
