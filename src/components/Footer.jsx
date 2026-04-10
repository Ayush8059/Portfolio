import React from 'react';
import { PORTFOLIO_DATA } from '../constants/data';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative py-8 border-t border-white/10 bg-cosmic-black z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-gray-400 font-sora text-sm text-center md:text-left">
          &copy; {currentYear} <span className="text-electric-cyan">{PORTFOLIO_DATA.personalInfo.name}</span>. All systems operational.
        </p>

        <button 
          onClick={scrollToTop}
          className="p-3 bg-white/5 hover:bg-electric-cyan hover:text-cosmic-black rounded-full border border-white/10 transition-all group"
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="text-white group-hover:text-cosmic-black group-hover:-translate-y-1 transition-transform" />
        </button>

      </div>
    </footer>
  );
};

export default Footer;
