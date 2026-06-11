import React from 'react';
import { PORTFOLIO_DATA } from '../constants/data';
import { ExternalLink, Award } from 'lucide-react';
import { GithubIcon as Github } from './Icons';

const ProjectCard = ({ project }) => {
  return (
    <div className={`terminal-card flex flex-col justify-between gap-6 ${project.featured ? 'md:col-span-2' : ''}`}>
      
      <div className="flex flex-col gap-4">
        {/* Card Header with Title and Link Icons */}
        <div className="flex justify-between items-start gap-4">
          <div className="flex flex-col gap-2">
            {project.badge && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-warm-amber/15 text-warm-amber border border-warm-amber/20 rounded-full text-[10px] font-bold uppercase tracking-wider w-fit">
                <Award size={10} />
                {project.badge}
              </span>
            )}
            <h3 className="text-xl font-orbitron font-bold text-white tracking-wider leading-snug">
              {project.title}
            </h3>
          </div>

          {/* Top-right Icon Links */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer"
                className="p-1.5 text-white/60 hover:text-electric-cyan hover:bg-white/5 rounded-full transition-all"
                aria-label="GitHub Repository"
              >
                <Github size={18} />
              </a>
            )}
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                className="p-1.5 text-white/60 hover:text-electric-cyan hover:bg-white/5 rounded-full transition-all"
                aria-label="Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Card Description */}
        <p className="text-white/70 font-sora text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Card Tech tags */}
      <div className="flex flex-wrap gap-2 pt-2">
        {project.tech.map((tech, i) => (
          <span 
            key={i} 
            className="tech-capsule cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>

    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto z-10">
      <div className="flex flex-col gap-10 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <p className="text-electric-cyan font-mono text-sm tracking-widest uppercase">&gt; PROJECTS.LIST()</p>
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-orbitron font-extrabold text-white uppercase tracking-widest">
              PROJECT_LOGS
            </h2>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-electric-cyan via-electric-cyan/20 to-transparent max-w-md" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {PORTFOLIO_DATA.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
