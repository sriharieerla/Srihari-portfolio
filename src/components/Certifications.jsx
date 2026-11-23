
import React from 'react';
import { certificates, otherCertifications } from '../data/site';

const base = import.meta.env.BASE_URL;

const Certifications = () => {
    return (
        <section id="certifications" className="certifications-section">
            <div className="container">
                <div className="section-heading reveal reveal-up">
                    <span className="section-kicker">CONTINUOUS LEARNING</span>
                    <h2 className="section-title">Certifications</h2>
                    <p className="section-description">
                        Professional certifications and learning experiences
                        that strengthen my technical expertise.
                    </p>
                </div>

                <div className="certifications-grid">
                    {certificates.map((cert, index) => (
                        <article
                            className="modern-certificate-card reveal reveal-up"
                            key={cert.img}
                            style={{ '--card-index': index }}
                        >
                            <a
                                href={`${base}certificates/${cert.img}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modern-certificate-image"
                                aria-label={`View ${cert.title} certificate`}
                            >
                                <img
                                    src={`${base}certificates/${cert.img}`}
                                    alt={cert.alt}
                                    loading="lazy"
                                />
                                <span className="certificate-overlay">
                                    <i className="fas fa-expand-alt"></i>
                                    View Certificate
                                </span>
                            </a>

                            <div className="modern-certificate-content">
                                <span className="modern-certificate-kind">
                                    <i className="fas fa-certificate"></i>
                                    {cert.kind}
                                </span>

                                <h3>{cert.title}</h3>
                                <p className="certificate-issuer">
                                    <i className="fas fa-building"></i>
                                    {cert.org}
                                </p>

                                <div className="certificate-footer">
                                    <span>
                                        <i className="far fa-calendar-alt"></i>
                                        {cert.date}
                                    </span>
                                    <i className="fas fa-arrow-up-right-from-square certificate-arrow"></i>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {otherCertifications?.length > 0 && (
                    <div className="additional-certifications reveal reveal-up">
                        <h3>
                            <i className="fas fa-layer-group"></i>
                            Additional Certifications
                        </h3>

                        <div className="additional-cert-list">
                            {otherCertifications.map((cert, index) => (
                                <div className="additional-cert-item" key={`${cert.title}-${index}`}>
                                    <i className="fas fa-check-circle"></i>
                                    <span>{cert.title}</span>
                                    <span className="additional-cert-org">{cert.org}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Certifications;