## 📂 Project Structure (Diagram)

```mermaid
flowchart LR
    A[index.html] --> B[Navbar]
    A --> C[Hero Section]
    A --> D[About]
    A --> E[Skills]
    A --> F[Projects]
    A --> G[Internships & Certifications]
    A --> H[Resume]
    A --> I[Contact]
    A --> J[Footer]

    B --> B1[styles.css: navbar, nav-menu, theme-toggle, hamburger]
    B --> B2[script.js: theme toggle, mobile menu]

    C --> C1[styles.css: hero, profile-img, typing-container]
    C --> C2[script.js: typing animation, page load]

    D --> D1[styles.css: about, about-text, stat]

    E --> E1[styles.css: skills-grid, skill-card]
    E --> E2[script.js: scroll fade-in]

    F --> F1[styles.css: project-card, project-overlay]
    F --> F2[script.js: project link alert + fade-in]

    G --> G1[styles.css: general section styles]

    H --> H1[styles.css: resume-section, resume-btn]
    H --> H2[script.js: resume download]

    I --> I1[styles.css: contact-content, contact-form]
    I --> I2[script.js: mailto link]

    J --> J1[styles.css: footer]
