import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <div className="about-content">
          <h2 className="about-title">Sobre Mim</h2>
          <p className="about-intro">
            Sou Fábio Borges Filho, um designer visual apaixonado por criar materiais que comunicam de verdade.
          </p>
          <p className="about-description">
            Trabalho diariamente com criação visual no Canva, desenvolvendo desde posts para redes sociais até identidades visuais completas. Meu foco é transformar ideias em peças visuais impactantes e funcionais.
          </p>
          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat-number">+5</span>
              <span className="about-stat-label">Anos de Experiência</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">+100</span>
              <span className="about-stat-label">Projetos Realizados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;