import React, { useState } from "react";
import { fetchCharacters } from "../Api/ApiMarvel.mjs"; // Asegúrate de que la función fetchCharacters esté correctamente definida
import BackImg from '../Img/avengers-wallpaper-photo.jpg'; // Asegúrate de importar la imagen correctamente

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault(); // Evita que el formulario recargue la página
    setError(null); // Limpiar errores
    setCharacter(null); // Limpiar personaje actual

    if (!searchTerm.trim()) return; // Evita búsquedas vacías

    try {
      const results = await fetchCharacters(searchTerm);
      if (results.length === 0) {
        setError("Character not found!");
      } else {
        setCharacter(results[0]); // Tomar el primer personaje si hay resultados
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-center overflow-hidden dark:bg-gray-900">
      {/* Gradiente en la parte superior */}
      <div
        className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-white to-black"
        style={{ zIndex: 1 }}
      ></div>

      {/* Imagen de fondo debajo del gradiente */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${BackImg})`, zIndex: 0 }} // La imagen estará de fondo
      ></div>

      {/* Contenido de la página */}
      <div className="relative z-10 flex flex-col items-center py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        Find your favorite character!!
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
        You can search for any character, if you want a specific one you can enter as:  

        'Spider-Man (Ultimate)', 'Spider-Woman (Charlotte Witter)'
        </p>
      </div>

      {/* Card for Marvel Characters */}
      <div className="relative z-10 flex justify-center mt-12">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={handleSearch} className="p-5">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el estado con el valor del input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Search character..."
              required
            />
            <button
              type="submit"
              className="mt-2 w-full p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </form>

          {/* Character information */}
          {character && (
            <div className="p-5">
              <img
                className="rounded-t-lg w-full"
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
              />
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {character.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {character.description || "No description available"}
              </p>
            </div>
          )}

          {/* Error message */}
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Home;
