import React from 'react';
import { Code, Cpu, Shield, Database, Globe, FileCode, Terminal, Server } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  proficiency: number;
  description: string;
}

const Skills: React.FC = () => {
  const programmingSkills: Skill[] = [
    {
      name: 'Python',
      icon: <Code size={20} />,
      proficiency: 85,
      description: 'Scripting automation tasks and building security tools',
    },
    {
      name: 'C/C++',
      icon: <Cpu size={20} />,
      proficiency: 70,
      description: 'Understanding low-level memory operations and vulnerabilities',
    },
    {
      name: 'Bash',
      icon: <Terminal size={20} />,
      proficiency: 75,
      description: 'Shell scripts for system tasks and custom recon tools',
    },
    {
      name: 'SQL',
      icon: <Database size={20} />,
      proficiency: 65,
      description: 'Database knowledge and awareness of injection vulnerabilities',
    },
    {
      name: 'HTML/CSS',
      icon: <FileCode size={20} />,
      proficiency: 70,
      description: 'Web page structure and common vulnerabilities like XSS',
    },
    {
      name: 'JavaScript',
      icon: <Globe size={20} />,
      proficiency: 60,
      description: 'Client-side scripting and web vulnerabilities like DOM-based XSS',
    },
  ];

  const securitySkills: Skill[] = [
    {
      name: 'Nmap',
      icon: <Server size={20} />,
      proficiency: 85,
      description: 'Network scanning, host discovery, service enumeration',
    },
    {
      name: 'Burp Suite',
      icon: <Shield size={20} />,
      proficiency: 80,
      description: 'Web app testing, request interception, XSS and SQLi testing',
    },
    {
      name: 'Wireshark',
      icon: <Globe size={20} />,
      proficiency: 75,
      description: 'Packet analysis for network monitoring and anomaly detection',
    },
    {
      name: 'Metasploit',
      icon: <Shield size={20} />,
      proficiency: 70,
      description: 'Exploitation and payload deployment in lab environments',
    },
    {
      name: 'Hydra',
      icon: <Terminal size={20} />,
      proficiency: 65,
      description: 'Brute-force attacks to test login strength',
    },
  ];

  const conceptSkills: Skill[] = [
    {
      name: 'IP & Networking',
      icon: <Globe size={20} />,
      proficiency: 80,
      description: 'IP addressing, routing, ports, protocols, network architecture',
    },
    {
      name: 'OWASP Top 10',
      icon: <Shield size={20} />,
      proficiency: 75,
      description: 'Knowledge of common web application vulnerabilities',
    },
    {
      name: 'Cryptography',
      icon: <FileCode size={20} />,
      proficiency: 60,
      description: 'Basic understanding of encryption, hashing, secure communication',
    },
    {
      name: 'Exploitation',
      icon: <Terminal size={20} />,
      proficiency: 65,
      description: 'Buffer overflows, privilege escalation, code injection',
    },
  ];

  const SkillCard = ({ skill }: { skill: Skill }) => (
    <div className="card hover:translate-y-[-5px] group">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/30 transition-colors">
          {skill.icon}
        </div>
        <h3 className="font-mono font-medium text-lg">{skill.name}</h3>
      </div>
      <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${skill.proficiency}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-2 text-xs text-gray-400">
        <span>Beginner</span>
        <span>Advanced</span>
      </div>
    </div>
  );

  return (
    <section id="skills" className="section">
      <h2 className="section-title animate-on-scroll">Technical Skills</h2>
      
      <div className="mb-16 animate-on-scroll">
        <h3 className="text-xl font-mono mb-6 text-emerald-400">Programming Languages</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programmingSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
      
      <div className="mb-16 animate-on-scroll">
        <h3 className="text-xl font-mono mb-6 text-emerald-400">Cybersecurity Tools</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {securitySkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
      
      <div className="animate-on-scroll">
        <h3 className="text-xl font-mono mb-6 text-emerald-400">Cybersecurity Concepts</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {conceptSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;