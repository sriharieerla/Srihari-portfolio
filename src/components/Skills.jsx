import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title reveal reveal-up">Technical Arsenal</h2>

                <div className="hex-grid reveal">
                    {/* Core Langs */}
                    <div className="hex-item">
                        <div className="hex-content">
                            <i className="fas fa-code"></i>
                            <h3>Java / C</h3>
                            <span>Core & DSA</span>
                        </div>
                    </div>

                    {/* Python */}
                    <div className="hex-item">
                        <div className="hex-content">
                            <i className="fab fa-python"></i>
                            <h3>Gen-AI</h3>
                            <span>LLMs & RAG</span>
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="hex-item">
                        <div className="hex-content">
                            <i className="fas fa-server"></i>
                            <h3>Spring Boot</h3>
                            <span>Microservices</span>
                        </div>
                    </div>

                    {/* Database */}
                    <div className="hex-item">
                        <div className="hex-content">
                            <i className="fas fa-database"></i>
                            <h3>SQL</h3>
                            <span>MySQL & Hibernate</span>
                        </div>
                    </div>

                    {/* Web */}
                    <div className="hex-item">
                        <div className="hex-content">
                            <i className="fab fa-js"></i>
                            <h3>Web Dev</h3>
                            <span>JS/HTML/CSS</span>
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="hex-item">
                        <div className="hex-content">
                            <i className="fab fa-docker"></i>
                            <h3>Tools</h3>
                            <span>Docker & Git</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
