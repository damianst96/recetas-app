import Header from './Header';
import Footer from './Footer';

function RecipeDetail(props){
    return(
        <>
            <Header />
            <div className="banner">
                <img src={props.banner} width="100%" height="20%" alt="loading..." />
            </div>

            <div>
                <p>{props.description}</p>
            </div>

            <Footer />
        </>
        
    );
}

export default RecipeDetail;