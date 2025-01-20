import Header from './Header';
import Footer from './Footer';
import Card from './RecipeCard';
import { useState } from 'react';

function SearchResult({ results }) {
	const [resultados, setResultados] = useState([]);
	
	const handleSearch = async (query) => {
		try {
		  const response = await fetch(`/api?title=${query}`);
		  const data = await response.json();
		  setResultados(data); // Guarda los resultados en el estado
		} catch (error) {
		  console.error('Error al buscar: ', error);
		}
	};
	
    return (
      <>
        <Header onSearch={handleSearch} />
			<div className="cards">
				{resultados.length === 0 ? (
				  <p>No se encontraron recetas</p>
				) : (
					results.map((recipe) => (
					  <Card 
						title={recipe.title}
						picture={recipe.image}
						route={recipe.link}
					  />
					))
				)}
			</div>
        <Footer />
      </>
    );
  }

// function SearchResult() {
    
  
//     return (
//       <>
//         <Header />
//         <main className="recipe">
    
//             <ul>
//                 {resultados.map((i) => {
//                     return <Card
//                         title={i.title}
//                         picture={i.image}
//                         route={i.link}
//                     />
//                 })}
//             </ul>
            
//         </main>

        

//         <Footer />
//       </>
//     );
// }

export default SearchResult;