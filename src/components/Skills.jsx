import React from 'react';
import { skills } from '../data/site';

// [short title, subtitle, icon] keyed by category order in data/site.js
const hex = [
    ['Languages', 'Java · Python · SQL', 'fas fa-code'],
    ['Frontend', 'React · JS · CSS', 'fas fa-laptop-code'],
    ['Backend', 'Spring · Flask · FastAPI', 'fas fa-server'],
    ['AI & ML', 'LLMs · RAG · NLP', 'fas fa-brain'],
    ['GenAI & Agents', 'CrewAI · Groq · Gemini', 'fas fa-robot'],
    ['Databases', 'MySQL · SQL Server', 'fas fa-database'],
    ['Cloud & DevOps', 'Docker · AWS · GCP', 'fas fa-cloud'],
    ['Dev Tools', 'Git · Maven · Postman', 'fas fa-screwdriver-wrench'],
    ['CS Core', 'DSA · OOP · DBMS', 'fas fa-microchip'],
];

const Skills = ({ profile }) => {
    const match = (p) => profile === 'all' || p === 'both' || p === profile;
    const catMatch = (items) => items.some(([, p]) => match(p));
    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title reveal reveal-up">Technical Arsenal</h2>

                <div className="hex-grid reveal">
                    {skills.map(([cat, items], i) => (
                        <div className={`hex-item ${catMatch(items) ? '' : 'dim'}`} key={cat}>
                            <div className="hex-content">
                                <i className={hex[i][2]}></i>
                                <h3>{hex[i][0]}</h3>
                                <span>{hex[i][1]}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skill-rows reveal">
                    {skills.map(([cat, items]) => (
                        <div className="skill-row" key={cat}>
                            <h4>{cat}</h4>
                            <div className="tech-tags">
                                {items.map(([name, p]) => <span key={name} className={match(p) ? '' : 'dim'}>{name}</span>)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
