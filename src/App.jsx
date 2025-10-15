import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Importar componentes
import AboutMe from "./components/AboutMe";
import ProjectsList from "./components/ProjectsList";
import NewsList from "./components/NewsList";

function App() {
  return (
    <>
      {/* Encabezado */}
      <header className="bg-primary text-white text-center py-4">
        <h1>Mi Portafolio Personal</h1>
      </header>

      {/* Secciones */}
      <AboutMe />
      <ProjectsList />
      <NewsList />

      {/* Pie de página */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p>© 2025 - Desarrollado por Bárbara Carolina</p>
      </footer>
    </>
  );
}

export default App;
