import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ProjectCard({ img, title, description, tech }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="card h-100" style={{ borderRadius: 12, overflow: 'hidden' }}>
        {img && (
          <img
            src={img}
            alt={title}
            className="card-img-top"
            style={{ height: 160, width: '100%', objectFit: 'cover' }}
          />
        )}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text" style={{ fontSize: 14 }}>{description}</p>
        </div>
        <div className="card-footer" style={{ background: 'transparent', borderTop: 'none' }}>
          {tech && <small className="text-muted">{tech}</small>}
          <div className="mt-2">
            <Button
              variant="primary"
              onClick={handleShow}
              style={{ borderRadius: 8 }}
            >
              Abrir
            </Button>
          </div>
        </div>
      </div>

      {/* Modal tipo canvas */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {img && <img src={img} alt={title} className="img-fluid mb-3" />}
          <p>{description}</p>
          <p><strong>Tecnologías:</strong> {tech}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
