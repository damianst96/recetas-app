import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Card from './components/RecipeCard';
import Footer from './components/Footer';

function Home() {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setRecipe(data.recipes))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>

    <Header />

    <div className="cards">
        {recipe ? recipe.map(function(i){
          return <Card
            title={i.title}
            description={i.descriptionShort}
            picture={i.image}
            route={i.link}
          />
        }) : "Loading..."}
    </div>

      <Footer />

    </>
  );
}

export default Home;
