import React, { useState, useEffect } from 'react';
import profileImage from '../../Trabalhos/img_violada.jpeg';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#hero', id: 'hero' },
    { name: 'Sobre', href: '#about', id: 'about' },
    { name: 'Habilidades', href: '#skills', id: 'skills' },
    { name: 'Trabalhos', href: '#projects', id: 'projects' },
    { name: 'Contato', href: '#footer', id: 'footer' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      // Detect scroll for shadow effect
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`cartoon-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-wrapper">
        <div className="navbar-panel">
          <div className="navbar-content">
            <div className="navbar-brand">
              <div className="brand-avatar">
                <img 
                  src={profileImage} 
                  alt="Fábio Borges"
                  className="navbar-avatar-image"
                />
              </div>
              <div className="brand-text">
                <span className="brand-name">Fábio Borges</span>
                <span className="brand-tagline">Designer Visual</span>
              </div>
            </div>

            <div className="navbar-desktop">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`nav-link ${activeSection === link.id ? 'nav-link-active' : ''}`}
                >
                  <span className="nav-link-text">{link.name}</span>
                  {activeSection === link.id && <span className="nav-link-indicator" />}
                </a>
              ))}
            </div>

            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              <span className={`menu-icon ${isMobileMenuOpen ? 'menu-icon-open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="mobile-menu">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`mobile-nav-link ${activeSection === link.id ? 'mobile-nav-link-active' : ''}`}
                >
                  <span className="mobile-nav-link-text">{link.name}</span>
                  {activeSection === link.id && <span className="mobile-nav-link-indicator" />}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="navbar-decoration">
        <div className="decoration-star decoration-star-1">✦</div>
        <div className="decoration-star decoration-star-2">✦</div>
        <div className="decoration-star decoration-star-3">✦</div>
      </div>
    </nav>
  );
};

export default Navbar;