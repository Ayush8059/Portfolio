import React, { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import ScrollProgressBar from './components/ScrollProgressBar';
import FloatingParticles from './components/FloatingParticles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  
  // Clean up any vite template defaults just in case
  useEffect(() => {
    document.title = "Ayush Raj | Portfolio";
  }, []);

  return (
    <div className="relative selection:bg-electric-cyan/30 selection:text-white">
      <CustomCursor />
      <ScrollProgressBar />
      <FloatingParticles />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
