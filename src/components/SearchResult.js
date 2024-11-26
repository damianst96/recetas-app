import Header from './Header';
import Footer from './Footer';
import Card from './RecipeCard';

function SearchResult({ results }) {
    return (
      <>
        <Header />
			<div className="cards">
			{results.length === 0 ? (
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