import React, { useState } from 'react';

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle, sending, sent

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate sending
        setTimeout(() => {
            setStatus('sent');
            // Reset after 3 seconds
            setTimeout(() => {
                setStatus('idle');
                e.target.reset();
            }, 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title reveal reveal-up">Let's Connect</h2>

                <div className="contact-portal reveal">
                    {/* Left: Social Hub */}
                    <div className="contact-hub">
                        <h3>Start a Conversation</h3>
                        <p>I'm available for freelance work and full-time opportunities. Send me a message and let's build something extraordinary.</p>

                        <div className="social-grid">
                            <a href="mailto:eerlasriharimanikanta@gmail.com" className="social-orb email" aria-label="Email Me">
                                <div className="orb-icon"><i className="fas fa-envelope"></i></div>
                                <span>Email</span>
                            </a>
                            <a href="https://github.com/sriharieerla" target="_blank" rel="noopener noreferrer" className="social-orb github" aria-label="GitHub">
                                <div className="orb-icon"><i className="fab fa-github"></i></div>
                                <span>GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/srihari-manikanta-eerla-520b49256/" target="_blank" rel="noopener noreferrer" className="social-orb linkedin" aria-label="LinkedIn">
                                <div className="orb-icon"><i className="fab fa-linkedin"></i></div>
                                <span>LinkedIn</span>
                            </a>
                            <a href="tel:+919553255655" className="social-orb phone" aria-label="Call Me">
                                <div className="orb-icon"><i className="fas fa-phone"></i></div>
                                <span>Phone</span>
                            </a>
                        </div>
                    </div>

                    {/* Right: Message Terminal */}
                    <div className="contact-terminal">
                        <form id="contactForm" onSubmit={handleSubmit}>
                            <div className="input-group">
                                <input type="text" id="name" required placeholder=" " />
                                <label htmlFor="name">Your Name</label>
                                <div className="glow-bar"></div>
                            </div>

                            <div className="input-group">
                                <input type="email" id="email" required placeholder=" " />
                                <label htmlFor="email">Email Address</label>
                                <div className="glow-bar"></div>
                            </div>

                            <div className="input-group">
                                <textarea id="message" rows="4" required placeholder=" "></textarea>
                                <label htmlFor="message">Your Message</label>
                                <div className="glow-bar"></div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-send"
                                disabled={status !== 'idle'}
                                style={{ background: status === 'sent' ? '#10B981' : '' }}
                            >
                                {status === 'idle' && (
                                    <><span>Send Message</span> <i className="fas fa-paper-plane"></i></>
                                )}
                                {status === 'sending' && <span>Sending...</span>}
                                {status === 'sent' && <span>Message Sent!</span>}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
