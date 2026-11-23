const base = import.meta.env.BASE_URL;

// ---- CONTACT (single source of truth) -------------------------------------
// NEEDS CONFIRMATION: the resumes use the email/phone below; the previous
// portfolio used eerlasriharimanikanta@gmail.com and +91 95532 55655.
// Set formEndpoint (e.g. a Formspree URL) to enable direct form submission.
export const contact = {
  email: "sriharimanikanta07@gmail.com",
  phone: "+91 84999 30014",
  phoneHref: "+918499930014",
  location: "Bangalore, India",
  github: "https://github.com/sriharieerla",
  linkedin: "https://www.linkedin.com/in/srihari-manikanta-eerla-520b49256/",
  formEndpoint: "",
};

export const person = {
  name: "Srihari Manikanta Eerla",
  short: "Srihari Eerla",
};

export const resumes = {
  se: {
    label: "Software Engineering Resume",
    roles: "Java Developer, Backend Developer, Software Engineer, Programmer Analyst",
    file: `${base}Srihari_Software_Engineer_Resume.pdf`,
  },
  ai: {
    label: "AI/ML Resume",
    roles: "AI Engineer, Machine Learning Engineer, Generative AI Developer, AI Agent Developer",
    file: `${base}Srihari_AIML_Resume.pdf`,
  },
};

export const profiles = {
  all: {
    label: "All",
    intro:
      "Two focus areas on one engineering base: backend development in Java and AI application development in Python.",
    focus: ["Java", "Python", "SQL", "Data Structures & Algorithms", "OOP"],
  },
  se: {
    label: "Software Engineering",
    intro:
      "Entry-level software engineer with a foundation in Java, OOP, data structures and SQL. I build backend services with Spring Boot, Spring Security and Hibernate/JPA, secure them with JWT and role-based access control, and test and containerize them with Postman and Docker.",
    focus: ["Java", "Spring Boot", "REST APIs", "MySQL", "Docker"],
  },
  ai: {
    label: "AI/ML Engineering",
    intro:
      "I build AI-powered applications in Python: multi-agent workflows with CrewAI, retrieval-augmented generation, and LLM integrations with Groq and Gemini 2.5 Flash, served through Flask and FastAPI.",
    focus: ["Python", "LLMs & RAG", "CrewAI", "FastAPI", "Machine Learning"],
  },
};

// Skill tuple: [name, profile] where profile is "se", "ai" or "both"
export const skills = [
  ["Programming Languages", [["Java", "se"], ["Python", "both"], ["SQL", "both"]]],
  ["Frontend Development", [["HTML", "se"], ["CSS", "se"], ["JavaScript", "se"], ["React.js", "se"]]],
  ["Backend Development", [["Spring Boot", "se"], ["Spring Security", "se"], ["Spring Data JPA", "se"], ["Hibernate", "se"], ["JWT", "se"], ["REST APIs", "both"], ["Flask", "ai"], ["FastAPI", "ai"]]],
  ["AI & Machine Learning", [["Machine Learning", "ai"], ["NLP", "ai"], ["Generative AI", "ai"], ["LLMs", "ai"], ["RAG", "ai"], ["Prompt Engineering", "ai"]]],
  ["Generative AI & Agents", [["CrewAI", "ai"], ["Multi-Agent Workflows", "ai"], ["Agent Memory", "ai"], ["Tool Calling", "ai"], ["Groq API", "ai"], ["Gemini 2.5 Flash", "ai"]]],
  ["Databases", [["MySQL", "both"], ["Microsoft SQL Server", "both"], ["SQLite", "ai"]]],
  ["Cloud & DevOps", [["Docker", "both"], ["AWS", "se"], ["Google Cloud Platform", "ai"], ["Linux", "ai"]]],
  ["Developer Tools", [["Git", "both"], ["GitHub", "both"], ["Maven", "se"], ["Postman", "both"], ["Jupyter Notebook", "ai"]]],
  ["CS Fundamentals", [["Data Structures & Algorithms", "both"], ["OOP", "both"], ["DBMS", "both"], ["Operating Systems", "ai"], ["SDLC", "se"]]],
];

export const projectFilters = ["All", "Software Engineering", "AI/ML", "Generative AI", "Backend Development"];
export const profileFilter = { all: "All", se: "Software Engineering", ai: "AI/ML" };

// NEEDS CONFIRMATION: no GitHub repo was found for SpringCart or ExpenseFlow,
// so no link is shown. Add `repo` when they are published. No live demos exist.
export const projects = [
  {
    name: "SpringCart",
    kind: "E-commerce backend",
    tags: ["Software Engineering", "Backend Development"],
    summary:
      "RESTful e-commerce backend covering the product catalog, cart management, user authentication and order processing.",
    goal: "A backend that handles shopping workflows with separate access for users and administrators.",
    how: "JWT authentication and role-based access control with Spring Security. Persistence layer built with Hibernate/JPA on MySQL, with pagination, input validation and centralized exception handling. Containerized with Docker and tested with Postman.",
    features: ["JWT authentication and RBAC", "Product catalog, cart and order processing", "Pagination and input validation", "Centralized exception handling"],
    tech: ["Java", "Spring Boot", "Spring Security", "Hibernate/JPA", "MySQL", "Docker"],
  },
  {
    name: "ExpenseFlow",
    kind: "Expense management backend",
    tags: ["Software Engineering", "Backend Development"],
    summary:
      "Layered Spring Boot services for managing transactions, categories and spending records, with reporting APIs.",
    goal: "Track spending and summarize it by month and category.",
    how: "Separated, maintainable service layers. REST APIs with category and date filtering, pagination, validation and centralized exception handling. Reporting endpoints built with Spring Data JPA and MySQL; containerized with Docker; tested with Postman.",
    features: ["Category and date filtering", "Pagination and validation", "Monthly spending summaries", "Category-wise analysis"],
    tech: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "Docker"],
  },
  {
    name: "AI Auditing Agent",
    kind: "Built at the 36-hour GDG Agentathon",
    tags: ["AI/ML", "Generative AI"],
    summary:
      "AI-powered auditing application that finds duplicate records, incorrect totals and missing data in PDF documents.",
    goal: "Automate key data validation tasks in document review.",
    how: "Multi-agent workflow using CrewAI and retrieval-augmented generation for document analysis and structured validation. Gemini 2.5 Flash is integrated through Flask REST APIs that process audit requests and generate structured reports.",
    features: ["Duplicate record detection", "Incorrect total detection", "Missing data validation", "Structured audit reports"],
    tech: ["Python", "CrewAI", "Gemini 2.5 Flash", "RAG", "Flask"],
    repo: "https://github.com/sriharieerla/Audit-Agent-gdg-agentathon",
  },
  {
    name: "IncidentMind",
    kind: "AI-powered incident analysis",
    tags: ["AI/ML", "Generative AI", "Backend Development"],
    summary:
      "Retrieves historical incident knowledge to generate troubleshooting and resolution recommendations.",
    goal: "Reuse previous incidents, root causes, fixes and failed attempts when a new incident appears.",
    how: "Observe, Recall, Reason, Recommend, Resolve, Retain workflow built on LLM reasoning, contextual retrieval and memory. Groq LLM APIs, FastAPI endpoints and SQLite behind a Streamlit interface.",
    features: ["Historical incident retrieval", "Context-aware memory", "Troubleshooting recommendations", "Incident management interface"],
    tech: ["Python", "Streamlit", "FastAPI", "Groq LLM", "Hindsight", "SQLite"],
    repo: "https://github.com/sriharieerla/IncidentMind",
  },
  {
    name: "Accident Prediction System",
    kind: "Machine learning with a Flask API",
    tags: ["Software Engineering", "AI/ML", "Backend Development"],
    summary:
      "Predicts road safety and accident severity from road and traffic data using KNN and SVM models.",
    goal: "Predict whether a road is safe or unsafe from collected road and traffic-related data.",
    how: "Data preprocessing, feature engineering and exploratory data analysis, then SVM and KNN classifiers. Flask REST APIs take user inputs, return predictions and store results in MySQL.",
    features: ["SVM and KNN classification", "Feature engineering and EDA", "Prediction REST APIs", "MySQL storage"],
    tech: ["Python", "Flask", "Scikit-learn", "SVM", "KNN", "MySQL"],
    repo: "https://github.com/sriharieerla/Accident-Prediction-Model",
  },
];

export const experience = {
  org: "Data Valley IT Solutions",
  role: "GEN-AI Student Intern",
  period: "January 2025 – April 2025",
  mode: "Remote",
  points: [
    "Built AI-powered applications in Python using Generative AI to automate business workflows.",
    "Developed LLM-based chatbots and question-answering systems with the Groq API and RAG.",
    "Implemented context-aware memory, prompt engineering and retrieval-augmented generation.",
  ],
};

export const education = {
  school: "Rise Krishna Sai Prakasam Groups of Institutions",
  place: "Ongole, Andhra Pradesh",
  degree: "B.Tech, Computer Science and Engineering (AI & ML)",
  period: "November 2021 – May 2025",
  gpa: "8.1 / 10.0",
  coursework: ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering", "Statistics", "Machine Learning", "Cloud Computing"],
};

// kind: "Certification" | "Course" | "Internship" | "Participation"
export const certificates = [
  { title: "Software Engineer Intern role certification", org: "HackerRank", date: "3 October 2025", kind: "Certification", img: "hackerrank-software-engineer.jpeg", alt: "HackerRank Software Engineer Intern certificate for Srihari Manikanta Eerla" },
  { title: "Software Engineering and Agile Software Development", org: "Infosys Springboard", date: "13 December 2023", kind: "Course", img: "infosys-software-engineering.jpeg", alt: "Infosys Springboard course completion certificate" },
  { title: "GEN AI & Prompt Engineering internship (360 hours)", org: "Datavalley India Pvt. Ltd.", date: "15 April 2025", kind: "Internship", img: "datavalley-genai-internship.jpeg", alt: "Datavalley internship certificate for GEN AI and Prompt Engineering" },
  { title: "Agentathon 2025 participation", org: "GDG Hyderabad", date: "20–21 December 2025", kind: "Participation", img: "agentathon-participation.jpeg", alt: "GDG Hyderabad Agentathon 2025 certificate of participation" },
  { title: "Guinness World Records title: most participants in an agentic AI hackathon", org: "Guinness World Records / GDG Hyderabad", date: "21 December 2025", kind: "Participation", img: "guinness-world-record.jpeg", alt: "Guinness World Records certificate for taking part in the agentic AI hackathon title" },
];

export const otherCertifications = [
  { title: "Java Spring Boot & Microservices", org: "Udemy" },
];

export const achievements = [
  "Built an AI-powered document auditing application in the 36-hour Google Developer Groups (GDG) Agentathon.",
  "Participated in the Google Cloud Run Marathon at Google Office, Hyderabad, focused on cloud application deployment.",
  "Conducted technical sessions on Java, DSA, SQL, backend development and cloud, guiding students through requirements, implementation, debugging, testing and presentation.",
  "Practice DSA and SQL problems regularly on LeetCode and other coding platforms.",
];

// NEEDS CONFIRMATION: carried over from the previous portfolio; not on the resumes.
export const websites = [
  { name: "Clarity Nest", type: "Wellness platform", url: "https://sachinbahuguna.claritynest.in/" },
  { name: "MindYatra", type: "Coaching site", url: "https://mindyatra.com/" },
  { name: "VidyaNex", type: "EdTech platform", url: "https://vidyanex.com/" },
  { name: "Digital Zala", type: "Digital agency site", url: "https://digitalzala.com/" },
];
