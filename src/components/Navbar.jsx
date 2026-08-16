import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import profileImage from '../../Trabalhos/img_violada.jpeg';

const navLinks = [
  { name: 'Início', href: '#hero', id: 'hero' },
  { name: 'Sobre', href: '#about', id: 'about' },
  { name: 'Habilidades', href: '#skills', id: 'skills' },
  { name: 'Trabalhos', href: '#projects', id: 'projects' },
  { name: 'Contato', href: '#footer', id: 'footer' },
];

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -12, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.28, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.98,
    transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(link.id);
            break;
          }
        }
      }

      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };

    if (isMobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = useCallback(
    (e, href) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(`/${href}`);
      }
      setIsMobileMenuOpen(false);
    },
    [navigate]
  );

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progressScale }} aria-hidden="true" />
      <nav className={`cartoon-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-panel">
          <div className="navbar-content">
            <Link
              to="/#hero"
              onClick={() => setIsMobileMenuOpen(false)}
              className="navbar-brand"
              aria-label="Fábio Borges — voltar ao início"
            >
              <div className="brand-avatar">
                <img
                  src={profileImage}
                  alt=""
                  className="navbar-avatar-image"
                />
              </div>
              <div className="brand-text">
                <span className="brand-name">Fábio Borges</span>
                <span className="brand-tagline">Designer Visual</span>
              </div>
            </Link>

            <div className="navbar-desktop">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`nav-link ${activeSection === link.id ? 'nav-link-active' : ''}`}
                  aria-current={activeSection === link.id ? 'true' : undefined}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <button
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className={`menu-icon ${isMobileMenuOpen ? 'menu-icon-open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                id="mobile-menu"
                className="mobile-menu"
                role="menu"
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    role="menuitem"
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`mobile-nav-link ${activeSection === link.id ? 'mobile-nav-link-active' : ''}`}
                  >
                    <span className="mobile-nav-link-text">{link.name}</span>
                    <span className="mobile-nav-link-indicator" aria-hidden="true">
                      {activeSection === link.id ? '✦' : ''}
                    </span>
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="navbar-decoration" aria-hidden="true">
          <div className="decoration-star decoration-star-1">✦</div>
          <div className="decoration-star decoration-star-2">✦</div>
          <div className="decoration-star decoration-star-3">✦</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
