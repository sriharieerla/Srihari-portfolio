import React from 'react';

const Freelance = () => {
    return (
        <section id="freelance" className="freelance-section">
            <div className="container">
                <h2 className="section-title reveal">Client Deliverables</h2>
                <div className="freelance-grid reveal">

                    <a href="https://sachinbahuguna.claritynest.in/" target="_blank" rel="noopener noreferrer" className="freelance-card">
                        <div className="freelance-image">
                            <img
                                src="https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Clarity Nest"
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/70' }}
                            />
                        </div>
                        <div className="freelance-info">
                            <h3>Clarity Nest <span className="status-badge">Live</span></h3>
                            <p>Wellness Platform</p>
                        </div>
                    </a>

                    <a href="https://mindyatra.com/" target="_blank" rel="noopener noreferrer" className="freelance-card">
                        <div className="freelance-image">
                            <img
                                src="https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="MindYatra"
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/70' }}
                            />
                        </div>
                        <div className="freelance-info">
                            <h3>MindYatra <span className="status-badge">Live</span></h3>
                            <p>Coaching CMS</p>
                        </div>
                    </a>

                    <a href="https://vidyanex.com/" target="_blank" rel="noopener noreferrer" className="freelance-card">
                        <div className="freelance-image">
                            <img
                                src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="VidyaNex"
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/70' }}
                            />
                        </div>
                        <div className="freelance-info">
                            <h3>VidyaNex <span className="status-badge">Live</span></h3>
                            <p>EdTech Platform</p>
                        </div>
                    </a>

                    <a href="https://digitalzala.com/" target="_blank" rel="noopener noreferrer" className="freelance-card">
                        <div className="freelance-image">
                            <img src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Digital Zala"
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/70' }}
                            />
                        </div>
                        <div className="freelance-info">
                            <h3>Digital Zala <span className="status-badge">Live</span></h3>
                            <p>Digital Agency</p>
                        </div>
                    </a>

                    <a href="#" className="freelance-card">
                        <div className="freelance-image">
                            <img src="https://images.pexels.com/photos/7679863/pexels-photo-7679863.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Devika Collection" onError={(e) => { e.target.src = 'https://via.placeholder.com/70' }} />
                        </div>
                        <div className="freelance-info">
                            <h3>Devika Collection <span className="status-badge">Production</span></h3>
                            <p>Handloom Store</p>
                        </div>
                    </a>

                    <a href="#" className="freelance-card">
                        <div className="freelance-image">
                            <img src="https://images.pexels.com/photos/1194412/pexels-photo-1194412.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Granites Global" onError={(e) => { e.target.src = 'https://via.placeholder.com/70' }} />
                        </div>
                        <div className="freelance-info">
                            <h3>Granites Global <span className="status-badge">Production</span></h3>
                            <p>Stone Exports</p>
                        </div>
                    </a>

                    <a href="#" className="freelance-card">
                        <div className="freelance-image">
                            <img src="https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Monet Spect" onError={(e) => { e.target.src = 'https://via.placeholder.com/70' }} />
                        </div>
                        <div className="freelance-info">
                            <h3>Monet Spect <span className="status-badge">Production</span></h3>
                            <p>Financial Advisor</p>
                        </div>
                    </a>



                </div>
            </div>
        </section>
    );
};

export default Freelance;
