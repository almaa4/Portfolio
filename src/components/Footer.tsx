import React from 'react';
import { Github, Linkedin, ArrowUp, Shield, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-mono font-bold text-emerald-400 mb-2 flex items-center gap-2">
              <Shield size={24} />
              <span>Almas.Jauhar</span>
            </a>
            <p className="text-gray-400 max-w-md">
              Cybersecurity enthusiast with a focus on network security, penetration testing, and security scripting.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/almaa4" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-gray-300 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/almas-jauhar-16061a307" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-gray-300 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <button 
                onClick={scrollToTop}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} />
              </button>
            </div>
            
            <p className="text-gray-400 text-sm">New Delhi, India</p>
          </div>
        </div>
        
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Almas Jauhar. All rights reserved.
          </p>
          
          <p className="text-gray-400 text-sm flex items-center">
            Built with <Heart size={14} className="mx-1 text-emerald-400" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;