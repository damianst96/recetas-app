import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Card from './RecipeCard';

function UnitedStates(){
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
            <h1 className='main-title'>Recetas de Estados Unidos</h1>
        </main>
        
        <div className="cards">
            {recipe ? recipe.map(function(i){
				if(i.country === "Estados Unidos"){
					return <Card
						title={i.title}
						picture={i.image}
						route={i.link}
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

export default UnitedStates;