import React, { useState } from 'react';
import { Github, ExternalLink, Code, Terminal, Link, Shield } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  image: string;
  category: 'security' | 'web' | 'other';
  featured: boolean;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'security' | 'web' | 'other'>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'MAC Address Changer',
      description: 'A Python script to spoof and change MAC addresses on Linux systems, providing enhanced privacy and security when connecting to networks.',
      technologies: ['Python', 'Linux', 'Networking'],
      github: 'https://github.com/almaa4/mac-changer.git',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'security',
      featured: true
    },
    {
      id: 2,
      title: 'Hash Identifier',
      description: 'A Python tool for identifying different types of hash algorithms. Supports multiple hash formats and provides detailed analysis of hash patterns.',
      technologies: ['Python', 'Cryptography', 'Hash Analysis'],
      github: 'https://github.com/almaa4/hash-Identifier.git',
      image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'security',
      featured: true
    },
    {
      id: 3,
      title: 'Password Cracker',
      description: 'Advanced password cracking tool implementing multiple attack methods including dictionary attacks, brute force, and rainbow table lookups.',
      technologies: ['Python', 'Cryptography', 'Security'],
      image: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'security',
      featured: true
    },
    {
      id: 4,
      title: 'Network Scanner Tool',
      description: 'A Python-based network scanner to discover devices and services. Features include OS detection, service enumeration, and automated reporting.',
      technologies: ['Python', 'Linux', 'Network Security'],
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'security',
      featured: true
    },
    {
      id: 5,
      title: 'GYM NEXUS',
      description: 'A collaborative university project to develop a gym management system with UI development, member registration, schedule tracking, and login authentication.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'web',
      featured: false
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <section id="projects" className="section">
      <h2 className="section-title animate-on-scroll">Projects</h2>
      
      <div className="flex justify-center mb-10 animate-on-scroll">
        <div className="inline-flex bg-slate-800/50 p-1 rounded-lg">
          <button 
            className={`px-4 py-2 rounded ${activeFilter === 'all' ? 'bg-emerald-500/20 text-emerald-400' : 'text-gray-400 hover:text-gray-200'}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeFilter === 'security' ? 'bg-emerald-500/20 text-emerald-400' : 'text-gray-400 hover:text-gray-200'}`}
            onClick={() => setActiveFilter('security')}
          >
            Security
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeFilter === 'web' ? 'bg-emerald-500/20 text-emerald-400' : 'text-gray-400 hover:text-gray-200'}`}
            onClick={() => setActiveFilter('web')}
          >
            Web Dev
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="group rounded-lg overflow-hidden bg-slate-900 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 shadow-lg animate-on-scroll"
          >
            <div className="aspect-video overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <div className="flex gap-2 mb-2">
                  {project.category === 'security' && (
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-mono">
                      Security
                    </span>
                  )}
                  {project.category === 'web' && (
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-mono">
                      Web Dev
                    </span>
                  )}
                  {project.featured && (
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs font-mono">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white transition-colors"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
                
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-400 hover:text-emerald-300 font-mono flex items-center gap-1 transition-colors"
                  >
                    <Code size={14} />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center animate-on-scroll">
        <a 
          href="https://github.com/almaa4" 
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline inline-flex items-center gap-2"
        >
          <Github size={18} />
          View More on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;