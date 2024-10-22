import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Card from './RecipeCard';

function AllRecipes(){
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch("/api")
            .then((response) => response.json())
            .then((data) => setRecipe(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return(
        <>
        
        <Header />
        
        <div className="cards">
            {recipe ? recipe.recipes.map(function(i){
                return <Card
                    title={i.title}
                    picture={i.image}
                    route={i.link}
                />
            }) : "Loading..."}
        </div>
        

        <Footer />
        </>
    )
}

export default AllRecipes;