import React, { useState } from "react";
import fetchCharacters from "../Api/ApiMarvel.mjs";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);
    setCharacter(null);

    try {
      const results = await fetchCharacters(searchTerm);
      if (results.length === 0) {
        setError("Character not found!");
      } else {
        setCharacter(results[0]); // Toma el primer resultado
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
  {/* Encabezado */}
  <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-black text-center">
    Buscar Personajes
  </h2>
  
  {/* Instrucciones */}
  <p className="mb-4 text-gray-700 dark:text-gray-400 text-center max-w-lg py-16">
    Puedes Buscar cualquier personaje que quieras, ten en cuenta que debes de buscarlo en ingles y si quieres alguno en especial puedes buscarlo como: 'Spider-Man (Ultimate)', 'Spider-Woman (Charlotte Witter)'
  </p>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {character && (
          <img
            className="rounded-t-lg"
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
        )}
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {character ? character.name : "Buscar Personaje..."}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {character
              ? character.description || "No description available"
              : "Ingrese un nombre para comenzar"}
          </p>

          <form onSubmit={handleSearch} className="flex items-center max-w-sm mx-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
              placeholder="Search character name..."
              required
            />
            <button
              type="submit"
              className="p-2.5 ms-2 text-sm font-medium text-white bg-red-700 rounded-lg"
            >
              Search
            </button>
          </form>

          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
    
  );
};

export default Home;
