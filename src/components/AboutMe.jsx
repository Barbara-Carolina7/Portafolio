import React from "react";
import perfil from "../assets/perfil.jpg"; // asegúrate de tener una foto llamada perfil.jpg en /src/assets

function AboutMe() {
  return (
    <section className="container my-5">
      <div className="row align-items-center">
        {/* Imagen */}
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src={perfil}
            alt="Foto de Bárbara Carolina"
            className="img-fluid rounded-circle shadow"
            style={{ width: "250px", height: "250px", objectFit: "cover" }}
          />
        </div>

        {/* Información personal */}
        <div className="col-md-8">
          <h2 className="mb-3">Sobre mí</h2>
          <p>
            ¡Hola! Soy <strong>Bárbara Carolina</strong>, estudiante de Desarrollo Fullstack.
            Me apasiona crear aplicaciones web modernas, responsivas y con código limpio.
          </p>
          <p>
            Este portafolio muestra los proyectos que he desarrollado utilizando
            <strong> React, JavaScript y Bootstrap</strong>, integrando pruebas unitarias
            con Jasmine y Karma.
          </p>
          <p>
            Mi objetivo es seguir mejorando como desarrolladora, explorando nuevas
            tecnologías y construyendo soluciones digitales que marquen la diferencia.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
