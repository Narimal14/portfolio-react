import React from "react";
import "./Projects.css";

function Projects() {
  const proyectos = [
    {
      nombre: "Todo App",
      descripcion: "Aplicación simple para agregar, editar y eliminar tareas.",
      tecnologias: ["React", "CSS", "JavaScript"],
      github: "https://github.com/Narimal14/Todo-App", // cambiá si el link es otro
      demo: "" // opcional si hiciste deploy
    },
    {
      nombre: "Task List",
      descripcion: "Lista de tareas con interfaz intuitiva y funcionalidades básicas.",
      tecnologias: ["React", "HTML", "CSS"],
      github: "https://github.com/Narimal14/tasklist", // cambiá si es otro
      demo: ""
    }
  ];

  return (
    <section className="projects">
      <h2>Proyectos</h2>
      <div className="project-grid">
        {proyectos.map((proyecto, index) => (
          <div key={index} className="project-card">
            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.descripcion}</p>
            <div className="tech-list">
              {proyecto.tecnologias.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={proyecto.github} target="_blank">Ver en GitHub</a>
              {proyecto.demo && (
                <a href={proyecto.demo} target="_blank">Demo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
