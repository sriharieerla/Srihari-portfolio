import React from 'react';
import { profiles, resumes } from '../data/site';

const order = ['se', 'ai', 'all'];

const ProfileSelector = ({ profile, setProfile }) => {
    const current = profiles[profile];
    return (
        <section id="profiles" className="profiles">
            <div className="container">
                <h2 className="section-title reveal reveal-up">Choose a Profile</h2>
                <div className="profile-tabs reveal" role="tablist" aria-label="Professional profile">
                    {order.map((k) => (
                        <button key={k} role="tab" id={`tab-${k}`} aria-selected={profile === k} aria-controls="profile-panel"
                            className={`profile-tab ${profile === k ? 'active' : ''}`} onClick={() => setProfile(k)}>
                            {profiles[k].label}
                        </button>
                    ))}
                </div>
                <div id="profile-panel" role="tabpanel" aria-labelledby={`tab-${profile}`} className="profile-panel reveal">
                    <p>{current.intro}</p>
                    <div className="tech-tags">{current.focus.map((f) => <span key={f}>{f}</span>)}</div>
                    {profile !== 'all' && (
                        <a className="btn btn-primary" href={resumes[profile].file} download>
                            <i className="fas fa-download"></i> {resumes[profile].label}
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProfileSelector;
