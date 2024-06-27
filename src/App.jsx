import React, { useRef } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {
  const heroRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col">
      <Navbar
        heroRef={heroRef}
        aboutMeRef={aboutMeRef}
        skillsRef={skillsRef}
        experienceRef={experienceRef}
        contactRef={contactRef}
      />
      <section ref={heroRef}>
        <Hero aboutMeRef={aboutMeRef}/>
      </section>
      <section ref={aboutMeRef}>
        <AboutMe />
      </section>
      <section ref={skillsRef}>
        <Skills />
      </section>
      <section ref={experienceRef}>
        <Experience />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
    </div>
  );
}

export default App;
