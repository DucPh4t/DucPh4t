import { useEffect, useState } from 'react';
import Background from './components/portfolio/Background';
import Header from './components/portfolio/Header';
import Hero from './components/portfolio/Hero';
import About from './components/portfolio/About';
import Skills from './components/portfolio/Skills';
import Projects from './components/portfolio/Projects';
import Contact from './components/portfolio/Contact';
import Footer from './components/portfolio/Footer';
import Preloader from './components/portfolio/Preloader';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Intersection Observer for reveal animations & Mouse Tracking & Scroll Progress
  useEffect(() => {
    // Scroll progress tracker
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll) * 100);
    };
    window.addEventListener('scroll', handleScroll);

    // Mouse tracking for spotlight effect
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Reveal animations
    const reveals = document.querySelectorAll(".reveal");
    
    const revealOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      });
    }, revealOptions);

    reveals.forEach(reveal => {
      revealOnScroll.observe(reveal);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      revealOnScroll.disconnect();
    };
  }, []);

  return (
    <>
      <Preloader />
      
      {/* Scroll Progress Bar */}
      <div id="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      {/* Global Mouse Spotlight Effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block mix-blend-screen" 
        style={{ 
          background: 'radial-gradient(125px circle at var(--mouse-x, 50vw) var(--mouse-y, 50vh), rgba(14, 165, 233, 0.15), transparent 80%)' 
        }} 
      />
      <Background />
      <Header />
      <main className="relative z-10 max-w-7xl mx-auto px-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
