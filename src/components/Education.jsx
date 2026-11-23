
import React from 'react';

const certifications = [
    {
        title: 'Software Engineer Intern - Role Certification',
        organization: 'HackerRank',
        date: 'October 2025',
        image: '/certificates/hackerrank-software-engineer.jpeg',
        category: 'Certification'
    },
    {
        title: 'Generative AI & Prompt Engineering',
        organization: 'DataValley India Pvt. Ltd.',
        date: 'April 2025',
        image: '/certificates/datavalley-genai-internship.jpeg',
        category: '360-Hour Internship'
    },
    {
        title: 'Software Engineering and Agile Software Development',
        organization: 'Infosys Springboard',
        date: 'December 2023',
        image: '/certificates/infosys-software-engineering.jpeg',
        category: 'Course Completion'
    },
    {
        title: 'Agentathon 2025',
        organization: 'Google Developer Groups Hyderabad',
        date: 'December 20–21, 2025',
        image: '/certificates/agentathon-participation.jpeg',
        category: 'Hackathon Participation'
    },
    {
        title: 'Guinness World Records - Agentic AI Hackathon',
        organization: 'Google for Developers & GDG Hyderabad',
        date: 'December 21, 2025',
        image: '/certificates/guinness-world-record.jpeg',
        category: 'World Record Participation'
    }
];

const Education = () => {
    return (
        <section id="education" className="education-section">
            <div className="container">

                <h2 className="section-title reveal reveal-up">
                    Education & Certifications
                </h2>

                <div className="edu-grid">

                    {/* EDUCATION */}
                    <div className="edu-column reveal reveal-left">
                        <h3 className="column-title">
                            <i className="fas fa-graduation-cap"></i>
                            Academics
                        </h3>

                        <div className="edu-card">
                            <h4>B.Tech in Computer Science (AI & ML)</h4>
                            <p className="school">
                                Rise Krishna Sai Prakasam Group of Institutions
                            </p>
                            <div className="edu-meta">
                                <span>2021 - 2025</span>
                                <span className="gpa">GPA: 8.1/10</span>
                            </div>
                        </div>

                        <div className="edu-card">
                            <h4>Intermediate Education</h4>
                            <p className="school">
                                Narayana Junior College
                            </p>
                            <div className="edu-meta">
                                <span>2018 - 2020</span>
                                <span className="gpa">GPA: 8.9/10</span>
                            </div>
                        </div>

                        <div className="edu-card">
                            <h4>Secondary School</h4>
                            <p className="school">
                                Pragathi Vidya Nilayam
                            </p>
                            <div className="edu-meta">
                                <span>2017 - 2018</span>
                                <span className="gpa">GPA: 9.5/10</span>
                            </div>
                        </div>
                    </div>

                    {/* CERTIFICATIONS */}
                    <div className="edu-column reveal reveal-right">

                        <h3 className="column-title">
                            <i className="fas fa-certificate"></i>
                            Certifications & Internships
                        </h3>

                        <div className="certificate-grid">
                            {certifications.map((cert, index) => (
                                <div className="certificate-card" key={index}>

                                    <a
                                        href={cert.image}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="certificate-image-link"
                                        aria-label={`View ${cert.title} certificate`}
                                    >
                                        <img
                                            src={cert.image}
                                            alt={`${cert.title} certificate`}
                                            className="certificate-image"
                                            loading="lazy"
                                        />
                                        <span className="certificate-view">
                                            <i className="fas fa-expand"></i>
                                            View Certificate
                                        </span>
                                    </a>

                                    <div className="certificate-details">
                                        <span className="certificate-category">
                                            {cert.category}
                                        </span>

                                        <h4>{cert.title}</h4>

                                        <p>{cert.organization}</p>

                                        <span className="certificate-date">
                                            {cert.date}
                                        </span>
                                    </div>

                                </div>
                            ))}
                        </div>

                        {/* ACHIEVEMENTS */}
                        <h3
                            className="column-title"
                            style={{ marginTop: '2rem' }}
                        >
                            <i className="fas fa-trophy"></i>
                            Achievements
                        </h3>

                        <div className="achievement-box">
                            <p>
                                <i className="fas fa-check-circle"></i>
                                <strong>150+ LeetCode Problems</strong> Solved
                            </p>

                            <p>
                                <i className="fas fa-check-circle"></i>
                                <strong>Agentathon 2025</strong> Participant
                            </p>

                            <p>
                                <i className="fas fa-check-circle"></i>
                                <strong>Guinness World Records™</strong>
                                Agentic AI Hackathon Record Attempt Participant
                            </p>

                            <p>
                                <i className="fas fa-check-circle"></i>
                                <strong>GeeksforGeeks</strong> AI Deployment Workshop
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;