import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { PORTFOLIO_DATA } from '../constants/data';

function CounterAnimation({ end, duration = 2 }) {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Animated background mesh */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#7B2FFF] rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#00FFD1] rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <p className="text-electric-cyan font-mono text-sm tracking-widest uppercase mb-2">&gt; system.profile()</p>
          <h2 className="text-5xl md:text-6xl font-syne font-bold text-white">
            About Me
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-electric-cyan to-neon-violet mt-4 rounded-full" />
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Bio */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <h3 className="text-2xl font-syne font-bold text-[#00FFD1]">
              {PORTFOLIO_DATA.personalInfo.name}
            </h3>
            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              {PORTFOLIO_DATA.personalInfo.bio}
            </p>

            {/* Education Card */}
            <div className="mt-8 p-6 glass-card">
              <p className="text-sm terminal-heading mb-3">&gt; education.fetch()</p>
              <div className="flex flex-col gap-2">
                <p className="text-white font-semibold">
                  {PORTFOLIO_DATA.personalInfo.education.degree}
                </p>
                <p className="text-white/60">
                  {PORTFOLIO_DATA.personalInfo.education.university}
                </p>
                <p className="text-xs text-white/50">
                  {PORTFOLIO_DATA.personalInfo.education.duration}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div variants={itemVariants} className="flex flex-col gap-8">
            {/* CGPA Card with Arc Progress */}
            <div className="p-8 glass-card flex flex-col items-center justify-center text-center">
              <p className="text-sm terminal-heading mb-6">&gt; stats.cgpa</p>

              {/* Radial Progress Ring */}
              <div className="relative w-40 h-40 mb-6">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 100 100"
                >
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="2"
                  />
                  {/* Progress circle - 9.34/10 = 93.4% */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#00FFD1"
                    strokeWidth="3"
                    strokeDasharray={`${282 * 0.934} 282`}
                    initial={{ strokeDasharray: '0 282' }}
                    whileInView={{ strokeDasharray: `${282 * 0.934} 282` }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                    strokeLinecap="round"
                  />
                </svg>

                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-syne font-bold glow-mint">
                    <CounterAnimation end={9.34} />
                  </span>
                  <span className="text-xs text-white/60 mt-1">/ 10</span>
                </div>
              </div>

              <p className="text-white/70">CGPA</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Projects', value: '5+' },
                { label: 'Tech Stack', value: '20+' },
                { label: 'Certifications', value: '5' },
                { label: 'Experience', value: '2+ Yrs' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="p-4 glass-card text-center"
                >
                  <p className="text-2xl font-bold text-[#00FFD1]">{stat.value}</p>
                  <p className="text-xs text-white/60 mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
