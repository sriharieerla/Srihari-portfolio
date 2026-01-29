import React from 'react';

const Resume = () => {
    return (
        <section className="resume-section reveal reveal-up">
            <div className="container">
                <div className="resume-content">
                    <h2>Ready to Hire?</h2>
                    <p>
                        I bring a blend of technical expertise and product ownership. Check out my resume for a detailed background.
                    </p>
                    <a href="/Srihari_Fresher_SDE_2025.pdf" className="btn resume-btn" id="resumeBtn" download>
                        <i className="fas fa-download"></i>
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Resume;
