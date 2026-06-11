import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-cosmic-black/70 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_0_rgba(0,0,0,0.4)] py-3 px-6 rounded-full' 
            : 'bg-transparent py-5 px-6 rounded-2xl'
        }`}
      >
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-xl md:text-2xl font-orbitron font-extrabold tracking-wider text-white flex items-center gap-1.5">
              <span className="text-electric-cyan">&lt;</span>
              AR
              <span className="text-electric-cyan">/&gt;</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-electric-cyan transition-colors font-medium text-sm tracking-wide font-dm-sans relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-electric-cyan transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-electric-cyan p-2 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-cosmic-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-electric-cyan p-2"
            >
              <X size={28} />
            </button>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl text-white/80 hover:text-electric-cyan font-syne tracking-wide transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
