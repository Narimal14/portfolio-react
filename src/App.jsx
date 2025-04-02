import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";


function App() {
  const [seccionActiva, setSeccionActiva] = useState("about");

  return (
    <div>
      <Navbar setSeccionActiva={setSeccionActiva} />
      <Header />

      {seccionActiva === "about" && <About />}
      {seccionActiva === "experience" && <Experience />}
      {seccionActiva === "skills" && <Skills />}
      {seccionActiva === "projects" && <Projects />}
    </div>
  );
}

export default App;
