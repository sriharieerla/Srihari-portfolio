import React, { useState } from 'react';
import { contact } from '../data/site';

const Contact = () => {
    const [status, setStatus] = useState({ state: 'idle', msg: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const d = Object.fromEntries(new FormData(form));
        if (contact.formEndpoint) {
            setStatus({ state: 'sending', msg: '' });
            try {
                const res = await fetch(contact.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(d) });
                if (!res.ok) throw new Error();
                form.reset();
                setStatus({ state: 'sent', msg: 'Message sent.' });
            } catch {
                setStatus({ state: 'error', msg: `Message not sent. Email me directly at ${contact.email}.` });
            }
            return;
        }
        const body = `${d.message}\n\nFrom: ${d.name} (${d.email})`;
        window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent('Portfolio message from ' + d.name)}&body=${encodeURIComponent(body)}`;
        setStatus({ state: 'idle', msg: 'Your email app should open with the message filled in. Press send there to deliver it.' });
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title reveal reveal-up">Let's Connect</h2>

                <div className="contact-portal reveal">
                    {/* Left: Social Hub */}
                    <div className="contact-hub">
                        <h3>Start a Conversation</h3>
                        <p>Open to entry-level software engineering and AI/ML roles. Send me a message and I'll get back to you.</p>

                        <div className="social-grid">
                            <a href={`mailto:${contact.email}`} className="social-orb email" aria-label="Email Me">
                                <div className="orb-icon"><i className="fas fa-envelope"></i></div>
                                <span>Email</span>
                            </a>
                            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="social-orb github" aria-label="GitHub">
                                <div className="orb-icon"><i className="fab fa-github"></i></div>
                                <span>GitHub</span>
                            </a>
                            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="social-orb linkedin" aria-label="LinkedIn">
                                <div className="orb-icon"><i className="fab fa-linkedin"></i></div>
                                <span>LinkedIn</span>
                            </a>
                            <a href={`tel:${contact.phoneHref}`} className="social-orb phone" aria-label="Call Me">
                                <div className="orb-icon"><i className="fas fa-phone"></i></div>
                                <span>Phone</span>
                            </a>
                        </div>
                    </div>

                    {/* Right: Message Terminal */}
                    <div className="contact-terminal">
                        <form id="contactForm" onSubmit={handleSubmit}>
                            <div className="input-group">
                                <input type="text" id="name" name="name" required placeholder=" " />
                                <label htmlFor="name">Your Name</label>
                                <div className="glow-bar"></div>
                            </div>

                            <div className="input-group">
                                <input type="email" id="email" name="email" required placeholder=" " />
                                <label htmlFor="email">Email Address</label>
                                <div className="glow-bar"></div>
                            </div>

                            <div className="input-group">
                                <textarea id="message" name="message" rows="4" required placeholder=" "></textarea>
                                <label htmlFor="message">Your Message</label>
                                <div className="glow-bar"></div>
                            </div>

                            <button type="submit" className="btn btn-send" disabled={status.state === 'sending'}>
                                {status.state === 'sending'
                                    ? <span>Sending...</span>
                                    : <><span>{contact.formEndpoint ? 'Send Message' : 'Compose Email'}</span> <i className="fas fa-paper-plane"></i></>}
                            </button>
                            <p className={`form-status ${status.state}`} role="status" aria-live="polite">{status.msg}</p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
