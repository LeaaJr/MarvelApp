import FndBanCard from '../Img/banncards.jpg';
import '../Syles/Comics-elements.css';
import React, { useEffect, useState } from "react";
import { fetchComics } from "../Api/ApiMarvel.mjs";

const Comics = () => {
  const [comics, setComics] = useState([]);
  
  // Función para cargar los cómics
  const loadComics = async () => {
    try {
      const comicsData = await fetchComics('Spider');
      setComics(comicsData); // Establecemos los cómics obtenidos de la API
    } catch (error) {
      console.error("Error fetching comics:", error);
    }
  };

  useEffect(() => {
    loadComics(); // Cargar cómics al montar el componente
  }, []);

  return (
    <div className="py-60">
      {/* Banner */}
      <div className="flex w-full h-72 bg-black text-white">
        <div className="w-2/5 p-5 flex items-center">
          <div>
            <h1 className="text-xl">Comic Space  2024</h1>
            <h2 className="my-2 text-lg">New Comics API</h2>
            <p className="my-1">This is a comic space using a Marvel API !!</p>
            <button className="relative inline-block mt-4 px-6 py-2 bg-transparent text-white text-sm uppercase font-semibold tracking-wider">
              <span className="absolute top-0 left-0 w-6 h-full bg-transparent border-l-4 border-t-4 border-gold transform -skew-x-12"></span>
              <span className="z-10 relative">Learn More</span>
              <span className="absolute top-0 right-0 w-6 h-full bg-transparent border-r-4 border-b-4 border-gold transform skew-x-12"></span>
            </button>
          </div>
        </div>

        <div className="w-3/5 relative">
          <img
            src={FndBanCard}
            alt="Comics banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Cards de cómics */}
      <div className="card-container flex flex-wrap justify-around relative -top-12 p-5 ">
        {comics.map((comic, index) => (
          <div key={index} className="card bg-white border border-gray-300 rounded-lg p-4 w-1/3 shadow-md mb-4">
            <h3 className="m-0">{comic.title}</h3>
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
              className="w-full h-48 object-cover mt-2 mb-2"
            />
            <p className="mt-2">{comic.description || "No description available"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comics;
