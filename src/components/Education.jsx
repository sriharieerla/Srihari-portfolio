import React from 'react';

const Education = () => {
    return (
        <section id="education" className="education-section">
            <div className="container">
                <h2 className="section-title reveal reveal-up">Education & Certs</h2>

                <div className="edu-grid">
                    {/* Education Column */}
                    <div className="edu-column reveal reveal-left">
                        <h3 className="column-title"><i className="fas fa-graduation-cap"></i> Academics</h3>

                        <div className="edu-card">
                            <h4>B.Tech in Computer Science (AI & ML)</h4>
                            <p className="school">Rise Krishna Sai Prakasam Groups</p>
                            <div className="edu-meta">
                                <span>2021 - 2025</span>
                                <span className="gpa">GPA: 8.1/10</span>
                            </div>
                        </div>

                        <div className="edu-card">
                            <h4>Intermediate Education</h4>
                            <p className="school">Narayana Junior College</p>
                            <div className="edu-meta">
                                <span>2018 - 2020</span>
                                <span className="gpa">GPA: 8.9/10</span>
                            </div>
                        </div>

                        <div className="edu-card">
                            <h4>Secondary School</h4>
                            <p className="school">Pragathi Vidya Nilayam</p>
                            <div className="edu-meta">
                                <span>2017 - 2018</span>
                                <span className="gpa">GPA: 9.5/10</span>
                            </div>
                        </div>
                    </div>

                    {/* Certifications Column */}
                    <div className="edu-column reveal reveal-right">
                        <h3 className="column-title"><i className="fas fa-certificate"></i> Certifications</h3>

                        <div className="cert-list">
                            <div className="cert-item">
                                <div className="cert-icon"><i className="fab fa-java"></i></div>
                                <div className="cert-info">
                                    <h4>Mastering Java, Spring Boot & Microservices</h4>
                                    <p>Udemy</p>
                                </div>
                            </div>

                            <div className="cert-item">
                                <div className="cert-icon"><i className="fas fa-code"></i></div>
                                <div className="cert-info">
                                    <h4>Software Engineering & Agile</h4>
                                    <p>INFOSYS Springboard</p>
                                </div>
                            </div>

                            <div className="cert-item">
                                <div className="cert-icon"><i className="fab fa-python"></i></div>
                                <div className="cert-info">
                                    <h4>Basic Python & MySQL</h4>
                                    <p>HackerRank</p>
                                </div>
                            </div>

                            <div className="cert-item">
                                <div className="cert-icon"><i className="fas fa-database"></i></div>
                                <div className="cert-info">
                                    <h4>SQL (Intermediate)</h4>
                                    <p>HackerRank (2025)</p>
                                </div>
                            </div>
                        </div>

                        {/* Achievements / Extra */}
                        <h3 className="column-title" style={{ marginTop: '2rem' }}><i className="fas fa-trophy"></i> Achievements</h3>
                        <div className="achievement-box">
                            <p><i className="fas fa-check-circle"></i> <strong>150+ LeetCode Problems</strong> Solved</p>
                            <p><i className="fas fa-check-circle"></i> <strong>Google Build & Blog Marathon 2025</strong> Participant</p>
                            <p><i className="fas fa-check-circle"></i> <strong>GeeksforGeeks</strong> AI Deployment Workshop</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
