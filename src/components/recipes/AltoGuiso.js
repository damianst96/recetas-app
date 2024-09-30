import { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import '../../styles.css';

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
                <img src="img/alto guiso.jpg" className="banner-image" width="100%" alt="loading..." />
            </div>

            
                <div className="ingredients">
                    <h5>Ingredientes:</h5>
                    <ul>
                        {recipe ? recipe.ingredients.map(function(i) {
                            return <li>{i}</li>
                        }) : "Loading..."}
                    </ul>
                </div>

                <div className="description">
                    
                    {recipe ? recipe.description.map(function(num, index) {
                        if (index === 1){
                            return <div>

                                <p><i><b>{num}</b></i></p>

                                <div className="banner">
                                    <p><img src="img/alto-guiso.jpg" width="100%" height="20%" alt="loading..." /></p>
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