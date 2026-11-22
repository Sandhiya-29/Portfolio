
import React from "react";
import "./Experience.css";

const experiences = [
  {
    date: "JAN 2026 — PRESENT",
    location: "FULL STACK DEVELOPMENT",
    role: "Full Stack Developer",
    company: "Cloudflake Infotech Pvt Ltd",
    description:
      "Developing responsive, scalable, and user-friendly web applications using React.js, JavaScript, and TypeScript. Building reusable UI components, managing application state with Redux and TanStack Query, and developing and integrating RESTful APIs using Node.js, Express.js, and .NET Web APIs. Working with MySQL and Microsoft SQL Server for database queries, data retrieval, and integration.",
    technologies: [
      "React.js",
      "TypeScript",
      "Redux",
      "REST API",
      "Axios",
      "JWT",
      "TanStack Query",
      "Node.js",
      "Express.js",
      ".NET Web API",
      "MySQL",
      "SQL Server",
    ],
  },
  {
    date: "JUN 2023 — DEC 2025",
    location: "FULL STACK DEVELOPMENT",
    role: "Full Stack Developer",
    company: "Merkat Intellekt Technologies",
    description:
      "Developed modern, responsive web applications using React.js, JavaScript, TypeScript, HTML, and CSS. Built reusable React components and interactive user interfaces to improve usability and maintainability. Integrated RESTful APIs using Axios, handled API requests and error management, and worked with Node.js and Express.js for backend functionality and JWT authentication. Performed database operations and integration using MySQL and MongoDB.",
    technologies: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Redux",
      "REST APIs",
      "Axios",
      "Node.js",
      "Express.js",
      "MySQL",
      "MongoDB",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <p className="experience-label">MY JOURNEY</p>

        <h2 className="experience-heading">
          Experience & <span>growth.</span>
        </h2>

        <p className="experience-intro">
          Over 3+ years of professional experience building
          modern web applications and delivering scalable
          frontend and backend solutions.
        </p>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-left">
                <p className="experience-date">{exp.date}</p>
                <p className="experience-location">
                  {exp.location}
                </p>
              </div>

              <div className="experience-right">
                <h3 className="experience-role">
                  {exp.role}
                </h3>

                <p className="experience-company">
                  {exp.company}
                </p>

                <p className="experience-description">
                  {exp.description}
                </p>

                <div className="experience-tech">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
