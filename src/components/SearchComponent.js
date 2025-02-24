import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Card from './RecipeCard';
// import SearchForm from './SearchForm';

function SearchComponent(){
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

    return(
        <div>
            <Header />
                <main className='container'>
                    <h1 className='main-title'>Buscar Recetas</h1>
                </main>

                <input value={search} onChange={searcher} className="search-bar" type="search" placeholder="Buscar recetas" aria-label="Search"></input>

                <div className="cards">
                    {results ? results.map(function(i){
                    return <Card
                        title={i.title}
                        description={i.descriptionShort}
                        picture={i.image}
                        route={i.link}
                    />
                    }) : "Loading..."}
                </div>

            <Footer />
        </div>
    );

}

export default SearchComponent;