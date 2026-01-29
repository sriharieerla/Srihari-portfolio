import React from 'react';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title reveal reveal-up">Identify</h2>

                <div className="bio-container reveal">
                    {/* Left: The Scanner Card */}
                    <div className="bio-card">
                        <div className="scan-line"></div>
                        <div className="bio-header">
                            <span className="bio-id">ID: S-EERLA-2025</span>
                            <span className="bio-status">STATUS: ONLINE</span>
                        </div>

                        <p className="bio-text">
                            <span className="highlight">Engineered for Impact.</span> I am a Computer Science strategist specializing in
                            <strong> Artificial Intelligence</strong> and <strong>High-Scale Systems</strong>.
                            My code doesn't just run; it performs. I build digital architectures that bridge the gap between complex
                            algorithms and human intuition.
                        </p>

                        <div className="bio-stats">
                            <div className="stat-box">
                                <h3 className="counter" data-target="8">8+</h3>
                                <p>Deployed Systems</p>
                            </div>
                            <div className="stat-box">
                                <h3 className="counter" data-target="3">3+</h3>
                                <p>Years Experience</p>
                            </div>
                            <div className="stat-box">
                                <h3>100%</h3>
                                <p>Commitment</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Code Block */}
                    <div className="bio-visual">
                        <div className="code-block">
                            <div className="code-line"><span className="c-purple">class</span> <span className="c-yellow">Engineer</span> {'{'}</div>
                            <div className="code-line indent"> <span className="c-purple">constructor</span>() {'{'}</div>
                            <div className="code-line double-indent"> this.passion = <span className="c-green">"Innovation"</span>;</div>
                            <div className="code-line double-indent"> this.stack = [<span className="c-green">"AI"</span>, <span className="c-green">"Web"</span>];</div>
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
