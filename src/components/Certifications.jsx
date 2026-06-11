import React from 'react';
import { PORTFOLIO_DATA } from '../constants/data';
import { ShieldAlert, ShieldCheck } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 md:px-12 max-w-4xl mx-auto z-10">
      <div className="flex flex-col gap-12 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-4xl md:text-5xl font-orbitron font-extrabold text-white uppercase tracking-widest">
            VERIFIED_CREDENTIALS
          </h2>
          <div className="h-[2px] w-48 bg-gradient-to-r from-transparent via-warm-amber to-transparent mt-2" />
        </div>

        {/* Timeline Axis Listing */}
        <div className="relative border-l border-white/10 ml-4 md:ml-8 flex flex-col gap-8">
          {PORTFOLIO_DATA.certifications.map((cert, idx) => (
            <div 
              key={idx}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[17px] top-1.5 h-8 w-8 rounded-full bg-cosmic-navy border-2 border-warm-amber flex items-center justify-center shadow-[0_0_12px_rgba(255,159,28,0.5)] z-10">
                <ShieldCheck size={14} className="text-warm-amber" />
              </div>
              
              {/* Certification card */}
              <div className="terminal-card border-l-2 border-l-warm-amber/60 hover:bg-white/5 transition-all py-5 px-6">
                <h3 className="text-lg font-orbitron font-bold text-white tracking-wide mb-1 leading-snug">
                  {cert.name}
                </h3>
                <p className="text-electric-cyan font-mono tracking-widest text-xs uppercase">
                  ISSUER: {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
