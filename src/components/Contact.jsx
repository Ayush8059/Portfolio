import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants/data';
import { Mail, Phone, Send } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';

const Contact = () => {
  const { email, phone, github, linkedin } = PORTFOLIO_DATA.personalInfo.contact;
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${email}?subject=Portfolio Contact from ${formData.name}&body=${formData.message} (Contact: ${formData.email})`;
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-electric-cyan font-mono text-sm tracking-widest uppercase mb-2">&gt; socket.connect()</p>
          <h2 className="text-5xl md:text-6xl font-syne font-bold text-white">
            Get In Touch
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-electric-cyan to-neon-violet mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="glass-card p-8 group relative overflow-hidden h-full flex flex-col justify-center gap-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-violet/10 rounded-full blur-3xl group-hover:bg-neon-violet/20 transition-all" />
              
              <a href={`mailto:${email}`} className="flex items-center gap-4 hover:translate-x-2 transition-transform">
                <div className="p-3 bg-white/5 rounded-full text-electric-cyan border border-electric-cyan/30">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm font-orbitron">EMAIL</p>
                  <p className="text-white font-sora">{email}</p>
                </div>
              </a>

              {phone && (
                <a href={`tel:${phone}`} className="flex items-center gap-4 hover:translate-x-2 transition-transform">
                  <div className="p-3 bg-white/5 rounded-full text-warm-amber border border-warm-amber/30">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-orbitron">COMM_LINK</p>
                    <p className="text-white font-sora">{phone}</p>
                  </div>
                </a>
              )}

              <div className="pt-8 border-t border-white/10 flex gap-4">
                <a href={github} target="_blank" rel="noreferrer" className="p-4 bg-white/5 hover:bg-electric-cyan hover:text-cosmic-black rounded-full transition-all text-white border border-white/10">
                  <Github size={24} />
                </a>
                <a href={linkedin} target="_blank" rel="noreferrer" className="p-4 bg-white/5 hover:bg-electric-cyan hover:text-cosmic-black rounded-full transition-all text-white border border-white/10">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 border-t-4 border-electric-cyan">
              <div className="flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-orbitron text-electric-cyan mb-2">IDENTIFIER (NAME)</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-cosmic-navy text-white px-4 py-3 rounded border border-white/10 focus:border-electric-cyan focus:outline-none focus:ring-1 focus:ring-electric-cyan transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-orbitron text-electric-cyan mb-2">RETURN_ADDRESS (EMAIL)</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-cosmic-navy text-white px-4 py-3 rounded border border-white/10 focus:border-electric-cyan focus:outline-none focus:ring-1 focus:ring-electric-cyan transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-orbitron text-electric-cyan mb-2">PAYLOAD (MESSAGE)</label>
                  <textarea 
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-cosmic-navy text-white px-4 py-3 rounded border border-white/10 focus:border-electric-cyan focus:outline-none focus:ring-1 focus:ring-electric-cyan transition-colors resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="group w-full py-4 bg-transparent border border-electric-cyan text-electric-cyan font-bold font-orbitron rounded flex items-center justify-center gap-2 hover:bg-electric-cyan hover:text-cosmic-black transition-all duration-300"
                >
                  <span>TRANSMIT</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
