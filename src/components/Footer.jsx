import React from 'react';
import './Footer.css';
import instagramIcon from '../../icons/Instagram.png';
import linkedinIcon from '../../icons/LinkedIn.png';
import gmailIcon from '../../icons/Gmail.png';
import whatsappIcon from '../../icons/Whatsapp.png';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: instagramIcon,
      href: 'https://instagram.com/fabioborges',
      color: '#E1306C',
    },
    {
      name: 'LinkedIn',
      icon: linkedinIcon,
      href: 'https://linkedin.com/in/fabioborges',
      color: '#0A66C2',
    },
    {
      name: 'WhatsApp',
      icon: whatsappIcon,
      href: 'https://wa.me/5541999999999',
      color: '#25D366',
    },
    {
      name: 'Email',
      icon: gmailIcon,
      href: 'mailto:contato@fabioborges.com',
      color: '#EA4335',
    },
  ];

  return (
    <footer className="cartoon-footer">
      <div className="container footer-container">
        <div className="footer-decoration">
          <div className="decoration-star star-1">✦</div>
          <div className="decoration-star star-2">✦</div>
          <div className="decoration-star star-3">✦</div>
          <div className="decoration-star star-4">✦</div>
        </div>

        <div className="footer-content">
          <div className="footer-cta">
            <div className="footer-badge">
              <span className="footer-badge-dot"></span>
              <span className="footer-badge-text">Vamos Conversar?</span>
            </div>
            <h2 className="footer-title">Disponível para novos projetos</h2>
            <p className="footer-description">
              Entre em contato através das redes sociais ou e-mail. Estou sempre aberto a novas colaborações e oportunidades criativas.
            </p>
          </div>

          <div className="footer-social">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-card"
                style={{ '--icon-color': social.color }}
              >
                <div className="social-icon-container">
                  <img 
                    src={social.icon} 
                    alt={social.name}
                    className="social-icon-img"
                  />
                </div>
                <span className="social-icon-name">{social.name}</span>
              </a>
            ))}
          </div>

          <div className="footer-brand">
            <div className="footer-brand-avatar">
              <span className="footer-brand-initials">FB</span>
            </div>
            <div className="footer-brand-text">
              <span className="footer-brand-name">Fábio Borges</span>
              <span className="footer-brand-tagline">Designer Visual</span>
            </div>
          </div>

          <div className="footer-copyright">
            <p>© 2026 Fábio Henrique Borges Filho. Feito com ☕ e criatividade.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;