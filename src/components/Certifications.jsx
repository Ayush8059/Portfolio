import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants/data';
import { Award, ShieldCheck, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="certifications" className="py-28 px-6 md:px-12 max-w-6xl mx-auto z-10">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-electric-cyan font-mono text-sm tracking-widest uppercase mb-2">&gt; credentials.verify()</p>
        <h2 className="text-5xl md:text-6xl font-syne font-extrabold text-white">
          Certifications
        </h2>
        <div className="h-[2px] w-24 bg-gradient-to-r from-warm-amber to-accent-coral mt-4 rounded-full" />
      </motion.div>

      {/* Certifications Grid (Sleek cards instead of plain list) */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {PORTFOLIO_DATA.certifications.map((cert, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            className="glass-card-premium p-6 hover:border-warm-amber/30 hover:scale-[1.01] transition-all flex items-start gap-4"
          >
            {/* Shield Check Badge */}
            <div className="p-3 bg-warm-amber/10 rounded-xl text-warm-amber border border-warm-amber/20 flex-shrink-0">
              <ShieldCheck size={24} />
            </div>
            
            {/* Card Content */}
            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-between items-start gap-2">
                <h3 className="text-lg font-syne font-bold text-white leading-snug">
                  {cert.name}
                </h3>
              </div>
              <p className="text-white/50 font-dm-sans text-xs tracking-wider uppercase">
                Issuer: {cert.issuer}
              </p>

              {cert.link && cert.link !== '#' && (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-warm-amber hover:text-white transition-colors mt-2 w-fit font-mono"
                >
                  <span>Verify Credential</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Certifications;
