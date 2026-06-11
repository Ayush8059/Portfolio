import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';
import { PORTFOLIO_DATA } from '../constants/data';

const Contact = () => {
  const { email, phone, github, linkedin } = PORTFOLIO_DATA.personalInfo.contact;
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${email}?subject=Portfolio Contact from ${formData.name}&body=${formData.message} (Contact: ${formData.email})`;
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-5xl mx-auto z-10">
      <div className="flex flex-col gap-12 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-4xl md:text-5xl font-orbitron font-extrabold text-white uppercase tracking-widest">
            ESTABLISH_CONNECTION
          </h2>
          <div className="h-[2px] w-48 bg-gradient-to-r from-transparent via-electric-cyan to-transparent mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-2">
            <div className="terminal-card flex flex-col justify-between h-full gap-8 py-8 px-6">
              
              <div className="flex flex-col gap-6">
                
                {/* Email row */}
                <a href={`mailto:${email}`} className="flex items-center gap-4 group/item hover:translate-x-1.5 transition-transform w-fit">
                  <div className="p-3 bg-white/5 rounded-full text-electric-cyan border border-electric-cyan/20 group-hover/item:border-electric-cyan/55 transition-all">
                    <Mail size={18} />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-white/45 text-[10px] font-mono tracking-widest uppercase">EMAIL</p>
                    <p className="text-white font-sora text-sm group-hover/item:text-electric-cyan transition-colors">{email}</p>
                  </div>
                </a>

                {/* Phone row */}
                {phone && (
                  <a href={`tel:${phone}`} className="flex items-center gap-4 group/item hover:translate-x-1.5 transition-transform w-fit">
                    <div className="p-3 bg-white/5 rounded-full text-warm-amber border border-warm-amber/20 group-hover/item:border-warm-amber/55 transition-all">
                      <Phone size={18} />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-white/45 text-[10px] font-mono tracking-widest uppercase">COMM_LINK</p>
                      <p className="text-white font-sora text-sm group-hover/item:text-warm-amber transition-colors">{phone}</p>
                    </div>
                  </a>
                )}

              </div>

              {/* Social handles links */}
              <div className="pt-6 border-t border-white/5 flex gap-4">
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-3 bg-white/5 hover:bg-electric-cyan hover:text-cosmic-black rounded-full transition-all text-white border border-white/10"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a 
                  href={linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-3 bg-white/5 hover:bg-electric-cyan hover:text-cosmic-black rounded-full transition-all text-white border border-white/10"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
              </div>

            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="terminal-card border-t-2 border-t-electric-cyan flex flex-col gap-6 py-8 px-6">
              
              {/* Name field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-orbitron font-bold text-electric-cyan uppercase tracking-widest">IDENTIFIER (NAME)</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 text-white px-4 py-3 rounded border border-white/10 focus:border-electric-cyan focus:outline-none transition-all font-sora text-sm"
                />
              </div>

              {/* Email field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-orbitron font-bold text-electric-cyan uppercase tracking-widest">RETURN_ADDRESS (EMAIL)</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white/5 text-white px-4 py-3 rounded border border-white/10 focus:border-electric-cyan focus:outline-none transition-all font-sora text-sm"
                />
              </div>

              {/* Message field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-orbitron font-bold text-electric-cyan uppercase tracking-widest">PAYLOAD (MESSAGE)</label>
                <textarea 
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 text-white px-4 py-3 rounded border border-white/10 focus:border-electric-cyan focus:outline-none transition-all resize-none font-sora text-sm"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="group py-3 px-6 bg-transparent border border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-cosmic-black font-bold font-orbitron rounded uppercase tracking-wider text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all duration-300 cursor-pointer mt-2"
              >
                <span>TRANSMIT</span>
                <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
