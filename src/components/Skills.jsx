import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants/data';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto z-10">
      <div className="flex flex-col gap-12 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-4xl md:text-5xl font-orbitron font-extrabold text-white uppercase tracking-widest">
            SKILLS_MATRIX
          </h2>
          <div className="h-[2px] w-48 bg-gradient-to-r from-transparent via-neon-violet to-transparent mt-2" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className="terminal-card flex flex-col gap-5 hover:border-electric-cyan/20 transition-all"
            >
              <h3 className="text-md font-orbitron font-bold text-white tracking-widest uppercase border-b border-white/5 pb-2">
                {skillGroup.category}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="tech-capsule cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
