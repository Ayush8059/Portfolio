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
        staggerChildren: 0.1,
        delayChildren: 0.1,
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
    <section id="skills" className="relative py-28 px-6 md:px-12 max-w-6xl mx-auto z-10">
      {/* Background glow sphere */}
      <div className="glowing-bg-sphere w-96 h-96 bg-neon-violet top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5" />

      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <p className="text-electric-cyan font-mono text-sm tracking-widest uppercase mb-2">&gt; stack.analyze()</p>
          <h2 className="text-5xl md:text-6xl font-syne font-extrabold text-white">
            Skills & Stack
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-neon-violet to-accent-coral mt-4 rounded-full" />
        </motion.div>

        {/* 3D Orbit Scene */}
        <motion.div variants={itemVariants} className="mb-16">
          <Suspense fallback={<div className="w-full h-96 bg-white/5 rounded-2xl animate-pulse border border-white/10" />}>
            <SkillsOrbit />
          </Suspense>
        </motion.div>

        {/* Skills Directory Categories Grid */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-8 glass-card-premium hover:border-electric-cyan/30 transition-all duration-300 group flex flex-col gap-4"
            >
              <h3 className="text-xl font-syne font-bold text-white group-hover:text-electric-cyan transition-colors">
                {skillGroup.category}
              </h3>

              <div className="flex flex-wrap gap-2.5 mt-2">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs md:text-sm bg-white/5 border border-white/10 rounded-lg text-white/70 hover:text-electric-cyan hover:bg-electric-cyan/5 hover:border-electric-cyan/30 transition-all cursor-default"
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
