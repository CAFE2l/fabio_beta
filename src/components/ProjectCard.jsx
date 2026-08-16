import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [-7, 7]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [7, -7]);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current || isTouchDevice || prefersReducedMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    mouseX.set((x - centerX) / centerX);
    mouseY.set((y - centerY) / centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const springConfig = { damping: 24, stiffness: 600 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  const shouldUse3D = !isTouchDevice && !prefersReducedMotion;

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseLeave();
      }}
    >
      <Link to={`/project/${project.slug}`} className="project-card-link" aria-label={`Ver projeto: ${project.title}`}>
        <motion.div
          className="project-glow"
          animate={{ opacity: isHovered ? 0.55 : 0, scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.3 }}
          aria-hidden="true"
        />

        <motion.div
          ref={cardRef}
          className="project-card-inner"
          style={{
            rotateX: shouldUse3D ? springRotateX : 0,
            rotateY: shouldUse3D ? springRotateY : 0,
            transformStyle: 'preserve-3d',
          }}
          onMouseMove={handleMouseMove}
          whileHover={{ scale: shouldUse3D ? 1.02 : 1.01, y: shouldUse3D ? -8 : -4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <motion.div
            className="project-image-container"
            layoutId={`project-image-${project.slug}`}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="project-image"
              loading="lazy"
              whileHover={shouldUse3D ? { scale: 1.06 } : { scale: 1.03 }}
              transition={{ duration: 0.35 }}
            />
            <div className="project-image-overlay" aria-hidden="true" />
            <span className="project-image-year">{project.year}</span>
          </motion.div>

          <div className="project-content">
            <motion.h3
              className="project-title"
              layoutId={`project-title-${project.slug}`}
            >
              {project.title}
            </motion.h3>

            <motion.p
              className="project-subtitle"
              layoutId={`project-subtitle-${project.slug}`}
            >
              {project.subtitle}
            </motion.p>

            <motion.span
              className="project-view-button"
              animate={{
                gap: isHovered ? 10 : 8,
                background: isHovered
                  ? 'linear-gradient(135deg, rgba(74,144,164,0.16), rgba(91,164,164,0.16))'
                  : 'linear-gradient(135deg, rgba(74,144,164,0.1), rgba(91,164,164,0.1))',
              }}
              transition={{ duration: 0.2 }}
            >
              <span className="project-view-text">Ver projeto</span>
              <ArrowRight
                className="project-view-arrow"
                aria-hidden="true"
                style={{ transform: isHovered ? 'translateX(3px)' : 'translateX(0)' }}
              />
            </motion.span>
          </div>

          <div className="project-decoration" aria-hidden="true">
            <span className="decoration-star star-1">✦</span>
            <span className="decoration-star star-2">✦</span>
            <span className="decoration-circle" />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
