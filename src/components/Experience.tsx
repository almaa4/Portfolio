import React from 'react';
import { Calendar, Monitor, Shield, Code, Server } from 'lucide-react';

interface ExperienceItem {
  id: number;
  role: string;
  company?: string;
  location?: string;
  duration: string;
  description: string;
  responsibilities: string[];
  tags?: string[];
}

const Experience: React.FC = () => {
  const experienceItems: ExperienceItem[] = [
    {
      id: 1,
      role: 'Cybersecurity Training',
      company: 'TheTechUniqueAcademy',
      location: 'Remote',
      duration: '6 months',
      description: 'Intensive training program focused on network security, ethical hacking, and cyber defense techniques.',
      responsibilities: [
        'Performed network reconnaissance and vulnerability scanning',
        'Conducted web application security assessments',
        'Learned exploitation techniques and penetration testing methodologies',
        'Worked on exploit development and payload generation',
        'Practiced incident response and digital forensics'
      ],
      tags: ['Network Security', 'Ethical Hacking', 'Web Security', 'Exploitation']
    },
    {
      id: 2,
      role: 'TryHackMe Labs',
      duration: 'Ongoing',
      description: 'Hands-on practice in various cybersecurity domains through practical lab exercises and challenges.',
      responsibilities: [
        'Completed rooms focused on reconnaissance techniques',
        'Solved privilege escalation challenges on Linux and Windows',
        'Practiced web exploitation and OWASP Top 10 vulnerabilities',
        'Learned password cracking and credential harvesting methods',
        'Developed skills in exploit development and customization'
      ],
      tags: ['CTF', 'Penetration Testing', 'Web Exploitation', 'Privilege Escalation']
    }
  ];

  return (
    <section id="experience" className="section">
      <h2 className="section-title animate-on-scroll">Experience & Training</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 animate-on-scroll">
          {experienceItems.map((item) => (
            <div key={item.id} className="mb-12 last:mb-0">
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 shadow-lg hover:border-emerald-500/30 transition-all duration-300">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{item.role}</h3>
                    {item.company && (
                      <p className="text-emerald-400 font-medium">
                        {item.company} {item.location && `• ${item.location}`}
                      </p>
                    )}
                  </div>
                  
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-800 rounded-full text-sm text-gray-300">
                    <Calendar size={14} className="text-emerald-400" />
                    {item.duration}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4">{item.description}</p>
                
                <h4 className="text-lg font-mono text-emerald-400 mb-3">Key Activities</h4>
                <ul className="space-y-2 mb-4">
                  {item.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <span className="text-emerald-400 mt-1">•</span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
                
                {item.tags && (
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-800">
                    {item.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="lg:col-span-4 animate-on-scroll">
          <div className="card sticky top-24">
            <h3 className="text-xl font-mono font-bold mb-6 text-emerald-400">Skills Focus</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Monitor size={18} className="text-emerald-400" />
                  <h4 className="font-medium">Practical Labs</h4>
                </div>
                <p className="text-sm text-gray-300">
                  Hands-on experience in controlled environments, solving real-world security challenges and implementing defensive measures.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Shield size={18} className="text-emerald-400" />
                  <h4 className="font-medium">Security Assessments</h4>
                </div>
                <p className="text-sm text-gray-300">
                  Practiced methodical approaches to identifying vulnerabilities, analyzing attack vectors, and creating detailed reports.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Code size={18} className="text-emerald-400" />
                  <h4 className="font-medium">Tool Development</h4>
                </div>
                <p className="text-sm text-gray-300">
                  Created custom security tools and scripts to automate reconnaissance, scanning, and data analysis for more efficient security operations.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Server size={18} className="text-emerald-400" />
                  <h4 className="font-medium">Network Defense</h4>
                </div>
                <p className="text-sm text-gray-300">
                  Implemented security measures to protect networks from unauthorized access, misuse, and system failures.
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-700">
              <h4 className="font-medium mb-3">TryHackMe Profile</h4>
              <a 
                href="https://tryhackme.com/p/Almasjaunpuri" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline w-full justify-center"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;