import React from 'react';
import { ArrowDown, Shield, Code, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-4 max-w-7xl mx-auto flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 -right-4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-8 -left-24 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="text-center relative z-10 animate-on-scroll">
        <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-slate-800/70 border border-slate-700 backdrop-blur-sm">
          <Shield size={16} className="text-emerald-400 mr-2" />
          <span className="text-gray-300 font-mono text-sm">Cybersecurity Enthusiast</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="block mb-2">Hello, I'm</span>
          <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 text-transparent bg-clip-text">
            Almas Jauhar
          </span>
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          A motivated cybersecurity enthusiast with hands-on experience in penetration testing, network scanning, and scripting, seeking to make an impact in the digital security landscape.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
          <a href="#projects" className="btn btn-outline">
            View Projects
          </a>
        </div>
        
        <div className="flex justify-center space-x-6 mb-12">
          <div className="flex flex-col items-center">
            <Terminal size={24} className="text-emerald-400 mb-2" />
            <span className="text-sm text-gray-300">Penetration Testing</span>
          </div>
          <div className="flex flex-col items-center">
            <Shield size={24} className="text-emerald-400 mb-2" />
            <span className="text-sm text-gray-300">Network Security</span>
          </div>
          <div className="flex flex-col items-center">
            <Code size={24} className="text-emerald-400 mb-2" />
            <span className="text-sm text-gray-300">Security Scripting</span>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 hover:text-emerald-400 transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;