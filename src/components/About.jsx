import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants/data';
import { Terminal } from 'lucide-react';

const About = () => {
  const { bio, education } = PORTFOLIO_DATA.personalInfo;

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-orbitron text-white mb-4">
            <span className="text-electric-cyan">&gt;</span> SYSTEM.ABOUT()
          </h2>
          <div className="w-24 h-1 bg-electric-cyan mx-auto rounded-full glow-cyan" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Bio Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-electric-cyan/10 rounded-full blur-3xl group-hover:bg-electric-cyan/20 transition-all" />
            <div className="flex items-center gap-4 mb-6 text-electric-cyan font-orbitron">
              <Terminal size={24} />
              <h3 className="text-xl tracking-widest">INITIALIZING_PROFILE...</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed font-sora">
              {bio}
            </p>
          </motion.div>

          {/* Education Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8 border-t-4 border-neon-violet relative overflow-hidden"
          >
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-neon-violet/10 rounded-full blur-3xl" />
            <h3 className="text-2xl font-orbitron text-white mb-8 border-b border-white/10 pb-4">
              ACADEMIC_RECORD
            </h3>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-neon-violet shadow-[0_0_10px_rgba(123,47,255,1)]" />
                <div>
                  <h4 className="text-xl font-bold text-white font-sora">{education.degree}</h4>
                  <p className="text-electric-cyan mt-1">{education.university}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-warm-amber shadow-[0_0_10px_rgba(255,179,71,1)]" />
                <div>
                  <p className="text-gray-400">Duration</p>
                  <p className="text-white font-bold">{education.duration}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-electric-cyan shadow-[0_0_10px_rgba(0,245,255,1)]" />
                <div>
                  <p className="text-gray-400">CGPA</p>
                  <p className="text-2xl text-white font-bold font-orbitron">
                    {education.cgpa} <span className="text-sm text-electric-cyan">/ 10</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
