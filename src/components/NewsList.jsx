import React from "react";
import news from "../data/news.json"; // Importa tus noticias desde JSON

function NewsList() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Últimas Noticias</h2>
      <div className="row">
        {news.map((item) => (
          <div className="col-md-4 mb-3" key={item.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{item.date}</h6>
                <p className="card-text">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsList;
