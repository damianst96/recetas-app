import { useState } from 'react';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

function RecipeSearch() {
  const [results, setResults] = useState([]);

  // Definir la función handleSearch que realiza la búsqueda en la API
  const handleSearch = async (query) => {
    try {
      const response = await fetch(`/api?title=${query}`);
      const data = await response.json();
      setResults(data.recipes); // Guardar los resultados en el estado
    } catch (error) {
      console.error('Error al buscar recetas:', error);
    }
  };

  return (
    <>
		{/* Pasar la función handleSearch como onSearch al componente SearchForm */}
		<SearchForm onSearch={handleSearch} />
		<SearchResult results={results} />
    </>
  );
}

export default RecipeSearch;
