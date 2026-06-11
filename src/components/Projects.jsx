import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants/data';
import { ExternalLink, Award } from 'lucide-react';
import { GithubIcon as Github } from './Icons';

const ProjectCard = ({ project, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      style={{ perspective: 1000 }}
      className={`relative h-full flex flex-col ${project.featured ? 'md:col-span-2' : ''}`}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`h-full glass-card-premium p-8 flex flex-col justify-between border transition-all duration-300 ${
          project.featured ? 'border-electric-cyan/25' : 'border-white/5'
        }`}
      >
        <div className="flex flex-col gap-5">
          {/* Header */}
          <div className="flex justify-between items-start gap-4">
            <div className="flex flex-col gap-2">
              {project.badge && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-warm-amber/15 text-warm-amber border border-warm-amber/20 rounded-full text-[10px] font-bold tracking-wider uppercase w-fit">
                  <Award size={12} />
                  {project.badge}
                </span>
              )}
              <h3 className="text-2xl font-syne font-bold text-white tracking-tight">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-white/70 font-dm-sans leading-relaxed text-sm md:text-base">
            {project.description}
          </p>
        </div>

        {/* Footer info */}
        <div className="flex flex-col gap-6 mt-8">
          
          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span 
                key={i} 
                className="px-2.5 py-1 bg-white/5 text-electric-cyan text-xs font-mono rounded border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action links */}
          <div className="flex items-center gap-4 pt-3 border-t border-white/5">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-electric-cyan transition-colors"
              >
                <Github size={16} />
                <span>Repository</span>
              </a>
            )}
            
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-cyan hover:text-white transition-colors ml-auto"
              >
                <span>Live Demo</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 md:px-12 max-w-6xl mx-auto z-10">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-electric-cyan font-mono text-sm tracking-widest uppercase mb-2">&gt; projects.list()</p>
        <h2 className="text-5xl md:text-6xl font-syne font-extrabold text-white">
          Featured Projects
        </h2>
        <div className="h-[2px] w-24 bg-gradient-to-r from-electric-cyan to-neon-violet mt-4 rounded-full" />
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {PORTFOLIO_DATA.projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>

    </section>
  );
}
