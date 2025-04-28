import React from 'react';
import { Shield, Code, Server, Database, Check } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2 animate-on-scroll">
          <h2 className="section-title">About Me</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I'm Almas Jauhar, a second-year Computer Engineering student at Jamia Millia Islamia, New Delhi, with a passion for cybersecurity. My journey in the digital security landscape is driven by curiosity and a commitment to building safer digital environments.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Through hands-on experience in penetration testing labs, network scanning, and scripting, I've developed practical skills that complement my academic knowledge. I'm continuously expanding my expertise through platforms like TryHackMe and real-world projects.
          </p>
          
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <Shield size={20} className="text-emerald-400" />
              </div>
              <span>Network Security</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <Code size={20} className="text-emerald-400" />
              </div>
              <span>Security Scripting</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <Server size={20} className="text-emerald-400" />
              </div>
              <span>Penetration Testing</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <Database size={20} className="text-emerald-400" />
              </div>
              <span>Web Exploitation</span>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 animate-on-scroll">
          <div className="terminal">
            <div className="terminal-header">
              <div className="terminal-btn bg-red-500"></div>
              <div className="terminal-btn bg-yellow-500"></div>
              <div className="terminal-btn bg-green-500"></div>
              <span className="ml-2 text-xs text-gray-400">about.sh</span>
            </div>
            
            <div className="text-emerald-400">$ whoami</div>
            <div className="mb-4 text-gray-200">almas_jauhar</div>
            
            <div className="text-emerald-400">$ cat objectives.txt</div>
            <div className="mb-4 text-gray-200">
              <ul className="list-disc pl-5 space-y-1 mt-1">
                <li>Seeking cybersecurity internship opportunities</li>
                <li>Building practical security testing skills</li>
                <li>Contributing to open-source security tools</li>
                <li>Expanding network security knowledge</li>
              </ul>
            </div>
            
            <div className="text-emerald-400">$ ls -la skills/</div>
            <div className="mb-4 text-gray-200">
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-1">
                <div>drwxr-xr-x python/</div>
                <div>drwxr-xr-x bash/</div>
                <div>drwxr-xr-x c_cpp/</div>
                <div>drwxr-xr-x networking/</div>
                <div>drwxr-xr-x web_security/</div>
                <div>drwxr-xr-x tools/</div>
              </div>
            </div>
            
            <div className="text-emerald-400">$ ./get_contact.sh</div>
            <div className="text-gray-200">
              <div className="mt-1">
                <span className="text-gray-400">Email:</span> almasjauharxenon@gmail.com
              </div>
              <div>
                <span className="text-gray-400">Phone:</span> +91 9696817143
              </div>
              <div>
                <span className="text-gray-400">Location:</span> New Delhi, India
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;