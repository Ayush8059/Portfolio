import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants/data';
import { ShieldCheck } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-orbitron text-white mb-4">
            VERIFIED_CREDENTIALS
          </h2>
          <div className="w-24 h-1 bg-warm-amber mx-auto rounded-full shadow-[0_0_15px_rgba(255,179,71,0.8)]" />
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
