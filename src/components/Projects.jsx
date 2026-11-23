import React, { useState } from 'react';
import { projects, projectFilters, profileFilter } from '../data/site';

const icons = {
    "SpringCart": "fas fa-cart-shopping",
    "ExpenseFlow": "fas fa-wallet",
    "AI Auditing Agent": "fas fa-robot",
    "IncidentMind": "fas fa-brain",
    "Accident Prediction System": "fab fa-python",
};

const Projects = ({ profile }) => {
    // Filter follows the selected profile until the visitor picks one themselves.
    const [pick, setPick] = useState({ profile, value: null });
    const filter = pick.profile === profile && pick.value ? pick.value : profileFilter[profile];
    const list = filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter));

    const [activeName, setActiveName] = useState(null);
    const active = list.find((p) => p.name === activeName) || list[0];
    const n = list.length;
    const angleOf = (i) => (360 / n) * i;
    const activeIndex = list.indexOf(active);
    const rotation = -angleOf(activeIndex);

    return (
        <section id="projects" className="project-showcase">
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="section-title reveal" style={{ marginBottom: '2rem' }}>Selected Engineering</h2>
                <div className="project-filters reveal" role="group" aria-label="Filter projects">
                    {projectFilters.map((f) => (
                        <button key={f} aria-pressed={filter === f} className={`filter-chip ${filter === f ? 'active' : ''}`}
                            onClick={() => { setPick({ profile, value: f }); setActiveName(null); }}>
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            <div className="showcase-container">
                <div className="orbit-area reveal">
                    <div className="orbit-container" style={{ transform: `rotate(${rotation}deg)` }}>
                        <div className="orbit-core"></div>
                        {list.map((p, i) => (
                            <div key={p.name} role="button" tabIndex={0} aria-label={`Show ${p.name}`}
                                className={`orbit-item ${active === p ? 'active' : ''}`}
                                style={{ transform: `rotate(${angleOf(i)}deg) translate(200px) rotate(${-angleOf(i) - rotation}deg)` }}
                                onClick={() => setActiveName(p.name)}
                                onKeyDown={(e) => e.key === 'Enter' && setActiveName(p.name)}>
                                <div className="planet"><i className={icons[p.name]}></i></div>
                                <div className="planet-label">{p.name}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="info-panel reveal delay-200">
                    <div className="info-header-strip">
                        <div className="terminal-dots">
                            <div className="terminal-dot dot-red"></div>
                            <div className="terminal-dot dot-yellow"></div>
                            <div className="terminal-dot dot-green"></div>
                        </div>
                        <span className="info-sub" style={{ margin: 0, opacity: 0.6 }}>{active.kind}</span>
                    </div>

                    <div className="info-content" key={active.name}>
                        <h3 className="info-title">{active.name}</h3>
                        <div className="info-desc">
                            <p>{active.summary}</p>
                            <p><strong>Goal:</strong> {active.goal}</p>
                            <p><strong>Implementation:</strong> {active.how}</p>
                            <ul className="info-features">{active.features.map((f) => <li key={f}>{f}</li>)}</ul>
                        </div>
                        <div className="tech-tags">{active.tech.map((t) => <span key={t}>{t}</span>)}</div>
                        {active.repo && (
                            <div className="info-actions">
                                <a href={active.repo} className="btn-panel secondary" target="_blank" rel="noopener noreferrer">Source Code</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
