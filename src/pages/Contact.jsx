import React, { useState } from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [errores, setErrores] = useState({});
  const [exito, setExito] = useState(false);

  const validar = () => {
    let nuevosErrores = {};
    if (!form.nombre.trim()) nuevosErrores.nombre = "El nombre es obligatorio.";

    const emailRegex = /^[\w.%+-]+@(duocuc\.cl|gmail\.com|profesor\.duoc\.cl)$/;
    if (!emailRegex.test(form.email))
      nuevosErrores.email =
        "Debe ser un correo válido de @duocuc.cl, @gmail.com o @profesor.duoc.cl";

    const telefonoRegex = /^\+569\d{8}$/;
    if (!telefonoRegex.test(form.telefono))
      nuevosErrores.telefono =
        "Debe ingresar un número válido (+569 seguido de 8 dígitos).";

    if (!form.mensaje.trim()) nuevosErrores.mensaje = "Por favor, deja un mensaje.";

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      setExito(true);
      setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
      setTimeout(() => setExito(false), 4000);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section
      className="py-5"
      style={{
        backgroundColor: "#f8f1f7",
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="container shadow-lg rounded overflow-hidden"
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "#fff",
        }}
      >
        {/* Info personal - ahora a la izquierda */}
        <div
          className="col-md-6 d-flex flex-column justify-content-center align-items-center p-5"
          style={{
            background: "linear-gradient(135deg, #ff80b3, #c2185b)",
            color: "#fff",
            flex: "1 1 50%",
            textAlign: "center",
          }}
        >
          <h3 className="fw-bold mb-3">Bárbara Araya</h3>
          <p className="mb-2">📧 ba.arayac@duocuc.cl</p>
          <p className="mb-4">📞 +56 9 962642158</p>

          <div className="d-flex gap-4 justify-content-center fs-3">
            <a
              href="https://www.facebook.com/barbara.carolina.295245"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff" }}
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/Barbara-Carolina7/Portafolio"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff" }}
            >
              <FaGithub />
            </a>
          </div>

          <p className="mt-4" style={{ fontSize: "0.9rem" }}>
            💡 Siempre lista para nuevos proyectos y colaboraciones
          </p>
        </div>

        {/* Formulario - ahora a la derecha */}
        <div className="col-md-6 p-5" style={{ flex: "1 1 50%" }}>
          <h2 className="text-center fw-bold text-rosa mb-4">Contáctame</h2>

          {exito && (
            <div className="alert alert-success text-center">
              ✅ ¡Mensaje enviado correctamente!
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Nombre completo</label>
              <input
                type="text"
                name="nombre"
                className="form-control"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Ingresa tu nombre"
              />
              {errores.nombre && (
                <small className="text-danger">{errores.nombre}</small>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Correo electrónico</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                placeholder="ejemplo@duocuc.cl"
              />
              {errores.email && (
                <small className="text-danger">{errores.email}</small>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Teléfono</label>
              <input
                type="tel"
                name="telefono"
                className="form-control"
                value={form.telefono}
                onChange={handleChange}
                placeholder="+569XXXXXXXX"
              />
              {errores.telefono && (
                <small className="text-danger">{errores.telefono}</small>
              )}
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Mensaje</label>
              <textarea
                name="mensaje"
                className="form-control"
                rows="4"
                value={form.mensaje}
                onChange={handleChange}
                placeholder="Escribe tu mensaje..."
              ></textarea>
              {errores.mensaje && (
                <small className="text-danger">{errores.mensaje}</small>
              )}
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-rosa px-5 py-2"
                style={{
                  borderRadius: "30px",
                  fontWeight: "500",
                  transition: "0.3s",
                }}
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
