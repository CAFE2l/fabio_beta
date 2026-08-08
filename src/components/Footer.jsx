import React from 'react';
import './Footer.css';
import gmailIcon from '../../icons/Gmail.png';

const Footer = () => {
  return (
    <footer id="footer" className="cartoon-footer">
      <div className="container footer-container">
        <div className="footer-social">
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