import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-4">
      <div className="card card-custom p-4" style={{ borderRadius: 12, boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
        <h2 className="mb-3">Sobre mí</h2>
        <p style={{ lineHeight: "1.8" }}>
          Soy estudiante de Ingeniería en Informática en Duoc UC con una gran pasión por el desarrollo web y las nuevas tecnologías. 
          Me interesa especialmente el desarrollo front-end, la creación de interfaces intuitivas y accesibles, y la optimización de la experiencia del usuario. 
          Me esfuerzo por aplicar buenas prácticas de programación y mantenerme actualizada en frameworks modernos como React, así como en herramientas de diseño y bases de datos.
        </p>
        <ul style={{ lineHeight: "1.6" }}>
          <li><strong>Formación:</strong> Ingeniería en Informática — Duoc UC</li>
          <li><strong>Habilidades técnicas:</strong> HTML, CSS, JavaScript, React, Bootstrap</li>
          <li><strong>Intereses:</strong> Desarrollo web, UI/UX, accesibilidad, buenas prácticas de código</li>
          <li><strong>Objetivo profesional:</strong> Crear aplicaciones web útiles, intuitivas y visualmente atractivas, colaborando en proyectos significativos.</li>
        </ul>
      </div>
    </section>
  );
}
