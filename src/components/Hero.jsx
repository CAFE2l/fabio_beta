import React from 'react';
import './Hero.css';
import tropheuImage from '../../Trabalhos/tropheu-removebg-preview.png';
import HeroPhoto from './HeroPhoto';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span className="hero-badge-text">Designer Visual</span>
          </div>
          
          <h1 className="hero-title">
            FÁBIO
            <br />
            H. BORGES
            <br />
            FILHO
          </h1>
          
          <div className="hero-card">
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
          </div>
        </div>
        
        <div className="hero-image">
          <HeroPhoto />
        </div>
      </div>
    </section>
  );
};

export default Hero;