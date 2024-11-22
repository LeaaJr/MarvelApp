import React from "react";
import FndBanCard from '../Img/banncards.jpg'

const Comics = () => {
  return (
<div>
  {/* Banner */}
  <div className="flex w-full h-72 bg-black text-white">
    {/* Sección del texto (40%) */}
    <div className="w-2/5 p-5 flex items-center">
      <div>
        <h1 className="text-xl">On Sale 11/20</h1>
        <h2 className="my-2 text-lg">New Comics This Week</h2>
        <p className="my-1">Check out the newest Marvel comics coming out this week!</p>
        
        {/* Botón personalizado */}
        <button className="relative inline-block mt-4 px-6 py-2 bg-transparent text-white text-sm uppercase font-semibold tracking-wider">
          {/* Línea diagonal izquierda */}
          <span className="absolute top-0 left-0 w-6 h-full bg-transparent border-l-4 border-t-4 border-gold transform -skew-x-12"></span>
          {/* Texto del botón */}
          <span className="z-10 relative">Learn More</span>
          {/* Línea diagonal derecha */}
          <span className="absolute top-0 right-0 w-6 h-full bg-transparent border-r-4 border-b-4 border-gold transform skew-x-12"></span>
        </button>
      </div>
    </div>

        {/* Sección de la imagen (60%) */}
        <div className="w-3/5 relative">
          <img
            src={FndBanCard}
            alt="Comics banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="card-container flex justify-around relative -top-12 p-5">
        <div className="card bg-white border border-gray-300 rounded-lg p-4 w-1/3 shadow-md">
          <h3 className="m-0">Comic Title 1</h3>
          <p className="mt-2">Descripción del cómic 1.</p>
        </div>
        <div className="card bg-white border border-gray-300 rounded-lg p-4 w-1/3 shadow-md">
          <h3 className="m-0">Comic Title 2</h3>
          <p className="mt-2">Descripción del cómic 2.</p>
        </div>
        <div className="card bg-white border border-gray-300 rounded-lg p-4 w-1/3 shadow-md">
          <h3 className="m-0">Comic Title 3</h3>
          <p className="mt-2">Descripción del cómic 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Comics;
