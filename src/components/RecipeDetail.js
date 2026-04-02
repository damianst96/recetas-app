import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useParams } from 'react-router-dom';

function RecipeDetail(){
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    // useEffect(() => {
    //     fetch(`https://recetas-app-server.onrender.com/api/recipe/${id}`)
    //         .then((response) => response.json())
    //         .then(data => {
    //             const recetaFiltrada = data.recipes.find(r => r.id === Number(props.id));  // Filtras por el ID que te interesa
    //             setRecipe(recetaFiltrada);
    //         })
    //         .catch((error) => console.error('Error fetching data:', error));
    // }, [props.id]);

    useEffect(() => {
        fetch(`https://recetas-app-server.onrender.com/api/recipe/${id}`)
            .then((response) => response.json())
            .then(data => setRecipe(data))
            .catch((error) => console.error('Error:', error));
    }, [id]);

    if (!recipe) return <p>Cargando receta...</p>

    return(
        <>
            <Header />

            <main className="recipe">
                <h1 className="title">{recipe ? recipe.title : 'Loading...'}</h1>
                    
                <div className="banner-main">
                    <Zoom><img src={recipe ? recipe.image : "Loading..."} className="banner-image" width="100%" alt="loading..." /></Zoom>
                                
                    <div className="ingredients">
                        <h5>Ingredientes:</h5>
                        <ul>
                            {recipe ? recipe.ingredients && recipe.ingredients.map(function(i) {
                                return <li>{i}</li>
                            }) : "Loading..."}
                        </ul>
                    </div>
                </div>
                                    
                <div className="description">
                    {recipe ? recipe.description && recipe.description.map(function(i) {
                        return <p>{i}<br></br></p>
                    }) : "Loading..."}

                    <div className="banner">
                        <div><Zoom><img src={recipe ? recipe.altImage : "Loading..."} width="100%" height="20%" alt="loading..." /></Zoom></div>
                    </div>
                </div>

            </main>

            <Footer />
        </>
    );
}

export default RecipeDetail;