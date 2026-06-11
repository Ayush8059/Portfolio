import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants/data';

export default function About() {
  const { name, bio, education } = PORTFOLIO_DATA.personalInfo;

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto z-10">
      <div className="flex flex-col gap-12 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <p className="text-electric-cyan font-mono text-sm tracking-widest uppercase">&gt; SYSTEM.ABOUT()</p>
          <h2 className="text-4xl md:text-5xl font-orbitron font-extrabold text-white uppercase tracking-wider">
            About Me
          </h2>
          <div className="h-[2px] w-full bg-gradient-to-r from-electric-cyan via-electric-cyan/20 to-transparent mt-2" />
        </div>

        {/* Two Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Card: Profile Narrative */}
          <div className="terminal-card flex flex-col gap-6">
            <p className="text-xs font-mono text-[#00FFD1] tracking-widest uppercase">&gt;_ INITIALIZING_PROFILE...</p>
            <p className="text-white/85 text-sm md:text-base font-sora leading-relaxed">
              {bio}
            </p>
          </div>

          {/* Right Card: Academic Record */}
          <div className="terminal-card flex flex-col gap-6">
            <h3 className="text-lg font-orbitron font-bold text-white tracking-widest uppercase border-b border-white/5 pb-3">
              ACADEMIC_RECORD
            </h3>
            
            <div className="flex flex-col gap-6 font-sora text-sm md:text-base">
              
              {/* Degree */}
              <div className="flex gap-4">
                <span className="text-electric-cyan font-mono mt-1">•</span>
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold text-white leading-snug">{education.degree}</h4>
                  <p className="text-electric-cyan text-sm">{education.university}</p>
                </div>
              </div>

              {/* Duration */}
              <div className="flex gap-4">
                <span className="text-warm-amber font-mono mt-1">•</span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-white/50 text-xs font-mono uppercase">Duration</span>
                  <span className="text-white font-medium">{education.duration}</span>
                </div>
              </div>

              {/* CGPA */}
              <div className="flex gap-4">
                <span className="text-electric-cyan font-mono mt-1">•</span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-white/50 text-xs font-mono uppercase">CGPA</span>
                  <span className="text-white font-bold">{education.cgpa} <span className="text-white/40 font-normal">/ 10</span></span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
