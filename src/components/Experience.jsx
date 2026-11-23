import React from 'react';
import { experience as e } from '../data/site';

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title reveal reveal-up">Experience</h2>
                <div className="timeline reveal">
                    <div className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <h3>{e.role}</h3>
                                <span className="timeline-date">{e.period}</span>
                            </div>
                            <h4 className="company-name">{e.org} | {e.mode}</h4>
                            <ul className="job-desc">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                            <div className="tech-tags">
                                <span>Generative AI</span><span>LLMs</span><span>Groq API</span><span>RAG</span><span>Prompt Engineering</span><span>Python</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
