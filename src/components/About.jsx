import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { PORTFOLIO_DATA } from '../constants/data';

function CounterAnimation({ end, duration = 1.8 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start * 100) / 100);
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{typeof count === 'number' ? count.toFixed(2) : 0}</span>;
}

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="about" className="relative py-28 px-6 md:px-12 max-w-6xl mx-auto z-10">
      {/* Background glow meshes */}
      <div className="glowing-bg-sphere w-80 h-80 bg-neon-violet top-20 left-10" />
      <div className="glowing-bg-sphere w-80 h-80 bg-electric-cyan bottom-20 right-10" />

      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <p className="text-electric-cyan font-mono text-sm tracking-widest uppercase mb-2">&gt; system.profile()</p>
          <h2 className="text-5xl md:text-6xl font-syne font-extrabold text-white">
            About Me
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-electric-cyan to-neon-violet mt-4 rounded-full" />
        </motion.div>

        {/* Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bio Narrative & Education */}
          <motion.div variants={itemVariants} className="flex flex-col gap-8">
            <div className="glass-card-premium p-8 flex flex-col gap-6">
              <h3 className="text-2xl font-syne font-bold text-electric-cyan">
                {PORTFOLIO_DATA.personalInfo.name}
              </h3>
              <p className="text-white/80 leading-relaxed font-dm-sans text-base">
                {PORTFOLIO_DATA.personalInfo.bio}
              </p>
            </div>

            {/* Education Card */}
            <div className="glass-card-premium p-8 flex flex-col gap-4">
              <p className="text-xs font-mono text-electric-cyan tracking-wider uppercase">&gt; education.fetch()</p>
              <div className="flex flex-col gap-1.5">
                <h4 className="text-white font-syne font-bold text-lg leading-snug">
                  {PORTFOLIO_DATA.personalInfo.education.degree}
                </h4>
                <p className="text-white/60 font-dm-sans text-sm">
                  {PORTFOLIO_DATA.personalInfo.education.university}
                </p>
                <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/5">
                  <span className="text-xs font-mono text-white/40">{PORTFOLIO_DATA.personalInfo.education.duration}</span>
                  <span className="text-xs font-mono bg-electric-cyan/10 text-electric-cyan px-2.5 py-1 rounded-full">CGPA {PORTFOLIO_DATA.personalInfo.education.cgpa}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Stats & Progress Ring */}
          <motion.div variants={itemVariants} className="flex flex-col gap-8">
            
            {/* CGPA Progress Widget */}
            <div className="glass-card-premium p-8 flex flex-col items-center justify-center text-center">
              <p className="text-xs font-mono text-electric-cyan tracking-wider uppercase mb-6">&gt; stats.cgpa</p>

              {/* SVG Radial Progress */}
              <div className="relative w-44 h-44 mb-6">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 100 100"
                >
                  {/* Outer circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="43"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.05)"
                    strokeWidth="3"
                  />
                  {/* Animated path */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="43"
                    fill="none"
                    stroke="url(#accentGradient)"
                    strokeWidth="4"
                    strokeDasharray={`${270 * 0.934} 270`}
                    initial={{ strokeDasharray: '0 270' }}
                    whileInView={{ strokeDasharray: `${270 * 0.934} 270` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: 'easeOut' }}
                    strokeLinecap="round"
                  />
                  {/* Linear gradient for progress stroke */}
                  <defs>
                    <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00F5FF" />
                      <stop offset="100%" stopColor="#8A2BE2" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Counter value overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-syne font-extrabold text-white leading-none">
                    <CounterAnimation end={parseFloat(PORTFOLIO_DATA.personalInfo.education.cgpa)} />
                  </span>
                  <span className="text-xs text-white/50 mt-1.5 font-mono">/ 10.00</span>
                </div>
              </div>

              <p className="text-white/60 font-dm-sans text-sm">Academic Standings (SRM CGPA)</p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Featured Projects', value: '5+' },
                { label: 'Core Stack Technologies', value: '20+' },
                { label: 'Verified Credentials', value: '5' },
                { label: 'Work Experience', value: '2+ Yrs' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="glass-card-premium p-6 text-center hover:scale-[1.02] transition-all"
                >
                  <p className="text-3xl font-syne font-extrabold bg-gradient-to-r from-electric-cyan to-neon-violet bg-clip-text text-transparent">{stat.value}</p>
                  <p className="text-xs text-white/50 mt-2 font-dm-sans tracking-wide uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
