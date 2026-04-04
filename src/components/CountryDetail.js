import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Card from './RecipeCard';

function CountryDetail(props){
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch("https://recetas-app-server.onrender.com/api")
            .then((response) => response.json())
            .then((data) => setRecipe(data.recipes))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return(
        <>
        
        <Header />

        <main className='container'>
            <h1 className='main-title'>Recetas de {props.country}</h1>
        </main>
        
        <div className="cards">
            {recipe ? recipe.map(function(i){
				if(i.country === props.country){
					return <Card
						title={i.title}
						picture={i.image}
						route={`/recipe/${i.id}`}
					/>
				} else {
					return null;
				}
            }) : "No se encontraron recetas"}
        </div>
        

        <Footer />

        </>
    )
}

export default CountryDetail;