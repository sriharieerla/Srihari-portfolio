
import React from 'react';
import { achievements } from '../data/site';

const Achievements = () => {
    if (!achievements?.length) return null;

    return (
        <section id="achievements" className="achievements-section">
            <div className="container">
                <div className="section-heading reveal reveal-up">
                    <span className="section-kicker">MILESTONES & RECOGNITION</span>
                    <h2 className="section-title">Achievements</h2>
                    <p className="section-description">
                        Milestones that reflect my learning, dedication and progress.
                    </p>
                </div>

                <div className="achievements-grid">
                    {achievements.map((achievement, index) => (
                        <div
                            className="achievement-card reveal reveal-up"
                            key={achievement}
                            style={{ '--card-index': index }}
                        >
                            <div className="achievement-card-icon">
                                <i className="fas fa-trophy"></i>
                            </div>
                            <p>{achievement}</p>
                            <span className="achievement-number">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;