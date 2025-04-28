import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, Shield } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - In a real app, you'd send this to a server
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title animate-on-scroll">Get In Touch</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="animate-on-scroll">
          <h3 className="text-xl font-mono mb-6 text-emerald-400">Contact Information</h3>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-emerald-400" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Email</h4>
                <a 
                  href="mailto:almasjauharxenon@gmail.com" 
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  almasjauharxenon@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-emerald-400" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Phone</h4>
                <a 
                  href="tel:+919696817143" 
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  +91 9696817143
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-emerald-400" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Location</h4>
                <p className="text-gray-300">New Delhi, India</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-mono mb-4 text-emerald-400">Connect With Me</h3>
          
          <div className="space-y-4">
            <a 
              href="https://github.com/almaa4" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <Github size={20} className="text-white" />
              <div>
                <p className="font-medium">GitHub</p>
                <p className="text-sm text-gray-400">github.com/almaa4</p>
              </div>
              <ExternalLink size={16} className="text-gray-400 ml-auto" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/almas-jauhar-16061a307" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <Linkedin size={20} className="text-white" />
              <div>
                <p className="font-medium">LinkedIn</p>
                <p className="text-sm text-gray-400">linkedin.com/in/almas-jauhar-16061a307</p>
              </div>
              <ExternalLink size={16} className="text-gray-400 ml-auto" />
            </a>
            
            <a 
              href="https://tryhackme.com/p/Almasjaunpuri" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <Shield size={20} className="text-white" />
              <div>
                <p className="font-medium">TryHackMe</p>
                <p className="text-sm text-gray-400">tryhackme.com/p/Almasjaunpuri</p>
              </div>
              <ExternalLink size={16} className="text-gray-400 ml-auto" />
            </a>
          </div>
        </div>
        
        <div className="animate-on-scroll">
          <h3 className="text-xl font-mono mb-6 text-emerald-400">Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block mb-1 text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full justify-center"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send size={18} />
                  Send Message
                </span>
              )}
            </button>
            
            {submitStatus === 'success' && (
              <div className="p-3 bg-emerald-500/20 border border-emerald-500/30 rounded-lg text-emerald-400 text-sm">
                Your message has been sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm">
                There was an error sending your message. Please try again later.
              </div>
            )}
          </form>
          
          <div className="mt-8 p-4 bg-slate-900/80 border border-slate-800 rounded-lg">
            <p className="text-sm text-gray-300">
              I'm currently looking for internship opportunities in cybersecurity. Feel free to reach out if you have any questions or would like to discuss potential opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;