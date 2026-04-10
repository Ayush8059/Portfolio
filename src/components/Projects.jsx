import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants/data';
import { ExternalLink, Award } from 'lucide-react';
import { GithubIcon as Github } from './Icons';

const ProjectCard = ({ project, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
      className={`relative h-full ${project.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`h-full glass-card p-8 flex flex-col justify-between border ${
          project.featured ? 'border-electric-cyan/50 bg-cosmic-navy/70' : 'border-white/10'
        } transition-colors duration-500 hover:border-electric-cyan/80`}
      >
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              {project.badge && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-warm-amber/10 text-warm-amber border border-warm-amber/30 rounded-full text-xs font-bold mb-4 tracking-wider">
                  <Award size={14} />
                  {project.badge}
                </span>
              )}
              <h3 className={`font-orbitron font-bold text-white mb-3 ${project.featured ? 'text-3xl' : 'text-2xl'}`}>
                {project.title}
              </h3>
            </div>
            
            <div className="flex gap-3">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <Github size={20} />
                </a>
              )}
            </div>
          </div>

          <p className="text-gray-300 font-sora leading-relaxed mb-8">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech, i) => (
            <span 
              key={i} 
              className="px-3 py-1 bg-white/5 text-electric-cyan text-sm font-medium rounded border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-5xl font-orbitron text-white">
              PROJECT_LOGS
            </h2>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-electric-cyan to-transparent max-w-sm" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
