import React from "react";
import projects from "../data/projects.json"; // Importa los datos desde tu archivo JSON

function ProjectsList() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Mis Proyectos</h2>
      <div className="row">
        {projects.map((project) => (
          <div className="col-md-4 mb-3" key={project.id}>
            <div className="card h-100 shadow-sm">
              {/* Imagen del proyecto */}
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
              />

              <div className="card-body d-flex flex-column">
                {/* Título */}
                <h5 className="card-title">{project.title}</h5>

                {/* Descripción */}
                <p className="card-text flex-grow-1">{project.description}</p>

                {/* Tecnologías */}
                <p>
                  <strong>Tecnologías:</strong> {project.technologies.join(", ")}
                </p>

                {/* Enlace */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-auto"
                >
                  Ver Proyecto
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsList;
