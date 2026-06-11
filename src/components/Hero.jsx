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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-24 lg:py-0">
      {/* 3D Neural Particles Background */}
      <Suspense fallback={<div className="absolute inset-0 bg-[#04030A]" />}>
        <div className="absolute inset-0">
          <NeuralParticles />
        </div>
      </Suspense>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#04030A]/20 via-[#04030A]/85 to-[#04030A] pointer-events-none" />

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
            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className="text-[#00FFD1] font-mono tracking-widest text-sm uppercase"
            >
              &gt; hello.world()
            </motion.p>

            {/* Main Name */}
            <motion.h1
              variants={itemVariants}
              className="text-6xl sm:text-7xl md:text-8xl font-syne font-bold tracking-tight leading-[1.1] pb-3"
            >
              <span className="block text-white">Ayush</span>
              <span className="block bg-gradient-to-r from-[#00FFD1] to-[#7B2FFF] bg-clip-text text-transparent">
                Raj
              </span>
            </motion.h1>

            {/* Cycling Titles */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-xl md:text-2xl font-dm-sans font-medium text-white/90"
            >
              <span className="text-[#00FFD1] font-mono">&gt;</span>
              <TypewriterText
                texts={[
                  'Full-Stack Developer',
                  'ML Researcher',
                  'Big Data Engineer',
                  'Building the future',
                ]}
                speed={80}
                delayBetween={2500}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-white/70 leading-relaxed max-w-xl font-dm-sans"
            >
              Crafting intelligent, scalable solutions at the intersection of AI, data science, and
              full-stack development. B.Tech CS @ SRM with a 9.34 CGPA.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <MagneticButton
                className="px-8 py-4 bg-[#00FFD1] text-[#04030A] font-syne font-bold rounded-lg hover:shadow-lg hover:shadow-[#00FFD1]/40 transition-all duration-300 transform hover:-translate-y-0.5"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </MagneticButton>

              <MagneticButton
                className="px-8 py-4 border-2 border-white/20 text-white hover:border-[#00FFD1] hover:text-[#00FFD1] font-syne font-bold rounded-lg transition-all duration-300"
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
              <div className="w-64 h-80 bg-white/5 rounded-2xl animate-pulse flex items-center justify-center">
                <span className="text-white/30 font-mono">system.3D_render()</span>
              </div>
            }>
              <div className="w-full max-w-[340px] md:max-w-[400px]">
                <Hero3DScene />
              </div>
            </Suspense>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <p className="text-xs text-white/40 uppercase tracking-widest mb-2 font-mono">Scroll to explore</p>
          <svg
            className="w-4 h-4 text-[#00FFD1]"
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
