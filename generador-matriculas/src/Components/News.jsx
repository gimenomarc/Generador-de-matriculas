// News.js
import React, { useState, useEffect } from "react";

const News = ({ darkMode }) => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await fetch("http://localhost:3001/news");
      const data = await response.json();

      // Asegúrate de que "news" es un array dentro del objeto de respuesta
      if (Array.isArray(data.news)) {
        setNews(data.news);
      } else {
        console.error(
          'El formato de respuesta no tiene un array "news":',
          data,
        );
      }
    } catch (error) {
      console.error("Error al obtener noticias:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div>
      <h1
        className={`text-5xl font-bold text-center my-2 ${
          darkMode ? "text-gray-200" : "text-gray-800"
        }`}
      >
        News Section
      </h1>
      <div
        className={`p-8 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
      >
        {news.map((article, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-xl font-bold">{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              Leer más
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
