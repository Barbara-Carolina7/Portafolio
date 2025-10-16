import React from "react";
import noticiasData from "../data/noticias.json";

export default function Noticias() {
  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(120deg, #ffe6f0, #fff0f6)",
        minHeight: "80vh",
      }}
    >
      <div className="container">
        <h2
          className="text-center fw-bold mb-5"
          style={{
            color: "#d81b60",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontSize: "2.8rem",
          }}
        >
          Últimas Noticias
        </h2>

        <div className="row g-4">
          {noticiasData.map((noticia, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="card h-100 shadow-lg border-0"
                style={{
                  borderRadius: "25px",
                  overflow: "hidden",
                  background:
                    "linear-gradient(145deg, #ff80b3, #ff4da6)",
                  color: "#fff",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  position: "relative",
                }}
              >
                <div
                  className="card-body"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    padding: "2rem",
                  }}
                >
                  <h5 className="card-title fw-bold">{noticia.titulo}</h5>
                  <small className="d-block mb-2" style={{ fontStyle: "italic" }}>
                    {noticia.fecha}
                  </small>
                  <p className="card-text">{noticia.contenido}</p>
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    width: "60px",
                    height: "60px",
                    backgroundColor: "rgba(255,255,255,0.2)",
                    borderTopLeftRadius: "50%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animación hover */}
      <style>
        {`
          .card:hover {
            transform: translateY(-10px) scale(1.03);
            box-shadow: 0 15px 30px rgba(255, 0, 128, 0.3);
          }
          .card-title {
            text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
          }
          .card-text {
            line-height: 1.6;
          }
        `}
      </style>
    </section>
  );
}
