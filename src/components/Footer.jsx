import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';
import gmailIcon from '../../icons/Gmail.png';
import instagramIcon from '../../icons/Instagram.png';
import linkedinIcon from '../../icons/LinkedIn.png';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const Footer = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: instagramIcon,
      href: 'https://instagram.com',
      color: '#E1306C',
      glow: 'rgba(225, 48, 108, 0.28)',
    },
    {
      name: 'LinkedIn',
      icon: linkedinIcon,
      href: 'https://www.linkedin.com/in/f%C3%A1bio-henrique-b-0775b23aa/',
      color: '#0A66C2',
      glow: 'rgba(10, 102, 194, 0.28)',
    },
    {
      name: 'Email',
      icon: gmailIcon,
      href: 'mailto:fhbfabao@gmail.com',
      color: '#EA4335',
      glow: 'rgba(234, 67, 53, 0.28)',
    },
  ];

  return (
    <footer id="footer" className="cartoon-footer">
      <div className="footer-decor" aria-hidden="true">
        <span className="footer-decor-star footer-decor-star-1">✦</span>
        <span className="footer-decor-star footer-decor-star-2">✦</span>
      </div>

      <div className="container footer-container">
        <motion.div
          className="footer-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.span className="footer-eyebrow" variants={fadeUp}>
            contato
          </motion.span>
          <motion.h2 className="footer-title" variants={fadeUp} custom={0.05}>
            Vamos conversar?
          </motion.h2>
          <motion.p className="footer-subtitle" variants={fadeUp} custom={0.1}>
            Me encontre nas redes sociais ou entre em contato por email.
          </motion.p>
        </motion.div>

        <motion.div
          className="footer-social"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-card"
              style={{ '--icon-color': social.color, '--icon-glow': social.glow }}
              variants={fadeUp}
              custom={0.15 + index * 0.08}
            >
              <span className="social-icon-container">
                <img src={social.icon} alt="" className="social-icon-img" />
              </span>
              <span className="social-icon-body">
                <span className="social-icon-name">{social.name}</span>
                <span className="social-icon-hint">
                  {social.name === 'Email' ? 'fhbfabao@gmail.com' : `@${social.name.toLowerCase()}`}
                </span>
              </span>
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
          <p>© 2026 Fábio Borges — todos os direitos reservados</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
