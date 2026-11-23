import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProfileSelector from "./components/ProfileSelector";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Websites from "./components/Websites";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [profile, setProfile] = useState("all");
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProfileSelector profile={profile} setProfile={setProfile} />
        <About />
        <Skills profile={profile} />
        <Experience />
        <Projects key={profile} profile={profile} />
        <Certifications />
        <Education />
        <Websites />
        <Resume profile={profile} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
