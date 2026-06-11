import { Suspense } from 'react';
import { motion } from 'framer-motion';
import SkillsOrbit from './SkillsOrbit';
import { PORTFOLIO_DATA } from '../constants/data';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    <section id="skills" className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#7B2FFF] rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
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
          <p className="text-electric-cyan font-mono text-sm tracking-widest uppercase mb-2">&gt; stack.analyze()</p>
          <h2 className="text-5xl md:text-6xl font-syne font-bold text-white">
            Skills & Stack
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-neon-violet to-accent-coral mt-4 rounded-full" />
        </motion.div>

        {/* 3D Orbital Visualization */}
        <motion.div variants={itemVariants} className="mb-20">
          <Suspense fallback={<div className="w-full h-96 bg-white/5 rounded-lg animate-pulse" />}>
            <SkillsOrbit />
          </Suspense>
        </motion.div>

        {/* Skills Grid */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-6 glass-card hover:border-[#00FFD1]/50 transition-all duration-300 group"
            >
              <h3 className="text-lg font-syne font-bold text-[#00FFD1] mb-4">
                {skillGroup.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-white/70 hover:text-[#00FFD1] hover:border-[#00FFD1]/50 transition-all"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
