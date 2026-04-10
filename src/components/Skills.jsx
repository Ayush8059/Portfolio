import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants/data';
import { Code2, Database, Layout, Wrench, BookOpen } from 'lucide-react';

const iconMap = {
  "Programming": <Code2 size={24} className="text-electric-cyan" />,
  "Frameworks": <Layout size={24} className="text-neon-violet" />,
  "Databases": <Database size={24} className="text-warm-amber" />,
  "Tools": <Wrench size={24} className="text-gray-300" />,
  "Coursework": <BookOpen size={24} className="text-white" />
};

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-orbitron text-white mb-4">
            SKILLS_MATRIX
          </h2>
          <div className="w-24 h-1 bg-neon-violet mx-auto rounded-full shadow-[0_0_15px_rgba(123,47,255,0.8)]" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PORTFOLIO_DATA.skills.map((skillGroup, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="glass-card p-6 hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                  {iconMap[skillGroup.category]}
                </div>
                <h3 className="text-xl font-orbitron text-white">{skillGroup.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-cosmic-black text-sm text-gray-300 rounded-full border border-white/5 hover:border-electric-cyan hover:text-electric-cyan transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
