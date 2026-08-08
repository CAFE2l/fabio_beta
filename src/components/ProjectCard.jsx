import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [-8, 8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [8, -8]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
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

  const springConfig = {
    damping: 25,
    stiffness: 700,
  };

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseLeave();
      }}
    >
      <Link to={`/project/${project.slug}`} className="project-card-link">
        <motion.div
          ref={cardRef}
          className="project-card-inner"
          style={{
            rotateX: useSpring(rotateX, springConfig),
            rotateY: useSpring(rotateY, springConfig),
            transformStyle: "preserve-3d",
          }}
          onMouseMove={handleMouseMove}
          whileHover={{ 
            scale: 1.02,
            y: -8
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20 
          }}
        >
          {/* Image Container */}
          <motion.div 
            className="project-image-container"
            layoutId={`project-image-${project.slug}`}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="project-image"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="project-image-overlay" />
          </motion.div>

          {/* Content */}
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

            {/* View Project Button */}
            <motion.div 
              className="project-view-button"
              animate={{ 
                x: isHovered ? 0 : -10,
                opacity: isHovered ? 1 : 0.8
              }}
              transition={{ duration: 0.2 }}
            >
              <span className="project-view-text">Ver projeto</span>
              <motion.span 
                className="project-view-arrow"
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="project-decoration">
            <div className="decoration-star star-1">✦</div>
            <div className="decoration-star star-2">✦</div>
            <div className="decoration-circle" />
          </div>

          {/* Glass Effect on Hover */}
          <motion.div 
            className="project-glass-effect"
            animate={{ 
              opacity: isHovered ? 0.4 : 0,
              backdropFilter: isHovered ? 'blur(12px)' : 'blur(0px)'
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Dynamic Glow */}
          <motion.div 
            className="project-glow"
            animate={{ 
              opacity: isHovered ? 0.6 : 0,
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
