import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import RecipeSearch from './RecipeSearch';
import SearchResult from './SearchResult';

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch && typeof onSearch === 'function') {
      onSearch(query);  // Llama a la función pasada desde RecipeSearch
    }
  };

  return (
    <Form className="d-flex" onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Buscar recetas"
        className="me-2"
        aria-label="Search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <Button type="submit" variant="outline-success" className="search" href={`/search?title=${query}`}>
        Buscar
      </Button>
    </Form>
  );
}

export default SearchForm;