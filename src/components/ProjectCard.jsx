import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

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
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link to={`/project/${project.slug}`} className="project-card-link">
        <motion.div
          className="project-card-inner"
          whileHover={{ 
            rotateX: 5,
            rotateY: -5,
            scale: 1.02,
            y: -8
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20 
          }}
          style={{
            transformStyle: "preserve-3d",
            perspective: 1000
          }}
        >
          {/* Category Badge */}
          <motion.div 
            className="project-category-badge"
            animate={{ 
              scale: isHovered ? 1.05 : 1,
              y: isHovered ? -2 : 0
            }}
            transition={{ duration: 0.2 }}
          >
            <span className="project-category-text">{project.tags[0]}</span>
          </motion.div>

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

            <motion.div 
              className="project-year"
              animate={{ opacity: isHovered ? 1 : 0.7 }}
            >
              {project.year}
            </motion.div>

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
              opacity: isHovered ? 0.3 : 0,
              backdropFilter: isHovered ? 'blur(8px)' : 'blur(0px)'
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
