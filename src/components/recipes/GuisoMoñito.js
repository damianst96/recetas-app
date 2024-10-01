import { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function GuisoMoñito(){
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch('/api/guiso-monito')
            .then((response) => response.json())
            .then((data) => setRecipe(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return(
        <>
            <Header />

            <main className="recipe">
            <h1 className="title">{recipe ? recipe.title : 'Loading...'}</h1>

            <div className="banner-main">
                <Zoom><img src="img/guiso de fideos moñito.jpg" className="banner-image" width="100%" alt="loading..." /></Zoom>
            
                <div className="ingredients">
                    <h5>Ingredientes:</h5>
                    <ul>
                        {recipe ? recipe.ingredients.map(function(i) {
                            return <li>{i}</li>
                        }) : "Loading..."}
                    </ul>
                </div>
            </div>
                
                <div className="description">
                    {recipe ? recipe.description.map(function(i) {
                        return <p>{i}<br></br></p>
                    }) : "Loading..."}
                </div>
            </main>

            <Footer />
        </>
    );
}

export default GuisoMoñito;