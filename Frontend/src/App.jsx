import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS with smooth, responsive settings
    AOS.init({
      duration: 750,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50,
      delay: 50,
    });
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Refresh AOS once loader is removed and final layout is stable
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  };

  return (
    <>
      {isLoading && <Loader onComplete={handleLoadingComplete} />}

      <div
        className="min-h-screen relative selection:bg-[var(--color-accent)] selection:text-[var(--color-bg)]"
        style={{
          backgroundColor: 'var(--color-bg)',
          color: 'var(--color-text)',
        }}
      >
        <Navbar />
        <main className="pt-20">
          <Hero />
          <Projects />
          <About />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
