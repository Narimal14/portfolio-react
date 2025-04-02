import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <section className="experience">
      <h2>Experiencia Profesional</h2>

      <div className="job">
        <h3>Runic SAS – Desarrollador Full Stack Junior (Part-time)</h3>
        <p className="date">Feb 2024 - Mar 2025</p>
        <ul>
          <li>Desarrollo de una app de gestión de tareas con React, Node.js y MongoDB.</li>
          <li>Implementación de rutas, componentes reutilizables y consumo de API REST.</li>
          <li>Despliegue en Vercel (frontend) y Render (backend).</li>
        </ul>
      </div>

      <div className="job">
        <h3>Flet8 SRL – Responsable de Comercio Exterior</h3>
        <p className="date">Ene 2021 - Feb 2023</p>
        <ul>
          <li>Coordinación de importaciones/exportaciones y supervisión de procesos logísticos.</li>
          <li>Negociación con proveedores internacionales y control presupuestario.</li>
        </ul>
      </div>

      <div className="job">
        <h3>Denso Manufacturing – Analista de Finanzas y Comercio Exterior</h3>
        <p className="date">May 2023 - Mar 2024</p>
        <ul>
          <li>Elaboración de presupuestos y análisis de KPIs financieros.</li>
          <li>Gestión documental y cumplimiento normativo internacional.</li>
        </ul>
      </div>

      <div className="job">
        <h3>Universo Consultores Aduaneros – Responsable de Operaciones</h3>
        <p className="date">Feb 2010 - Ene 2021</p>
        <ul>
          <li>Supervisión del equipo operativo y mejora de procesos logísticos.</li>
          <li>Atención al cliente, pagos internacionales y trámites aduaneros.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;