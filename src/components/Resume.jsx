import React from 'react';
import { resumes } from '../data/site';

const Resume = ({ profile }) => {
    return (
        <section id="resume" className="resume-section reveal reveal-up">
            <div className="container">
                <div className="resume-content">
                    <h2>Ready to Hire?</h2>
                    <p>Two resumes, each focused on a different set of roles. Pick the one that matches your opening.</p>
                    <div className="resume-options">
                        {['se', 'ai'].map((k) => (
                            <div className={`resume-option ${profile === k ? 'selected' : ''}`} key={k}>
                                <a href={resumes[k].file} className="btn resume-btn" download>
                                    <i className="fas fa-download"></i>
                                    {resumes[k].label}
                                </a>
                                <small>{resumes[k].roles}</small>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
