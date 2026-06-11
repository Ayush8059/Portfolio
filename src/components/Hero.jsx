import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import FloatingParticles from './FloatingParticles';
import TypewriterText from './TypewriterText';
import { PORTFOLIO_DATA } from '../constants/data';
import heroImage from '../assets/ayush-profile-photo.jpg';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const { name, resumeLink } = PORTFOLIO_DATA.personalInfo;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background stars particles */}
      <FloatingParticles />

      {/* Hero Content Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left order-2 lg:order-1">
            
            <p className="text-electric-cyan font-orbitron font-bold tracking-widest text-xs uppercase glow-cyan-text">
              HELLO, UNIVERSE. I AM
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-orbitron font-black text-white leading-tight">
              {name}
            </h1>

            <div className="h-8">
              <span className="text-lg md:text-xl text-warm-amber font-orbitron font-semibold tracking-wide uppercase">
                <TypewriterText
                  texts={[
                    'Full-Stack Developer',
                    'ML Researcher',
                    'Big Data Engineer',
                  ]}
                  speed={80}
                  delayBetween={2200}
                />
              </span>
            </div>

            <p className="text-white/70 max-w-xl text-sm md:text-base font-sora leading-relaxed">
              Weaving complex backends with stunning frontends. Ready to bring the future of data and AI to the web.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group px-6 py-3 bg-electric-cyan text-cosmic-black font-bold text-xs uppercase tracking-wider rounded-full hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(0,245,255,0.3)]"
              >
                <span>View Projects</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a 
                href={resumeLink}
                download="Ayush_Raj_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-transparent border border-white/30 text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-white/5 hover:border-white transition-all flex items-center justify-center gap-2"
              >
                <span>Download Resume</span>
                <Download size={14} />
              </a>
            </div>

          </div>

          {/* Right Portrait */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-electric-cyan/90 bg-cosmic-navy overflow-hidden shadow-[0_0_35px_rgba(0,245,255,0.35)] hover:scale-[1.02] transition-transform duration-500">
              <img 
                src={heroImage} 
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
