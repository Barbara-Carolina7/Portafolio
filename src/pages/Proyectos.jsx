import React from 'react';
import ProjectCard from '../components/ProjectCard';
import ecomarketImg from '../assets/ecomarket.png';
import digitalImg from '../assets/digital.png';
import piscinasImg from '../assets/piscinas.png';

export default function Proyectos() {
  const projects = [
    {
      img: ecomarketImg,
      title: 'Ecomarket',
      description: 'Sistema de gestión basado en microservicios Proyecto final sobre transformación digital empresarial.',
      tech: 'Spring Boot · Maven · JPA'
    },
    {
      img: digitalImg,
      title: 'Proyecto Digital',
      description: 'Proyecto Digital',
      tech: 'React · Bootstrap · LocalStorage'
    },
    {
      img: piscinasImg,
      title: 'Piscina Splash',
      description: 'Tienda digital para la venta y gestión de productos de piscinas, con un carrito de compras y diseño adaptable.',
      tech: 'React · Bootstrap · LocalStorage'
    }
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4"></h2>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      <footer className="text-center mt-5">
       
      </footer>
    </div>
  );
}
