import { contact } from "../data/site";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap">
        <p className="hero-role">Software Engineer · Java Backend Developer · AI/ML &amp; Generative AI Developer</p>
        <h1>Building Intelligent Software. Engineering Practical Solutions.</h1>
        <p className="lede">
          I&apos;m a Computer Science and Engineering graduate specializing in AI &amp; ML, with hands-on experience
          building backend applications, AI-powered systems, REST APIs and intelligent automation solutions.
        </p>
        <ul className="areas">
          <li>Software Engineering &amp; Backend Development</li>
          <li>AI/ML &amp; Generative AI Engineering</li>
        </ul>
        <div className="actions">
          <a className="btn primary" href="#projects">View Projects</a>
          <a className="btn" href="#resume">Download Resume</a>
          <a className="btn" href="#contact">Contact Me</a>
          <a className="icon-link" href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><GitHubIcon /></a>
          <a className="icon-link" href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><LinkedInIcon /></a>
        </div>
      </div>
    </section>
  );
}
