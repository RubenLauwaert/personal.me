import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Hero } from './Hero';
import { Experience } from './Experience';
import { Education } from './Education';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Languages } from './Languages';
import { Contact } from './Contact';

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Languages />
      <Contact />
    </>
  );
}
