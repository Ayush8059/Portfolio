import { Suspense } from 'react';
import { motion } from 'framer-motion';
import NeuralParticles from './NeuralParticles';
import MagneticButton from './MagneticButton';
import TypewriterText from './TypewriterText';
import Hero3DScene from './Hero3DScene';
import { PORTFOLIO_DATA } from '../constants/data';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-24 lg:py-0">
      {/* 3D Neural Particles Background */}
      <Suspense fallback={<div className="absolute inset-0 bg-[#06040C]" />}>
        <div className="absolute inset-0">
          <NeuralParticles />
        </div>
      </Suspense>

      {/* Subtle background glow spheres for depth */}
      <div className="glowing-bg-sphere w-96 h-96 bg-[#7B2FFF] top-1/4 left-1/10" />
      <div className="glowing-bg-sphere w-96 h-96 bg-[#00FFD1] bottom-1/4 right-1/10" />

      {/* Gradient overlay to fade to dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-black/10 via-cosmic-black/75 to-cosmic-black pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Bio Info */}
          <div className="flex flex-col gap-6 lg:col-span-7 text-left order-2 lg:order-1 pb-4">
            
            {/* Availability Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-electric-cyan animate-pulse shadow-[0_0_10px_0_rgba(0,245,255,1)]" />
              <span className="text-xs font-mono text-white/80 uppercase tracking-widest">Available for Opportunities</span>
            </motion.div>

            {/* Main Name */}
            <motion.h1
              variants={itemVariants}
              className="text-6xl sm:text-7xl md:text-8xl font-syne font-extrabold tracking-tight leading-[1.08] pb-2"
            >
              <span className="block text-white">Ayush</span>
              <span className="block bg-gradient-to-r from-electric-cyan via-accent-mint to-neon-violet bg-clip-text text-transparent">
                Raj
              </span>
            </motion.h1>

            {/* Cycling Titles */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-xl md:text-2xl font-dm-sans font-medium text-white/90"
            >
              <span className="text-electric-cyan font-mono">&gt;</span>
              <TypewriterText
                texts={[
                  'Full-Stack Developer',
                  'ML Researcher',
                  'Big Data Engineer',
                  'Building scalable backends',
                ]}
                speed={80}
                delayBetween={2200}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-white/70 leading-relaxed max-w-xl font-dm-sans"
            >
              Crafting intelligent, scalable solutions at the intersection of AI, data science, and
              full-stack development. B.Tech Computer Science student at SRM with a 9.34 CGPA.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <MagneticButton
                className="px-8 py-4 bg-electric-cyan text-cosmic-black font-syne font-bold rounded-xl shadow-[0_4px_20px_0_rgba(0,245,255,0.25)] hover:shadow-[0_4px_30px_0_rgba(0,245,255,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </MagneticButton>

              <MagneticButton
                className="px-8 py-4 border border-white/10 hover:border-electric-cyan text-white hover:text-electric-cyan font-syne font-bold rounded-xl bg-white/5 hover:bg-electric-cyan/5 transition-all duration-300 cursor-pointer"
                onClick={() => window.open(PORTFOLIO_DATA.personalInfo.resumeLink, '_blank')}
              >
                Download Resume
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right: 3D Interactive Portrait */}
          <motion.div 
            variants={itemVariants} 
            className="lg:col-span-5 w-full flex justify-center order-1 lg:order-2"
          >
            <Suspense fallback={
              <div className="w-64 h-80 bg-white/5 rounded-2xl animate-pulse flex items-center justify-center border border-white/10">
                <span className="text-white/30 font-mono">system.3D_render()</span>
              </div>
            }>
              <div className="w-full max-w-[340px] md:max-w-[380px]">
                <Hero3DScene />
              </div>
            </Suspense>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center cursor-pointer"
          onClick={() => scrollToSection('about')}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <p className="text-xs text-white/40 uppercase tracking-widest mb-2 font-mono">Scroll to explore</p>
          <svg
            className="w-4 h-4 text-electric-cyan"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
