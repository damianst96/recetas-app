import { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Quote from '../Quote';

function AltoGuiso(){
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch('/api/alto-guiso')
            .then((response) => response.json())
            .then((data) => setRecipe(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            <Header />

            <main className="recipe">
            <h1 className="title">{recipe ? recipe.title : 'Loading...'}</h1>

            <div className="banner-main">
                <Zoom><img src="img/alto guiso.jpg" className="banner-image" width="100%" alt="loading..." /></Zoom>
            

            
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
                    
                    {recipe ? recipe.description.map(function(num, index) {
                        if (index === 1){
                            return <div>

                                {/* <p><i><b>{num}</b></i></p> */}

                                <Quote 
                                    title={num}
                                    author="Alto Guiso"
                                    source="Paso a Paso"
                                />

                                <div className="banner">
                                    <p><Zoom><img src="img/alto-guiso.jpg" width="100%" height="20%" alt="loading..." /></Zoom></p>
                                </div>

                            </div>
                        } else {
                            return <p>{num}</p>
                        }
                    }) : "Loading..."}
                    
                </div>
            </main>

            <Footer />
        </>
    );
}

export default AltoGuiso;