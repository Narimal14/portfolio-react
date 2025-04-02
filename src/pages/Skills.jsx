import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "MySQL",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "Vite",
    "Express"
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
