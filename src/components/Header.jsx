import React from "react";
import "./Header.css";
import facuImage from "../assets/imagen.jpg"; // Ajustá el nombre si cambió

function Header() {
  return (
    <header className="header">
      <img src={facuImage} alt="Facundo Medina" className="profile-img" />
      <h1>Facundo Medina</h1>
      <p>Desarrollador Full Stack Junior</p>
      <div className="links">
        <a href="https://github.com/Narimal14" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/facundo-manuel-medina" target="_blank">LinkedIn</a>
      </div>
    </header>
  );
}

export default Header;
