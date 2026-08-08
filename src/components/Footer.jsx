import React from 'react';
import './Footer.css';
import gmailIcon from '../../icons/Gmail.png';
import instagramIcon from '../../icons/Instagram.png';
import linkedinIcon from '../../icons/LinkedIn.png';

const Footer = () => {
  return (
    <footer id="footer" className="cartoon-footer">
      <div className="container footer-container">
        <div className="footer-social">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-card"
            style={{ '--icon-color': '#E1306C' }}
          >
            <div className="social-icon-container">
              <img
                src={instagramIcon}
                alt="Instagram"
                className="social-icon-img"
              />
            </div>
            <span className="social-icon-name">Instagram</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-card"
            style={{ '--icon-color': '#0A66C2' }}
          >
            <div className="social-icon-container">
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="social-icon-img"
              />
            </div>
            <span className="social-icon-name">LinkedIn</span>
          </a>
          <a
            href="mailto:fhbfabao@gmail.com"
            className="social-icon-card"
            style={{ '--icon-color': '#EA4335' }}
          >
            <div className="social-icon-container">
              <img
                src={gmailIcon}
                alt="Email"
                className="social-icon-img"
              />
            </div>
            <span className="social-icon-name">Email</span>
          </a>
        </div>
        <div className="footer-copyright">
          <p>© 2026 todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;