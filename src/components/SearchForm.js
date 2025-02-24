import { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import SearchResult from './SearchResult';
// import Card from './RecipeCard';

function SearchForm() {
  const [recipes, setRecipes] = useState([]);
      const [search, setSearch] = useState("");
  
      const showData = async function(id){
          const response = await fetch("/api");
          const data = await response.json();
          setRecipes(data.recipes);
      }
  
      const searcher = (e) => {
          setSearch(e.target.value);
      }
  
      const results = !search ? recipes : recipes.filter((data)=> data.title.toLowerCase().includes(search.toLowerCase()));
  
      useEffect(() => {
          showData();
      }, []);

  return (
    <Form className="d-flex">
      <input value={search} onChange={searcher} className="search-bar" type="search" placeholder="Buscar recetas" aria-label="Search"></input>

      {/* <Button type="submit" variant="outline-success" className="search" href={`/search`}>
        Buscar
      </Button> */}
    </Form>
  );
}

export default SearchForm;