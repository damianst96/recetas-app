import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Card from './RecipeCard';

function Uruguay(){
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch("/api")
            .then((response) => response.json())
            .then((data) => setRecipe(data.recipes))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return(
        <>
        
        <Header />

        <main className='container'>
            <h1 className='main-title'>Recetas de Uruguay</h1>
        </main>
        
        <div className="cards">
            {recipe ? recipe.map(function(i){
				if(i.country === "Uruguay"){
					return <Card
						title={i.title}
						picture={i.image}
						route={i.link}
					/>
				} else {
					return null;
				}
            }) : "Loading..."}
        </div>
        

        <Footer />

        </>
    )
}

export default Uruguay;