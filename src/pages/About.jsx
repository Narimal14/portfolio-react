import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <h2>Sobre mí</h2>
      <p>
        Soy un Desarrollador Full Stack Junior con formación técnica y una base sólida en
        Comercio Exterior. Me especializo en construir aplicaciones web modernas con
        tecnologías como <strong>React</strong>, <strong>Node.js</strong> y <strong>MongoDB</strong>.
      </p>
      <p>
        Mi primera experiencia en desarrollo fue en <strong>Runic SAS</strong> (trabajo part-time),
        donde participé en el desarrollo de un sistema de gestión de tareas utilizando
        <strong> React</strong> para el frontend y <strong>Node.js + Express</strong> para el backend,
        con base de datos en <strong>MongoDB</strong> y despliegue en <strong>Vercel</strong> y <strong>Render</strong>.
      </p>
      <p>
        Me gusta trabajar en equipo, optimizar procesos y aprender nuevas herramientas
        que me permitan crear soluciones tecnológicas de calidad.
      </p>
    </section>
  );
}

export default About; // 👈 esta línea es la clave
