
import React, { useState } from "react";
import { contact } from "../data/site";

const Hero = () => {
    const [imageFailed, setImageFailed] = useState(false);

    const profileImage = `${import.meta.env.BASE_URL}profile.png`;

    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">

                    {/* LEFT: Introduction */}
                    <div className="hero-text reveal">

                        <div className="hero-status">
                            <span className="status-dot"></span>
                            Available for opportunities
                        </div>

                        <p className="hero-eyebrow">
                            SOFTWARE ENGINEERING
                            <span> • </span>
                            JAVA BACKEND
                            <span> • </span>
                            GENERATIVE AI
                        </p>

                        <h1>
                            Building Intelligent Software.
                            <br />
                            <span className="highlight">
                                Engineering Practical Solutions.
                            </span>
                        </h1>

                        <p className="hero-description">
                            I'm Srihari Eerla, a 2025 Computer Science and
                            Engineering graduate specializing in AI &amp; ML.
                            I build backend applications using Java and
                            Spring Boot, alongside AI-powered applications
                            using Python, LLMs and RAG.
                        </p>

                        {/* Expertise */}
                        <div className="hero-tags">
                            <span>
                                <i className="fas fa-server"></i>
                                Backend Development
                            </span>

                            <span>
                                <i className="fas fa-brain"></i>
                                AI &amp; Generative AI
                            </span>

                            <span>
                                <i className="fas fa-database"></i>
                                Database &amp; APIs
                            </span>
                        </div>

                        {/* Primary actions */}
                        <div className="hero-buttons">
                            <a href="#projects" className="btn btn-primary">
                                Explore Projects
                                <i className="fas fa-arrow-right"></i>
                            </a>

                            <a href="#resume" className="btn btn-secondary">
                                View Resume
                                <i className="fas fa-file-alt"></i>
                            </a>

                            <a href="#contact" className="btn btn-secondary">
                                Contact Me
                            </a>
                        </div>

                        {/* Social links */}
                        <div className="hero-socials">
                            <span>Connect with me</span>

                            <a
                                href={contact.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                title="GitHub"
                            >
                                <i className="fab fa-github"></i>
                            </a>

                            <a
                                href={contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                title="LinkedIn"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>

                            <a
                                href={`mailto:${contact.email}`}
                                aria-label="Email"
                                title="Email"
                            >
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT: Profile visual */}
                    <div className="hero-visual reveal">
                        <div className="hero-portrait-shell">

                            {!imageFailed ? (
                                <img
                                    src={profileImage}
                                    alt="Srihari Eerla - Software Developer"
                                    className="hero-portrait"
                                    onError={() => setImageFailed(true)}
                                />
                            ) : (
                                <div className="hero-profile-fallback">
                                    <span>SE</span>
                                    <p>Srihari Eerla</p>
                                    <small>Software Developer</small>
                                </div>
                            )}

                        </div>

                        <div className="hero-floating-card">
                            <i className="fas fa-code"></i>
                            <div>
                                <strong>Developer</strong>
                                <span>Building &amp; Learning</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;