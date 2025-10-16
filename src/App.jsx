import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Proyectos from "./pages/Proyectos";
import Noticias from "./pages/Noticias";
import Contact from "./pages/Contact";

import "./css/home.css";
import perfilImg from "./assets/perfil.jpg";
import noticiasData from "./assets/noticias.json";

import { FaFacebook, FaGithub } from "react-icons/fa";

function App() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    setNoticias(noticiasData);
  }, []);

  return (
    <Router>
      <div className="app-container text-center" style={{ fontFamily: "Arial, sans-serif" }}>
        {/* 🌸 Header con menú */}
        <header
          className="py-4"
          style={{ backgroundColor: "#f8bbd0", color: "#880e4f" }}
        >
          <h1>Portafolio de Bárbara Araya</h1>
          <nav className="mt-3">
            <Link to="/" className="mx-3 text-decoration-none fw-bold" style={{ color: "#880e4f" }}>
              Inicio
            </Link>
            <Link to="/proyectos" className="mx-3 text-decoration-none fw-bold" style={{ color: "#880e4f" }}>
              Proyectos
            </Link>
            <Link to="/noticias" className="mx-3 text-decoration-none fw-bold" style={{ color: "#880e4f" }}>
              Noticias
            </Link>
            <Link to="/contacto" className="mx-3 text-decoration-none fw-bold" style={{ color: "#880e4f" }}>
              Contacto
            </Link>
          </nav>
        </header>

        {/* 🌸 Rutas */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* 🌸 Sección de bienvenida */}
                <section
                  className="intro-section py-5"
                  style={{ backgroundColor: "#fff0f6" }}
                >
                  <img
                    src={perfilImg}
                    alt="Foto de perfil de Bárbara Araya"
                    className="rounded-circle mb-3 shadow-lg"
                    width="200"
                    style={{
                      border: "5px solid #ff80b3",
                      objectFit: "cover",
                      height: "200px",
                    }}
                  />
                  <h1 className="fw-bold text-rosa mt-3">Bárbara Araya</h1>
                  <p
                    className="bio-text mt-3"
                    style={{ maxWidth: "700px", margin: "0 auto" }}
                  >
                    Estudio Ingeniería en Informática en Duoc UC y me apasiona el desarrollo web.
                  </p>

                  <div className="social-links d-flex justify-content-center gap-4 mt-4">
                    <a
                      href="https://www.facebook.com/tu.perfil"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#4267B2", fontSize: "2rem" }}
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="https://github.com/tu-usuario"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#333", fontSize: "2rem" }}
                    >
                      <FaGithub />
                    </a>
                  </div>
                </section>

                {/* 🌸 Proyectos */}
                <section className="projects-section py-5" style={{ backgroundColor: "#ffe6f0" }}>
                  <h2 className="text-rosa mb-4">Mis Proyectos</h2>
                  <Proyectos />
                </section>

                {/* 🌸 Noticias */}
                <section className="news-section py-5" style={{ backgroundColor: "#fff0f6" }}>
                  <h2 className="text-rosa mb-4">Noticias</h2>
                  <div className="container">
                    {noticias.map((n, index) => (
                      <div
                        key={index}
                        className="news-card p-3 mb-3 shadow-sm"
                        style={{
                          borderRadius: "10px",
                          backgroundColor: "#ffe6f0",
                        }}
                      >
                        <h4 className="text-rosa">{n.titulo}</h4>
                        <small className="text-muted">{n.fecha}</small>
                        <p>{n.contenido}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            }
          />

          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>

        {/* 🌸 Footer integrado */}
        <footer
          className="py-4 mt-5"
          style={{ backgroundColor: "#f8bbd0", color: "#880e4f" }}
        >
          <p className="mb-1 fw-bold">© 2025 Bárbara Araya</p>
          <p className="mb-0">Desarrollado con React y Bootstrap</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
