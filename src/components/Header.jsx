import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" bg="light" className="shadow-sm px-4">
      <Navbar.Brand
        as={Link}
        to="/"
        className="fw-bold"
        style={{ color: "#c2185b" }}
      >
        Portafolio
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto align-items-center">
          {/* 🔗 Enlaces internos (usan React Router) */}
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/proyectos">Proyectos</Nav.Link>
          <Nav.Link as={Link} to="/noticias">Noticias</Nav.Link>
          <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;


