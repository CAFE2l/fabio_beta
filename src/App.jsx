import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ProjectPage from './pages/ProjectPage';
import BackToTop from './components/BackToTop';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const attemptScroll = (tries = 0) => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else if (tries < 20) {
          window.setTimeout(() => attemptScroll(tries + 1), 100);
        }
      };
      attemptScroll();
      return;
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <ScrollManager />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                </>
              }
            />
            <Route path="/project/:slug" element={<ProjectPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
