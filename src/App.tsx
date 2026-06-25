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
  // Intersection Observer for reveal animations
  useEffect(() => {
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

    return () => revealOnScroll.disconnect();
  }, []);

  return (
    <>
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
