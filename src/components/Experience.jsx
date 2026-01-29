import React from 'react';

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
                                <h3>Gen-AI Student Intern</h3>
                                <span className="timeline-date">Jan 2025 - Apr 2025</span>
                            </div>
                            <h4 className="company-name">Data Valley IT Solutions | Remote</h4>
                            <ul className="job-desc">
                                <li>Built AI chatbots & summarizers using <strong>Groq API</strong>, reducing latency by <strong>35%</strong>.</li>
                                <li>Implemented <strong>RAG pipelines</strong> improving answer relevance by <strong>25%</strong>.</li>
                                <li>Handled 500+ user queries during testing for context-aware memory systems.</li>
                                <li>Planned enhancements for voice input and analytics dashboards.</li>
                            </ul>
                            <div className="tech-tags">
                                <span>Gen-AI</span><span>LLMs</span><span>Python</span><span>RAG</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
