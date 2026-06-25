import { useState, useEffect } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 200)) {
          current = section.getAttribute('id') || '';
        }
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 w-full z-50 transition-all duration-300 pt-4 px-4 lg:px-0">
        <div className="max-w-6xl mx-auto glass-panel rounded-2xl px-6 py-4 flex items-center justify-between shadow-lg">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="bg-dev-primary/10 text-dev-primary font-bold w-9 h-9 rounded-xl flex items-center justify-center text-sm border border-dev-primary/30 group-hover:bg-dev-primary group-hover:text-white transition-all">
              DP
            </div>
            <span className="font-semibold text-white tracking-tight">DucPhat<span className="text-slate-500">.dev</span></span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8 nav-menu">
            <a href="#home" className={`text-sm font-medium transition-colors ${activeSection === 'home' ? 'text-white' : 'text-dev-text hover:text-white'}`}>Home</a>
            <a href="#about" className={`text-sm font-medium transition-colors ${activeSection === 'about' ? 'text-white' : 'text-dev-text hover:text-white'}`}>About</a>
            <a href="#skills" className={`text-sm font-medium transition-colors ${activeSection === 'skills' ? 'text-white' : 'text-dev-text hover:text-white'}`}>Skills</a>
            <a href="#projects" className={`text-sm font-medium transition-colors ${activeSection === 'projects' ? 'text-white' : 'text-dev-text hover:text-white'}`}>Projects</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <a href="#contact" className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-dev-primary hover:from-blue-500 hover:to-dev-secondary text-white font-medium rounded-xl transition-all shadow-[0_0_15px_rgba(14,165,233,0.3)] text-sm">
              Hire me
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-[#0a0f1d] border border-slate-800 rounded-full px-6 py-4 flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.8)] z-50">
        <a href="#home" className={`flex flex-col items-center gap-1.5 transition-all ${activeSection === 'home' ? 'text-dev-primary drop-shadow-[0_0_12px_rgba(14,165,233,0.8)]' : 'text-slate-500 hover:text-slate-300'}`}>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
          <span className="text-[11px] font-medium font-mono">Home</span>
        </a>
        <a href="#projects" className={`flex flex-col items-center gap-1.5 transition-all ${activeSection === 'projects' ? 'text-dev-primary drop-shadow-[0_0_12px_rgba(14,165,233,0.8)]' : 'text-slate-500 hover:text-slate-300'}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3M16 9l4 3-4 3"/></svg>
          <span className="text-[11px] font-medium font-mono">Projects</span>
        </a>
        <a href="#skills" className={`flex flex-col items-center gap-1.5 transition-all ${activeSection === 'skills' ? 'text-dev-primary drop-shadow-[0_0_12px_rgba(14,165,233,0.8)]' : 'text-slate-500 hover:text-slate-300'}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          <span className="text-[11px] font-medium font-mono">Stack</span>
        </a>
        <a href="#contact" className={`flex flex-col items-center gap-1.5 transition-all ${activeSection === 'contact' ? 'text-dev-primary drop-shadow-[0_0_12px_rgba(14,165,233,0.8)]' : 'text-slate-500 hover:text-slate-300'}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          <span className="text-[11px] font-medium font-mono">Contact</span>
        </a>
      </nav>
    </>
  );
};

export default Header;
