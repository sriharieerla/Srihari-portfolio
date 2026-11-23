
import React from 'react';
import { education as edu } from '../data/site';

const Education = () => {
    return (
        <section id="education" className="education-section">
            <div className="container">
                <div className="section-heading reveal reveal-up">
                    <span className="section-kicker">MY ACADEMIC JOURNEY</span>
                    <h2 className="section-title">Education</h2>
                    <p className="section-description">
                        Building a strong foundation in computer science,
                        artificial intelligence and software engineering.
                    </p>
                </div>

                <div className="education-layout">
                    <div className="education-timeline reveal reveal-left">
                        <div className="education-timeline-line"></div>

                        <div className="education-item">
                            <div className="education-icon">
                                <i className="fas fa-graduation-cap"></i>
                            </div>

                            <div className="education-card">
                                <span className="education-period">
                                    {edu.period}
                                </span>

                                <h3>{edu.degree}</h3>
                                <h4>{edu.school}</h4>
                                <p className="education-location">
                                    <i className="fas fa-map-marker-alt"></i>
                                    {edu.place}
                                </p>

                                <div className="education-gpa">
                                    <i className="fas fa-award"></i>
                                    <span>GPA: {edu.gpa.replace(' / ', '/').replace('10.0', '10')}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="coursework-panel reveal reveal-right">
                        <div className="coursework-header">
                            <span className="coursework-icon">
                                <i className="fas fa-book-open"></i>
                            </span>
                            <div>
                                <h3>Relevant Coursework</h3>
                                <p>Core subjects and technical foundations</p>
                            </div>
                        </div>

                        <div className="coursework-tags">
                            {edu.coursework.map((course, index) => (
                                <span
                                    className="coursework-tag"
                                    key={course}
                                    style={{ '--item-index': index }}
                                >
                                    <i className="fas fa-check"></i>
                                    {course}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;