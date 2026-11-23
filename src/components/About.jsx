import React from 'react';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title reveal reveal-up">Identify</h2>

                <div className="bio-container reveal">
                    <div className="bio-card">
                        <div className="scan-line"></div>
                        <div className="bio-header">
                            <span className="bio-id">ID: S-EERLA-2025</span>
                            <span className="bio-status">STATUS: ONLINE</span>
                        </div>

                        <p className="bio-text">
                            <span className="highlight">Software foundation, AI focus.</span> I hold a B.Tech in Computer Science and
                            Engineering (<strong>AI &amp; ML</strong>), graduating in May 2025. I&apos;m an entry-level engineer with a
                            foundation in <strong>Java, OOP, data structures and SQL</strong>, building backend services with Spring Boot
                            and AI applications with LLMs, RAG and multi-agent workflows in Python. I learn by building projects end to end
                            and have guided students through Java, DSA, SQL and backend development in technical sessions.
                        </p>

                        <div className="bio-stats">
                            <div className="stat-box"><h3>8.1/10</h3><p>B.Tech GPA</p></div>
                            <div className="stat-box"><h3>May 2025</h3><p>Graduated</p></div>
                            <div className="stat-box"><h3>5</h3><p>Featured Projects</p></div>
                        </div>
                    </div>

                    <div className="bio-visual">
                        <div className="code-block">
                            <div className="code-line"><span className="c-purple">class</span> <span className="c-yellow">Engineer</span> {'{'}</div>
                            <div className="code-line indent"> <span className="c-purple">constructor</span>() {'{'}</div>
                            <div className="code-line double-indent"> this.backend = [<span className="c-green">"Java"</span>, <span className="c-green">"Spring Boot"</span>];</div>
                            <div className="code-line double-indent"> this.ai = [<span className="c-green">"Python"</span>, <span className="c-green">"RAG"</span>];</div>
                            <div className="code-line indent"> {'}'}</div>
                            <div className="code-line">{'}'}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
