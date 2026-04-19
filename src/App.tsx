import { useEffect } from 'react';
import {
  Navbar,
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Education,
  Contact,
  Footer,
  CustomCursor,
} from './components';

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      revealElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <div className="site-shell">
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
