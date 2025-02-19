import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function MenuDetail(props){
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        fetch("/api")
            .then((response) => response.json())
            .then(data => {
                const menuFiltrado = data.recipes.find(r => r === data.recipes[props.id]);  // Filtras por el ID que te interesa
                setRecipe(menuFiltrado);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [props.id]);

    return(
        <>
            <Header />

            <main className="recipe">
                <h1 className="title">{recipe ? recipe.title : 'Loading...'}</h1>
                    
                <div className="banner-main">
                    <Zoom><img src={recipe ? recipe.image : "Loading..."} className="banner-image" width="100%" alt="loading..." /></Zoom>
                </div>
                                    
                <div className="description">
                    {recipe ? recipe.description && recipe.description.map(function(i) {
                        return <p>{i}<br></br></p>
                    }) : "Loading..."}
                </div>

            </main>

            <Footer />
        </>
    );
}

export default MenuDetail;