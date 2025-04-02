import React from "react";
import "./Navbar.css";

function Navbar({ setSeccionActiva }) {
  return (
    <nav className="navbar">
      <button onClick={() => setSeccionActiva("about")}>Sobre mí</button>
      <button onClick={() => setSeccionActiva("experience")}>Experiencia</button>
      <button onClick={() => setSeccionActiva("skills")}>Skills</button>
      <button onClick={() => setSeccionActiva("projects")}>Proyectos</button> {/* nuevo botón */}
    </nav>
  );
}

export default Navbar;
