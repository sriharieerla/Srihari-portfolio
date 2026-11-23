
import React from 'react';
import { websites } from '../data/site';

const base = import.meta.env.BASE_URL;

const localImages = [
    `${base}freelancing/Sachin.png`,
    `${base}freelancing/Mindyatra.png`,
    `${base}freelancing/vidyanex.png`,
];

const additionalProjects = [
    {
        name: 'BackbenchersClass.com',
        category: 'Financial EdTech',
        type: 'Full-Stack Application',
        description:
            'A financial education technology platform built to deliver digital learning experiences and financial education services.',
        url: 'https://backbenchersclass.com',
        image: null,
        icon: 'fas fa-chart-line',
        status: 'Ongoing',
        featured: true,
    },
    {
        name: 'Auditing Agent',
        category: 'AI / Automation',
        type: 'AI-Powered Auditing Solution',
        description:
            'An intelligent auditing agent developed for KCPL Associates to support auditing workflows and improve operational efficiency.',
        url: null,
        image: null,
        icon: 'fas fa-robot',
        status: 'Ongoing',
        featured: true,
    },
];

const Freelance = () => {
    const existingProjects = websites.map((project, index) => ({
        ...project,
        category: project.category || 'Web Development',
        description: project.description || project.type,
        image: project.image
            ? `${base}freelancing/${project.image}`
            : localImages[index] || null,
        icon: 'fas fa-globe',
        status: 'Live',
    }));

    const projects = [...existingProjects, ...additionalProjects];

    return (
        <section id="websites" className="freelance-section">
            <div className="container">

                <div className="freelance-heading reveal reveal-up">
                    <span className="freelance-kicker">
                        CLIENT WORK & REAL-WORLD EXPERIENCE
                    </span>

                    <h2 className="section-title">
                        Freelance & Client Projects
                    </h2>

                    <p className="freelance-subtitle">
                        A collection of websites, full-stack applications
                        and AI-powered solutions developed for real-world
                        requirements.
                    </p>

                    <div className="freelance-stats">
                        <div>
                            <strong>{projects.length}+</strong>
                            <span>Showcased Projects</span>
                        </div>
                        <div>
                            <strong>Full Stack</strong>
                            <span>Development</span>
                        </div>
                        <div>
                            <strong>AI</strong>
                            <span>Solutions</span>
                        </div>
                    </div>
                </div>

                <div className="freelance-grid">
                    {projects.map((project, index) => {
                        const Card = project.url ? 'a' : 'article';

                        return (
                            <Card
                                key={project.name || index}
                                href={project.url || undefined}
                                target={project.url ? '_blank' : undefined}
                                rel={project.url ? 'noopener noreferrer' : undefined}
                                className={`freelance-project-card reveal reveal-up ${
                                    project.featured ? 'featured-project' : ''
                                }`}
                                style={{ '--project-index': index }}
                            >
                                <div className="freelance-project-visual">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={`${project.name} project preview`}
                                            loading="lazy"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                            }}
                                        />
                                    ) : (
                                        <div className="project-placeholder">
                                            <i className={project.icon || 'fas fa-code'}></i>
                                            <span>{project.category}</span>
                                        </div>
                                    )}

                                    <span className="project-status">
                                        <span className="status-dot"></span>
                                        {project.status}
                                    </span>

                                    {project.url && (
                                        <span className="project-open">
                                            <i className="fas fa-arrow-up-right-from-square"></i>
                                        </span>
                                    )}
                                </div>

                                <div className="freelance-project-content">
                                    <span className="project-category">
                                        {project.category}
                                    </span>

                                    <h3>{project.name}</h3>

                                    <p className="project-type">
                                        {project.type}
                                    </p>

                                    <p className="project-description">
                                        {project.description}
                                    </p>

                                    <div className="project-card-footer">
                                        <span>
                                            {project.url
                                                ? 'Visit Live Project'
                                                : 'Client Project'}
                                        </span>
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>

                <div className="freelance-cta reveal reveal-up">
                    <div>
                        <h3>Have a project in mind?</h3>
                        <p>
                            Let's collaborate and build something useful.
                        </p>
                    </div>
                    <a href="#contact" className="freelance-cta-button">
                        Let's Connect
                        <i className="fas fa-arrow-right"></i>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Freelance;