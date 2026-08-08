import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container contact-container">
        <div className="contact-card">
          <div className="contact-decoration">
            <div className="decoration-star star-1">✦</div>
            <div className="decoration-star star-2">✦</div>
            <div className="decoration-star star-3">✦</div>
          </div>
          <div className="contact-content">
            <div className="contact-badge">
              <span className="contact-badge-dot"></span>
              <span className="contact-badge-text">Vamos Conversar?</span>
            </div>
            <h2 className="contact-title">Disponível para novos projetos</h2>
            <p className="contact-description">
              Estou disponível para novos projetos e colaborações. Entre em contato para discutirmos como posso ajudar com seus projetos visuais.
            </p>
            <a href="mailto:contato@fabioborges.com" className="contact-button">
              <span className="contact-button-text">Entrar em Contato</span>
              <span className="contact-button-icon">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;