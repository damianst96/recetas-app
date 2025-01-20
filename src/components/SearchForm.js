import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import SearchResult from './SearchResult';

function SearchForm({ onSearch }) {
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
    <Form className="d-flex" onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Buscar recetas"
        className="me-2"
        aria-label="Search"
        onChange={(e) => setResults(e.target.value)}
        value={results}
      />
      <Button type="submit" variant="outline-success" className="search" href={`/search?title=${results}`}>
        Buscar
      </Button>
    </Form>
  );
}

export default SearchForm;