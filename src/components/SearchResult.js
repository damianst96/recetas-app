import Header from './Header';
import Footer from './Footer';
import Card from './RecipeCard';

function SearchResult({ results }) {
    return (
      <div>
        <Header />
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
        <Footer />
      </div>
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