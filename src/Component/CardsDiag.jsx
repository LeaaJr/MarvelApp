import React from 'react';
import { Link } from 'react-router-dom';
import Spider from '../Img/Spider.png';
import Captain from '../Img/CaptainA.jpg';
import Hulk from '../Img/Hulk.webp'; 

const cards = [
  { 
    title: 'Spider', 
    image: Spider, 
    link: '#' 
  },
  { 
    title: 'Captain', 
    image: Captain, 
    link: '#' 
  },
  { 
    title: 'Hulk', 
    image: Hulk, 
    link: '#' 
  },
];

const CardsDiag = () => {
    return (
      <div className="container mx-auto py-24">
        <div className="flex flex-wrap justify-center gap-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative w-80 h-96 overflow-hidden rounded-lg shadow-xl group transition-transform duration-300"
              style={{
                clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 90%)",
              }}
            >
              <Link
                to={card.link}
                className="block w-full h-full relative transform transition-transform duration-300 group-hover:translate-y-[-10px] group-hover:scale-105 group-hover:rotate-2 group-hover:shadow-2xl"
              >
                {/* Imagen de fondo */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
  
                {/* Overlay con gradiente y título */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                    {card.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CardsDiag;
  
  