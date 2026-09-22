// ─────────────────────────────────────────────────────────────────────────
// All the content on the site lives here. Edit this file to update your
// resume details, email, and project links — no need to touch components.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Lokesh Kumar",
  role: "Java Backend & Full Stack Developer",
  email: "lokeshkumar07012914@gmail.com",
  location: "Andhra Pradesh, India",
  phone: "+91 7382931195",
  resumeFile: "/Lokesh_Kumar_Resume.pdf", // put your PDF in /public and update this path
  resumeDownloadName: "Lokesh_Kumar_Resume.pdf",
  status: "Available for opportunities",
  heroTitle: "I build secure backends and the interfaces on top of them.",
  heroLede:
    "I'm <b>Lokesh Kumar</b>, a Computer Science student and Java full stack developer. I write Spring Boot APIs with JWT and role-based access, and pair them with clean React front ends.",
};

export const socials = {
  github: "https://github.com/lokeshkumar0729",
  linkedin: "https://www.linkedin.com/in/lokesh-kumar0729/",
  leetcode: "https://leetcode.com/u/Lokesh_229/",
};

// The featured project (shown large, at the top of Projects)
export const featuredProject = {
  tag: "In progress",
  name: "Flash Sale",
  imageAlt:
    "Flash Sale interface: a product card with a discount badge, countdown timer and add to cart button, next to a small admin dashboard chart",
  description:
    "A full-stack e-commerce platform for time-limited sales, with a customer storefront and an admin dashboard. I'm building the Spring Boot backend now.",
  points: [
    "JWT authentication with refresh tokens, BCrypt password hashing, and Customer and Admin roles.",
    "MySQL schema for users, products, orders, cart, and wishlist, using Spring Data JPA and Hibernate.",
    "React and Tailwind CSS front end with cart, wishlist, checkout, and an admin dashboard, live on Vercel.",
  ],
  stack: "Java, Spring Boot, Spring Security, MySQL, React, Tailwind CSS",
  liveDemo: "https://flash-sale-gamma.vercel.app/login",
  source: "https://github.com/lokeshkumar0729/flash-Sale",
};

// The remaining projects (shown as a compact list)
export const projects = [
  {
    name: "Campus Placement Management System",
    description:
      "Spring Boot APIs that automate recruitment workflows, company job postings, and student application tracking, secured with stateless JWT sessions, role-based authorization, and OAuth2.",
    stack: "Java, Spring Boot, Spring Security, JWT, OAuth2, JPA and Hibernate, MySQL",
    liveDemo: null, // add a link here once you deploy it
    source: null, // add your GitHub repo link here
    thumb: "placement",
  },
  {
    name: "Employee Management System",
    description:
      "A responsive single-page app for managing employee records and a directory that updates as you add, edit, or remove people. Data persists in the browser with localStorage, so it needs no server.",
    stack: "React, JavaScript, Tailwind CSS, HTML5",
    liveDemo: "https://employeemanagement-kappa-three.vercel.app/",
    source: "https://github.com/lokeshkumar0729/Work_and_Projects/tree/main/Emp_Management_System",
    thumb: "employee",
  },
  {
    name: "Data Structures and Algorithms",
    description:
      "140+ LeetCode problems solved in Java across arrays, strings, linked lists, trees, and dynamic programming. Every solution documents its time and space complexity.",
    stack: "Java, Git",
    liveDemo: null,
    liveDemoLabel: null,
    source: "https://github.com/lokeshkumar0729/DSA_Practice",
    extraLink: { label: "LeetCode", href: "https://leetcode.com/u/Lokesh_229/" },
    thumb: "dsa",
  },
];

export const skills = [
  {
    group: "Backend and security",
    items: ["Spring Boot", "REST APIs", "Spring Security", "JWT", "OAuth2", "Spring Data JPA and Hibernate", "Maven"],
    bold: ["Spring Boot", "REST APIs", "Spring Security", "JWT"],
  },
  {
    group: "Languages",
    items: ["Java", "Python", "C", "JavaScript (ES6+)", "SQL"],
    bold: ["Java"],
  },
  {
    group: "Frontend and web",
    items: ["React", "Tailwind CSS", "HTML5", "CSS3", "Web Storage API"],
    bold: ["React", "Tailwind CSS"],
  },
  {
    group: "Computer science",
    items: ["Data structures and algorithms", "Object-oriented programming", "Database management systems"],
    bold: ["Data structures and algorithms"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman"],
    bold: [],
  },
];

export const experience = [
  {
    when: "April to June 2025",
    title: "Python Full Stack Developer Intern",
    org: "AICTE, EduSkills. Remote, India",
    description:
      "A 10-week internship building full-stack modules with Python, SQL scripts, and RESTful routing. I wrote client-side and server-side form validation and relational queries to manage backend data.",
    badge: "Rated Outstanding (Grade O)",
    current: true,
  },
  {
    when: "2023 to present",
    title: "B.Tech in Computer Science and Engineering",
    org: "Raghu Engineering College, Visakhapatnam",
    description:
      "CGPA 8.2 out of 10, with coursework in data structures, algorithms, object-oriented programming, and database systems.",
    badge: null,
    current: false,
  },
];

export const certifications = [
  { title: "Java Programming and Data Structures", issuer: "ScholarHat" },
  { title: "GenAI for Professionals", issuer: "Udemy" },
  { title: "Principles of Generative AI", issuer: "Infosys Springboard" },
];

export const about = {
  paragraphs: [
    "I like the part of software you don't see: how a request is authenticated, which role may do what, and how data stays consistent.",
    "In my Campus Placement system I built the Spring Boot APIs, JWT sessions, and role-based authorization myself. I'm doing the same for Flash Sale's backend now. I also build the interfaces on top, using React and Tailwind CSS to keep them responsive and easy to use.",
    "I practice data structures and algorithms in Java and write down the time and space complexity of every solution, because it makes me a more careful engineer.",
  ],
  facts: [
    { label: "Based in", value: profile.location },
    { label: "Main stack", value: "Java, Spring Boot, React" },
    { label: "Practice", value: "140+ LeetCode problems in Java" },
    { label: "Looking for", value: "Backend and full-stack opportunities" },
  ],
};

// The hero's interactive API console: who gets into which endpoint.
export const apiConsole = {
  note:
    "Illustrative responses from a JWT and role-based access flow like the one in my Campus Placement project. Pick a caller to see who gets in.",
  callers: {
    student: {
      label: "Student",
      authHeader: "Bearer eyJhbGciOi\u2026",
      role: "STUDENT",
      rows: [
        { method: "GET", path: "/api/jobs", status: 200, text: "OK" },
        { method: "POST", path: "/api/applications", status: 201, text: "Created" },
        { method: "GET", path: "/api/applications/all", status: 403, text: "Forbidden" },
        { method: "POST", path: "/api/jobs", status: 403, text: "Forbidden" },
      ],
    },
    admin: {
      label: "Admin",
      authHeader: "Bearer eyJhbGciOi\u2026",
      role: "ADMIN",
      rows: [
        { method: "GET", path: "/api/jobs", status: 200, text: "OK" },
        { method: "POST", path: "/api/jobs", status: 201, text: "Created" },
        { method: "GET", path: "/api/applications/all", status: 200, text: "OK" },
        { method: "DELETE", path: "/api/jobs/12", status: 204, text: "No Content" },
      ],
    },
    anon: {
      label: "No token",
      authHeader: "(none)",
      role: "anonymous",
      rows: [
        { method: "GET", path: "/api/jobs", status: 401, text: "Unauthorized" },
        { method: "POST", path: "/api/applications", status: 401, text: "Unauthorized" },
        { method: "GET", path: "/api/applications/all", status: 401, text: "Unauthorized" },
        { method: "POST", path: "/api/jobs", status: 401, text: "Unauthorized" },
      ],
    },
  },
};
