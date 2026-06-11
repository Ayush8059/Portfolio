import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants/data';
import { ShieldCheck } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-electric-cyan font-mono text-sm tracking-widest uppercase mb-2">&gt; credentials.verify()</p>
          <h2 className="text-5xl md:text-6xl font-syne font-bold text-white">
            Certifications
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-warm-amber to-accent-coral mt-4 rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-8 space-y-12">
          {PORTFOLIO_DATA.certifications.map((cert, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[17px] top-1 h-8 w-8 rounded-full bg-cosmic-navy border-2 border-warm-amber flex items-center justify-center glow-cyan shadow-[0_0_10px_rgba(255,179,71,0.6)]">
                <ShieldCheck size={16} className="text-warm-amber" />
              </div>
              
              <div className="glass-card p-6 border-l-4 border-l-warm-amber/80 hover:bg-white/5 transition-colors">
                <h3 className="text-xl font-bold font-sora text-white mb-2">{cert.name}</h3>
                <p className="text-electric-cyan font-orbitron tracking-wider text-sm uppercase">ISSUER: {cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
