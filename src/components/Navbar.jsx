
import React, { useState, useEffect } from 'react';

const getSavedTheme = () => {
    try {
        return localStorage.getItem('theme') !== 'light-mode';
    } catch {
        return true;
    }
};

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [darkMode, setDarkMode] = useState(getSavedTheme);
    const [activeSection, setActiveSection] = useState('home');

    const links = [
        ['home', 'Home'],
        ['about', 'About'],
        ['experience', 'Experience'],
        ['skills', 'Skills'],
        ['projects', 'Work'],
        ['education', 'Education'],
        ['websites', 'Websites'],
        ['resume', 'Resume'],
        ['contact', 'Contact']
    ];

    const closeMenu = () => setMenuActive(false);

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll, {
            passive: true
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Theme management
    useEffect(() => {
        // Your existing CSS uses dark-mode class for the LIGHT theme.
document.body.classList.toggle('dark-mode', !darkMode);

        try {
            localStorage.setItem(
                'theme',
                darkMode ? 'dark-mode' : 'light-mode'
            );
        } catch (error) {
            console.warn('Unable to save theme preference:', error);
        }
    }, [darkMode]);

    // Synchronize theme across browser tabs
    useEffect(() => {
        const handleStorage = (event) => {
            if (event.key === 'theme') {
                setDarkMode(event.newValue !== 'light-mode');
            }
        };

        window.addEventListener('storage', handleStorage);

        return () => {
            window.removeEventListener('storage', handleStorage);
        };
    }, []);

    // Close mobile menu with Escape key
    useEffect(() => {
        if (!menuActive) return;

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                closeMenu();
            }
        };

        window.addEventListener('keydown', handleEscape);

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [menuActive]);

    // Close menu when switching to desktop layout
    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 992px)');

        const handleResize = (event) => {
            if (event.matches) {
                closeMenu();
            }
        };

        mediaQuery.addEventListener('change', handleResize);

        return () => {
            mediaQuery.removeEventListener('change', handleResize);
        };
    }, []);

    // Detect currently visible section
    useEffect(() => {
        const sections = links
            .map(([id]) => document.getElementById(id))
            .filter(Boolean);

        if (!('IntersectionObserver' in window)) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio - a.intersectionRatio
                    );

                if (visibleSections.length > 0) {
                    setActiveSection(visibleSections[0].target.id);
                }
            },
            {
                rootMargin: '-20% 0px -65% 0px',
                threshold: [0, 0.25, 0.5, 0.75]
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const toggleTheme = () => {
        setDarkMode((previous) => !previous);
    };

    return (
        <nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            role="navigation"
            aria-label="Primary navigation"
        >
            <div className="nav-container">

                {/* Logo */}
                <div className="nav-logo">
                    <a href="#home" onClick={closeMenu}>
                        Srihari <span>Eerla</span>
                    </a>
                </div>

                {/* Navigation links */}
                <ul
                    id="primary-navigation"
                    className={`nav-menu ${menuActive ? 'active' : ''}`}
                >
                    {links.map(([id, label]) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                className={
                                    activeSection === id ? 'active' : ''
                                }
                                aria-current={
                                    activeSection === id ? 'location' : undefined
                                }
                                onClick={closeMenu}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Theme and mobile controls */}
                <div className="nav-controls">

                    <button
                        type="button"
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label={
                            darkMode
                                ? 'Switch to light mode'
                                : 'Switch to dark mode'
                        }
                        title="Toggle theme"
                    >
                        <i
                            className={`fas ${
                                darkMode ? 'fa-sun' : 'fa-moon'
                            }`}
                            aria-hidden="true"
                        ></i>
                    </button>

                    <button
                        type="button"
                        className={`hamburger ${
                            menuActive ? 'active' : ''
                        }`}
                        onClick={() => setMenuActive((previous) => !previous)}
                        aria-label={
                            menuActive ? 'Close navigation menu' : 'Open navigation menu'
                        }
                        aria-expanded={menuActive}
                        aria-controls="primary-navigation"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;