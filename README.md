
# WAMD - TD/TP 1: Responsive Portfolio

**Institution:** Higher National School of Advanced Technologies (ENSTA)  
**Program:** Computer Science (AI Specialty) - Semester 1, 2026  
**Module:** WAMD (Web Application Modeling & Development)  
**Instructor:** Dr. S. Senhadji  

---

## Student Information

- **Name:** Chaima Dokkar
- **Level:** 4th Year Engineering Student (Cycle Supérieur - Artificial Intelligence)
- **Email:** ac.dokkar@ensta.edu.dz
- **GitHub:** [https://github.com/chaimadk00](https://github.com/chaimadk00)
- **Live Demo:** [https://chaimadk00.github.io/portfolio/](https://chaimadk00.github.io/portfolio/) *(if deployed)*

---

## Project Overview

This repository contains my personal portfolio website built for TP 1 of the WAMD course. The goal of this assignment is to design and develop a responsive website from scratch using pure HTML5, CSS3, and vanilla JavaScript without relying on external frontend frameworks.

The portfolio introduces my profile, background at ENSTA, technical skill set, recent web and AI projects, academic timeline, and contact information.

---

## Technologies Used

- **HTML5:** Semantic tags (`header`, `nav`, `main`, `section`, `article`, `address`, `time`, `footer`).
- **CSS3:** Flexbox, CSS Grid, custom CSS variables, media queries for responsive breakpoints, keyframe animations, and transitions.
- **JavaScript (ES6):** Vanilla DOM manipulation, event listeners (mobile navigation toggle, resize handling), and `IntersectionObserver` for scroll-triggered animations.
- **Tools:** Visual Studio Code, Git, GitHub, and browser DevTools for debugging and testing responsiveness across device sizes.

---

## Implemented Features

### 1. Navigation & Header
- Sticky navbar with blur backdrop that remains accessible during scrolling.
- Real-time scroll indicator bar along the bottom of the header showing page read progress.
- Active link highlighting (scrollspy) based on the section currently visible on screen.
- Collapsible hamburger navigation menu for mobile screens (closes automatically on link click or Escape key).

### 2. Hero Section
- Dynamic interactive background grid that generates tiles based on screen dimensions and highlights tiles on hover.
- Full-screen height (`100dvh`) adapted for both desktop and mobile devices.
- Introduction with quick access call-to-action buttons (view projects / contact) and social links.

### 3. About Me
- Summary of my background at ENSTA (transition from 2-year preparatory classes to the AI engineering cycle).
- Key stats and a direct link to download my CV (`files/cv.pdf`).

### 4. Skills & Technologies
- Core programming skill bars (Python, C, Java, JavaScript/TypeScript, SQL, HTML/CSS) that animate into place when the section is reached.
- Categorized badges for:
  - **AI & Data Science:** ML, Pandas, NumPy, LLM Agents, RAG, Algorithms.
  - **Web Development:** React, Next.js, tRPC, PostgreSQL, Redis, Tailwind CSS.
  - **Tools & Workflow:** Git, GitHub, Jira, VS Code, Postman, Linux CLI.

### 5. Projects
- Project showcase cards featuring descriptions, tech stacks, live deployment links, and GitHub repositories:
  - **ShopHub:** An Arabic RTL marketplace platform built with Next.js, React, tRPC, Redis, and PostgreSQL.
  - **Strwebery:** E-commerce platform for an Algerian modest fashion brand with order tracking and an admin dashboard.

### 6. Education & Experience
- Chronological timeline covering:
  - Preparatory Classes in CS & STEM at ENSTA (2023 - 2025).
  - Superior Engineering Cycle in CS / Artificial Intelligence at ENSTA (2025 - Present).
  - Technical Internship at the Algerian Space Agency (ASAL).

### 7. Contact Section
- Contact card listing direct communication channels: institutional email, phone number, location, GitHub, and LinkedIn profiles.

### 8. Responsive Design & Smooth Transitions
- Built to display properly on desktop, tablet, and mobile devices using CSS media queries and relative units (`clamp()`, `rem`, `%`).
- Smooth scrolling behavior across all anchor links.
- Subtle fade-in animations on sections using `IntersectionObserver`.
- Accessibility considerations: high-contrast text, visible focus outlines, and `prefers-reduced-motion` support.

---

## Project Structure
portfolio/
├── index.html          # Main HTML document
├── README.md           # Project documentation
├── css/
│   └── style.css       # Styles, layout, variables, and media queries
├── js/
│   └── script.js       # Navigation, tile grid logic, and scroll observers
├── images/             # Profile illustration and project screenshots
│   ├── pic3. Vector illustration Isolated On White_
│   ├── image.png
│   └── pic2.png
└── files/
    └── cv.pdf          # Curriculum Vitae