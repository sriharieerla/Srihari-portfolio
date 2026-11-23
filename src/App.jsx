import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProfileSelector from './components/ProfileSelector';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Freelance from './components/Freelance';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import './App.css';

function App() {
  const [profile, setProfile] = useState('all');

  // Global Scroll Reveal
  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    document.querySelectorAll(".reveal").forEach((el) => {
      revealObserver.observe(el);
    });

    // Staggered Animation for lists
    document.querySelectorAll(".stagger-container").forEach((container) => {
      const children = container.querySelectorAll(".reveal");
      children.forEach((child, index) => {
        child.style.transitionDelay = `${index * 0.1}s`;
      });
    });

    // Cleanup
    return () => revealObserver.disconnect();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ProfileSelector profile={profile} setProfile={setProfile} />
      <About />
      <Experience />
      <Skills profile={profile} />
      <Education />
<Certifications />
<Achievements />
      <Projects profile={profile} />
      <Freelance />
      <Resume profile={profile} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
