import React, { useState, useEffect } from 'react';
import { fetchComics } from '../Api/ApiMarvel.mjs';
import Carrousel from '../Component/Carousel.jsx';


const Movies = () => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null); // Estado para la card seleccionada
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 }); // Para el movimiento 3D del cursor

  useEffect(() => {
    const loadComics = async () => {
      try {
        const results = await fetchComics();
        setComics(results);
      } catch (error) {
        console.error('Error al cargar los cómics:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadComics();
  }, []);

  const handleCardClick = (id) => {
    if (selectedCard === id) {
      setSelectedCard(null); // Si la card ya está seleccionada, la deseleccionamos
    } else {
      setSelectedCard(id); // Seleccionamos la card
    }
  };

  const handleCloseCard = () => {
    setSelectedCard(null); // Cierra la card seleccionada
  };

  const handleMouseMove = (e, id) => {
    // Solo capturamos el movimiento del mouse si la card está seleccionada
    if (selectedCard === id) {
      const { clientX, clientY } = e;
      setCursorPos({
        x: (clientX / window.innerWidth) * 100, // Normalizamos la posición del cursor
        y: (clientY / window.innerHeight) * 100,
      });
    }
  };

  const getTransformStyle = (id) => {
    // Aplicar la rotación solo a la card seleccionada
    if (selectedCard === id) {
      return {
        transform: `rotateY(${cursorPos.x - 50}deg) rotateX(${-(cursorPos.y - 50)}deg)`,
      };
    }
    return {}; // No rotar si no está seleccionada
  };

  if (isLoading) {
    return <div className="text-center py-10">Cargando películas...</div>;
  }

  if (comics.length === 0) {
    return <div className="text-center py-10">No se encontraron cómics.</div>;
  }

  return (
    <div className='pb-16'>
        <Carrousel />
    <div className="relative">
      {/* Fondo oscuro cuando se selecciona una card */}
      {selectedCard !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50"></div>
      )}

      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {comics.map((comic) => (
          <div
            key={comic.id}
            onClick={() => handleCardClick(comic.id)}
            onMouseMove={(e) => handleMouseMove(e, comic.id)}
            className={`card bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-500 
              ${selectedCard === comic.id ? 'scale-95' : 'hover:scale-105'} 
              ${selectedCard === comic.id ? 'bg-black bg-opacity-50' : ''}`}
            style={{
              ...getTransformStyle(comic.id),
              transition: 'transform 0.2s ease-out',
              width: selectedCard === comic.id ? '90vw' : 'auto',
              height: selectedCard === comic.id ? '90vh' : 'auto',
              margin: selectedCard === comic.id ? 'auto' : '0', 
              zIndex: selectedCard === comic.id ? '999' : '1',
              position: selectedCard === comic.id ? 'fixed' : 'relative',
              top: selectedCard === comic.id ? '50%' : 'auto',
              left: selectedCard === comic.id ? '50%' : 'auto',
              transformOrigin: 'center',
              transform: selectedCard === comic.id
                ? `translate(-50%, -50%) scale(1.2) rotateY(${cursorPos.x - 50}deg) rotateX(${-(cursorPos.y - 50)}deg)`
                : 'none', 
            }}
          >
            {selectedCard === comic.id && (
              // Botón de cerrar (X)
              <button
                onClick={handleCloseCard}
                className="absolute top-4 right-4 text-white font-bold text-xl"
              >
                X
              </button>
            )}
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{comic.title}</h2>
              <p className="text-gray-600 text-sm">
                {comic.description ? comic.description.slice(0, 100) + '...' : 'Sin descripción'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Movies;

