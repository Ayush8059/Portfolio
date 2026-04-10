import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants/data';
import heroImage from '../assets/ayush-profile-photo.jpg';

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const { titleSequence, name, resumeLink } = PORTFOLIO_DATA.personalInfo;

  useEffect(() => {
    let timer;
    const currentTitle = titleSequence[titleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
        setTypingSpeed(50);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    }

    if (!isDeleting && displayedText === currentTitle) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === '') {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titleSequence.length);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, titleIndex, titleSequence, typingSpeed]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left z-10"
          >
            <h2 className="text-electric-cyan font-orbitron tracking-widest mb-4">HELLO, UNIVERSE. I AM</h2>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold font-orbitron mb-6 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              {name}
            </h1>
            
            <div className="h-12 mb-8">
              <span className="text-2xl sm:text-3xl text-warm-amber font-sora font-light">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 text-lg leading-relaxed">
              Weaving complex backends with stunning frontends. Ready to bring the future of data and AI to the web.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <a 
                href="#projects"
                className="group relative px-8 py-4 bg-electric-cyan text-cosmic-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 glow-cyan"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a 
                href={resumeLink}
                download="Ayush_Raj_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="group px-8 py-4 bg-transparent border border-white/20 hover:border-electric-cyan hover:text-electric-cyan text-white font-bold rounded-full transition-all flex items-center gap-2 hover:shadow-[0_0_15px_rgba(0,245,255,0.3)]"
              >
                Download Resume <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Profile Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 relative w-full max-w-sm sm:max-w-md lg:max-w-lg"
          >
            <div className="relative mx-auto aspect-square overflow-hidden rounded-full border-4 border-electric-cyan/80 bg-cosmic-navy shadow-[0_0_40px_rgba(0,245,255,0.28)]">
              <img 
                src={heroImage} 
                alt={name}
                className="h-full w-full object-cover object-center"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll indicator down */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-electric-cyan uppercase tracking-widest font-orbitron">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-electric-cyan to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
