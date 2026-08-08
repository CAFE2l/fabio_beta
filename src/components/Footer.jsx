import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';
import gmailIcon from '../../icons/Gmail.png';
import instagramIcon from '../../icons/Instagram.png';
import linkedinIcon from '../../icons/LinkedIn.png';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: instagramIcon,
      href: 'https://instagram.com',
      color: '#E1306C',
    },
    {
      name: 'LinkedIn',
      icon: linkedinIcon,
      href: 'https://www.linkedin.com/in/f%C3%A1bio-henrique-b-0775b23aa/',
      color: '#0A66C2',
    },
    {
      name: 'Email',
      icon: gmailIcon,
      href: 'mailto:fhbfabao@gmail.com',
      color: '#EA4335',
    },
  ];

  return (
    <footer id="footer" className="cartoon-footer">
      <div className="container footer-container">
        <motion.div 
          className="footer-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="footer-title">Vamos conversar?</h2>
          <p className="footer-subtitle">Me encontre nas redes sociais ou entre em contato por email</p>
        </motion.div>

        <motion.div 
          className="footer-social"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-card"
              style={{ '--icon-color': social.color }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
              whileHover={{ 
                scale: 1.05,
                y: -4,
                boxShadow: '0 8px 24px rgba(44, 62, 80, 0.15)'
              }}
            >
              <div className="social-icon-container">
                <img
                  src={social.icon}
                  alt={social.name}
                  className="social-icon-img"
                />
              </div>
              <span className="social-icon-name">{social.name}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="footer-divider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />

        <motion.div 
          className="footer-copyright"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>© 2026 todos os direitos reservados</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;