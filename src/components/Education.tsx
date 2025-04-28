import React from 'react';
import { Calendar, Award, BookOpen, Shield } from 'lucide-react';

interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  description?: string;
  achievements?: string[];
}

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      id: 1,
      institution: 'Jamia Millia Islamia, New Delhi',
      degree: 'Bachelor of Technology in Computer Engineering',
      duration: '2023 - 2027 (Expected)',
      description: 'Second-year student focusing on cybersecurity, network protocols, and secure system design.',
      achievements: [
        'Actively participating in cybersecurity workshops and hackathons',
        'Member of the college\'s computer engineering society'
      ]
    },
    {
      id: 2,
      institution: '12th Grade (CBSE Board)',
      degree: 'Senior Secondary Education',
      duration: 'Completed',
      achievements: ['Secured 92.4% in final examinations']
    },
    {
      id: 3,
      institution: '10th Grade (CBSE Board)',
      degree: 'Secondary Education',
      duration: 'Completed',
      achievements: ['Secured 88.8% in final examinations']
    }
  ];
  
  const certifications = [
    {
      id: 1,
      name: 'TryHackMe Completion Certificate',
      issuer: 'TryHackMe',
      link: '#',
      date: '2023'
    }
  ];

  return (
    <section id="education" className="section">
      <h2 className="section-title animate-on-scroll">Education & Certifications</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 animate-on-scroll">
          <h3 className="text-xl font-mono mb-6 text-emerald-400 flex items-center gap-2">
            <BookOpen size={20} />
            Educational Background
          </h3>
          
          <div className="space-y-8">
            {educationItems.map((item) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-dot"></div>
                
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-bold">{item.institution}</h4>
                    <span className="text-emerald-400 text-sm font-mono flex items-center gap-1">
                      <Calendar size={14} />
                      {item.duration}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 font-medium mb-2">{item.degree}</p>
                  
                  {item.description && (
                    <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                  )}
                  
                  {item.achievements && item.achievements.length > 0 && (
                    <ul className="space-y-1">
                      {item.achievements.map((achievement, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                          <span className="text-emerald-400 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="animate-on-scroll">
          <h3 className="text-xl font-mono mb-6 text-emerald-400 flex items-center gap-2">
            <Award size={20} />
            Certifications
          </h3>
          
          <div className="card flex flex-col">
            <div className="w-full text-center py-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/20 mb-4">
                <Award size={40} className="text-emerald-400" />
              </div>
              <h4 className="text-lg font-bold mb-1">TryHackMe</h4>
              <p className="text-emerald-400 text-sm mb-4">Completion Certificate</p>
              
              <div className="border-t border-slate-700 pt-4 mt-4">
                <a 
                  href="https://tryhackme.com/p/Almasjaunpuri" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  View Profile
                </a>
                <p className="text-sm text-gray-400 mt-2">
                  Completed hands-on labs focusing on reconnaissance, privilege escalation, web exploitation, OWASP Top 10, and more.
                </p>
              </div>
            </div>
            
            <div className="mt-4 border-t border-slate-700 pt-4">
              <h4 className="font-mono text-lg mb-4">Recent Badges</h4>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div 
                    key={index} 
                    className="aspect-square rounded-lg bg-slate-800 flex items-center justify-center"
                  >
                    <Shield size={24} className="text-emerald-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="card">
              <h4 className="font-mono text-lg mb-4">Training</h4>
              <div className="mb-4">
                <h5 className="font-bold">Live Security Training</h5>
                <p className="text-sm text-emerald-400">TheTechUniqueAcademy</p>
                <p className="text-xs text-gray-400 mb-2">Duration: 6 months</p>
                <p className="text-sm text-gray-300">
                  Focus on network security, ethical hacking, and cyber defense with practical exposure.
                </p>
              </div>
              
              <ul className="space-y-1 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  Penetration testing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  Vulnerability assessments
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  Web application security
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  Exploit development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;