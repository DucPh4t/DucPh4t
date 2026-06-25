import { useEffect } from 'react';
import Background from './components/portfolio/Background';
import Header from './components/portfolio/Header';
import Hero from './components/portfolio/Hero';
import About from './components/portfolio/About';
import Skills from './components/portfolio/Skills';
import Projects from './components/portfolio/Projects';
import Contact from './components/portfolio/Contact';
import Footer from './components/portfolio/Footer';

function App() {
  // Intersection Observer for reveal animations & Mouse Tracking
  useEffect(() => {
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
      window.removeEventListener('mousemove', handleMouseMove);
      revealOnScroll.disconnect();
    };
  }, []);

  return (
    <>
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
