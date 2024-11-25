import React, { useState, useEffect } from "react";
import moviesbg1 from '../Img/moviesbg1.jpg';
import moviesbg2 from '../Img/moviesbg2.jpg';
import moviesbg3 from '../Img/moviesbg3.webp';

const Carousel = () => {
  const images = [
    moviesbg1,
    moviesbg2,
    moviesbg3
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambia automáticamente las imágenes cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia cada 3000ms (3 segundos)

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [images.length]);

  return (
    <div id="custom-controls-gallery" className="relative w-full">
      <div className="relative w-full h-[400px] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}  

export default Carousel;
