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
    <section id="contact" className="py-28 px-6 md:px-12 max-w-6xl mx-auto z-10">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-electric-cyan font-mono text-sm tracking-widest uppercase mb-2">&gt; socket.connect()</p>
        <h2 className="text-5xl md:text-6xl font-syne font-extrabold text-white">
          Get In Touch
        </h2>
        <div className="h-[2px] w-24 bg-gradient-to-r from-electric-cyan to-neon-violet mt-4 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        
        {/* Left: Contact Information Cards */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-2 flex flex-col gap-6"
        >
          <div className="glass-card-premium p-8 flex flex-col justify-between gap-10 relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-violet/10 rounded-full blur-3xl" />
            
            <div className="flex flex-col gap-8">
              <h3 className="text-2xl font-syne font-bold text-white">
                Contact Details
              </h3>
              
              <div className="flex flex-col gap-6">
                {/* Email link */}
                <a href={`mailto:${email}`} className="flex items-center gap-4 group/item hover:translate-x-1.5 transition-transform w-fit">
                  <div className="p-3.5 bg-electric-cyan/15 rounded-2xl text-electric-cyan border border-electric-cyan/10 group-hover/item:border-electric-cyan/35 transition-colors">
                    <Mail size={22} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-white/45 text-[10px] font-mono tracking-widest uppercase">Email Address</p>
                    <p className="text-white/80 group-hover/item:text-electric-cyan font-dm-sans transition-colors">{email}</p>
                  </div>
                </a>

                {/* Phone link */}
                {phone && (
                  <a href={`tel:${phone}`} className="flex items-center gap-4 group/item hover:translate-x-1.5 transition-transform w-fit">
                    <div className="p-3.5 bg-warm-amber/15 rounded-2xl text-warm-amber border border-warm-amber/10 group-hover/item:border-warm-amber/35 transition-colors">
                      <Phone size={22} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-white/45 text-[10px] font-mono tracking-widest uppercase">Phone Number</p>
                      <p className="text-white/80 group-hover/item:text-warm-amber font-dm-sans transition-colors">{phone}</p>
                    </div>
                  </a>
                )}
              </div>
            </div>

            {/* Social handles links */}
            <div className="pt-6 border-t border-white/5 flex gap-4">
              <a 
                href={github} 
                target="_blank" 
                rel="noreferrer" 
                className="p-4 bg-white/5 hover:bg-electric-cyan hover:text-cosmic-black rounded-xl transition-all text-white border border-white/10"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="p-4 bg-white/5 hover:bg-electric-cyan hover:text-cosmic-black rounded-xl transition-all text-white border border-white/10"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="lg:col-span-3"
        >
          <form onSubmit={handleSubmit} className="glass-card-premium p-8 border-t-2 border-electric-cyan">
            <div className="flex flex-col gap-6">
              
              {/* Name Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-mono text-white/50 uppercase tracking-widest">Name</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 text-white px-4 py-3 rounded-xl border border-white/10 focus:border-electric-cyan focus:outline-none focus:ring-1 focus:ring-electric-cyan transition-all font-dm-sans"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-mono text-white/50 uppercase tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="Your email address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white/5 text-white px-4 py-3 rounded-xl border border-white/10 focus:border-electric-cyan focus:outline-none focus:ring-1 focus:ring-electric-cyan transition-all font-dm-sans"
                />
              </div>

              {/* Message Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-mono text-white/50 uppercase tracking-widest">Message</label>
                <textarea 
                  id="message"
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 text-white px-4 py-3 rounded-xl border border-white/10 focus:border-electric-cyan focus:outline-none focus:ring-1 focus:ring-electric-cyan transition-all resize-none font-dm-sans"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="group py-4 px-6 bg-electric-cyan hover:bg-electric-cyan/90 text-cosmic-black font-bold font-syne rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_4px_25px_0_rgba(0,245,255,0.3)] transition-all duration-300 cursor-pointer mt-2"
              >
                <span>Transmit Message</span>
                <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
