import Header from '../Header';
import Footer from '../Footer';

function GuisoMoñito(){
    return(
        <>
            <Header />
            <div className="banner">
                <img src="img/guiso de fideos moñito.jpg" width="100%" height="20%" alt="loading..." />
            </div>

            <div>
                <p>Guiso de Fideos Moñito</p>
            </div>

            <Footer />
        </>
    );
}

export default GuisoMoñito;