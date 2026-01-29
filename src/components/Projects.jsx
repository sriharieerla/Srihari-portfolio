import React, { useState, useEffect } from 'react';

const projectData = {
    "1": {
        title: "Accident Prediction",
        sub: "Machine Learning Model",
        desc: "An advanced ML ecosystem that analyzes over 10,000 traffic data points to predict accident hotspots with 85% accuracy. Built to assist municipal planning and emergency response teams.",
        stats: [{ label: "Accuracy", value: "85%" }, { label: "Data Points", value: "10k+" }],
        liveLink: "https://github.com/sriharieerla/Accident-Prediction-Model",
        codeLink: "https://github.com/sriharieerla/Accident-Prediction-Model",
        icon: "fab fa-python"
    },
    "2": {
        title: "Secure Reserve",
        sub: "Enterprise Booking System",
        desc: "A high-concurrency reservation engine capable of handling real-time locking and transaction integrity. Features military-grade SHA-256 encryption for user data protection.",
        stats: [{ label: "Latency", value: "<100ms" }, { label: "Security", value: "SHA-256" }],
        liveLink: "https://github.com/sriharieerla/Online-Ticket-Reservation-System",
        codeLink: "https://github.com/sriharieerla/Online-Ticket-Reservation-System",
        icon: "fab fa-java"
    },
    "3": {
        title: "Pineapple Store",
        sub: "E-Commerce Frontend",
        desc: "A pixel-perfect, responsive shopping interface optimized for Core Web Vitals. Features dynamic cart state management and buttery smooth transitions.",
        stats: [{ label: "Performance", value: "98/100" }, { label: "Responsive", value: "100%" }],
        liveLink: "https://sriharieerla.github.io/Pineapple-store-frontend/",
        codeLink: "https://github.com/sriharieerla/pineapple-store-frontend",
        icon: "fab fa-js"
    }
};

const Projects = () => {
    const [activeId, setActiveId] = useState("3");
    const [rotation, setRotation] = useState(-240); // Default for item 3 (240deg) -> -240 rotate

    // Angles for items 1, 2, 3
    const itemAngles = [0, 120, 240];
    const itemIds = ["1", "2", "3"];

    const handleActivate = (id, index) => {
        setActiveId(id);
        const targetAngle = -itemAngles[index];
        setRotation(targetAngle);
    };

    const activeData = projectData[activeId];

    return (
        <section id="projects" className="project-showcase">
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="section-title reveal" style={{ marginBottom: '4rem' }}>Selected Engineering</h2>
            </div>

            <div className="showcase-container">
                {/* LEFT: Orbit System */}
                <div className="orbit-area reveal">
                    <div className="orbit-container" style={{ transform: `rotate(${rotation}deg)` }}>
                        <div className="orbit-core"></div>

                        {itemIds.map((id, index) => {
                            const initialAngle = itemAngles[index];
                            // Counter-rotate logic
                            const counterRotation = -initialAngle - rotation;

                            return (
                                <div
                                    key={id}
                                    className={`orbit-item ${activeId === id ? 'active' : ''}`}
                                    style={{
                                        transform: `rotate(${initialAngle}deg) translate(200px) rotate(${counterRotation}deg)`
                                    }}
                                    onClick={() => handleActivate(id, index)}
                                >
                                    <div className="planet"><i className={projectData[id].icon}></i></div>
                                    <div className="planet-label">{projectData[id].title}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT: Info Terminal */}
                <div className="info-panel reveal delay-200">
                    <div className="info-header-strip">
                        <div className="terminal-dots">
                            <div className="terminal-dot dot-red"></div>
                            <div className="terminal-dot dot-yellow"></div>
                            <div className="terminal-dot dot-green"></div>
                        </div>
                        <span className="info-sub" style={{ margin: 0, opacity: 0.6 }}>{activeData.sub}</span>
                    </div>

                    <div className="info-content key={activeId}"> {/* Key forces re-render for fade effect if using CSS animation */}
                        <h3 className="info-title">{activeData.title}</h3>
                        <div className="info-desc">{activeData.desc}</div>

                        <div className="info-stats">
                            {activeData.stats.map((s, i) => (
                                <div className="stat-item" key={i}>
                                    <h4>{s.label}</h4>
                                    <span>{s.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="info-actions">
                            <a href={activeData.liveLink} className="btn-panel primary" target="_blank" rel="noopener noreferrer">View Live</a>
                            <a href={activeData.codeLink} className="btn-panel secondary" target="_blank" rel="noopener noreferrer">Source Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
