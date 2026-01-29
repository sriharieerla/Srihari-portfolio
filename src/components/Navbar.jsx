import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") !== "light-mode"); // Default dark

    // Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Theme Logic
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
            localStorage.setItem("theme", "dark-mode");
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem("theme", "light-mode");
        }
    }, [darkMode]);

    const toggleTheme = () => setDarkMode(!darkMode);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation">
            <div className="nav-container">
                <div className="nav-logo">
                    <a href="#home">Srihari Eerla</a>
                </div>

                <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
                    <li><a href="#home" onClick={() => setMenuActive(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setMenuActive(false)}>About</a></li>
                    <li><a href="#experience" onClick={() => setMenuActive(false)}>Experience</a></li>
                    <li><a href="#skills" onClick={() => setMenuActive(false)}>Skills</a></li>
                    <li><a href="#education" onClick={() => setMenuActive(false)}>Education</a></li>
                    <li><a href="#projects" onClick={() => setMenuActive(false)}>Work</a></li>
                    <li><a href="#freelance" onClick={() => setMenuActive(false)}>Freelance</a></li>
                    <li><a href="#contact" onClick={() => setMenuActive(false)}>Contact</a></li>
                </ul>

                <div className="nav-controls">
                    <button className="theme-toggle" onClick={toggleTheme}>
                        <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
                    </button>

                    <div
                        className={`hamburger ${menuActive ? 'active' : ''}`}
                        onClick={() => setMenuActive(!menuActive)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
