// Theme Toggle Functionality
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const themeIcon = themeToggle.querySelector("i");

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
  updateThemeIcon();
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  updateThemeIcon();

  // Save theme preference
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode");
  } else {
    localStorage.removeItem("theme");
  }
});

function updateThemeIcon() {
  if (body.classList.contains("dark-mode")) {
    themeIcon.className = "fas fa-sun";
  } else {
    themeIcon.className = "fas fa-moon";
  }
}

// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Typing Animation
const typingText = document.getElementById("typing-text");
const phrases = [
  "Aspiring SDE",
  "AI & ML Enthusiast",
  "Problem Solver",
  "Full Stack Developer",
  "Innovation Seeker",
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typePhrase() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typingText.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typingText.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    typingSpeed = 2000; // Pause at end
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typingSpeed = 500;
  }

  setTimeout(typePhrase, typingSpeed);
}

// Start typing animation
typePhrase();

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 70; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Active Navigation Highlighting
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

function highlightActiveSection() {
  const scrollPos = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", highlightActiveSection);

// Scroll Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll(".skill-card, .project-card, .stat").forEach((el) => {
  observer.observe(el);
});

// Contact Form Handling
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(contactForm);
  const name = formData.get("name") || document.getElementById("name").value;
  const email = formData.get("email") || document.getElementById("email").value;
  const message =
    formData.get("message") || document.getElementById("message").value;

  // Simple validation
  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Create mailto link
  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
  const body = encodeURIComponent(
    `Hi Srihari,\n\nMy name is ${name} and I'd like to get in touch.\n\n${message}\n\nBest regards,\n${name}\n\nEmail: ${email}`
  );

  const mailtoLink = `mailto:eerlasriharimanikanta@gmail.com?subject=${subject}&body=${body}`;

  // Open email client
  window.location.href = mailtoLink;

  // Show success message
  alert(
    "Thank you for your message! Your email client should now open with the pre-filled message."
  );

  // Reset form
  contactForm.reset();
});

// Resume Download Handler
const resumeBtn = document.getElementById("resumeBtn");

resumeBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // In a real application, this would download an actual PDF file
  // For now, we'll show a message
  //alert('Resume download feature will be implemented with your actual resume PDF file. Please contact directly for now.');

  //You can replace this with actual file download:
  const link = document.createElement("a");
  link.href = "Srihari_Fresher_SDE_2025.pdf";
  link.download = "Srihari_Fresher_SDE_2025.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// Navbar Background on Scroll
let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 100) {
    navbar.style.background = body.classList.contains("dark-mode")
      ? "rgba(15, 15, 15, 0.98)"
      : "rgba(255, 255, 255, 0.98)";
  } else {
    navbar.style.background = body.classList.contains("dark-mode")
      ? "rgba(15, 15, 15, 0.95)"
      : "rgba(255, 255, 255, 0.95)";
  }

  lastScrollTop = scrollTop;
});

/* Project Links Placeholder Handler
document.querySelectorAll(".project-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    alert(
      "Project links will be updated with your actual GitHub repositories and live demos."
    );
  });
});
*/
// Project Links Handler
document.querySelectorAll(".project-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // If placeholder, show alert
    if (href === "#" || href.trim() === "") {
      e.preventDefault();
      alert("This project demo will be updated soon!");
    }
    // Otherwise, open in new tab
    else {
      this.setAttribute("target", "_blank");
    }
  });
});

// Add CSS for active nav link
const style = document.createElement("style");
style.textContent = `
    .nav-menu a.active {
        color: #007bff !important;
        position: relative;
    }
    
    .nav-menu a.active::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        background: #007bff;
        border-radius: 1px;
    }
    
    body.dark-mode .nav-menu a.active {
        color: #4da3ff !important;
    }
    
    body.dark-mode .nav-menu a.active::after {
        background: #4da3ff;
    }
`;
document.head.appendChild(style);

// Page Load Animation
window.addEventListener("load", function () {
  document.body.classList.add("loaded");

  // Animate hero elements
  setTimeout(() => {
    document.querySelector(".hero-image").style.opacity = "1";
    document.querySelector(".hero-image").style.transform = "translateY(0)";
  }, 200);

  setTimeout(() => {
    document.querySelector(".hero-text").style.opacity = "1";
    document.querySelector(".hero-text").style.transform = "translateY(0)";
  }, 400);
});

// Add initial styles for page load animation
const loadingStyle = document.createElement("style");
loadingStyle.textContent = `
    .hero-image,
    .hero-text {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease;
    }
`;
document.head.appendChild(loadingStyle);
