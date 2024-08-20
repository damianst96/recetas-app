import Header from '../Header';
import Footer from '../Footer';
import '../../styles.css';

function AltoGuiso(){
    return(
        <>
            <Header />
            <div className="banner">
                <img src="img/alto guiso.jpg" width="100%" height="20%" alt="loading..." />
            </div>

            <main className="recipe">
                <h3 className="title">Alto Guiso</h3>
                <div className="ingredients">
                    <h5>Ingredientes:</h5>
                    <ul>
                        <li>Corte de carne económico: aprox. 600grs (puede ser de vaca o de cerdo)</li>
                        <li>Puré de tomate: 1 lata o 1 caja</li>
                        <li>Cebolla: 1</li>
                        <li>Zanahoria: 1</li>
                        <li>Ajo: 2 dientes</li>
                        <li>Sal, Orégano, Pimentón y Ají Molido: a gusto</li>
                    </ul>
                </div>
                <div className="description">
                    <p>Voy a empezar contando una historia que cambió mi vida: el 7 de agosto del 2011 fue la fecha 1 del 
                    Torneo Apertura del fútbol argentino y Lanús le ganó 1-0 a San Lorenzo en el Nuevo Gasómetro. Lo más
					importante no fue la victoria sino que fue un hincha que dijo una frase que quedó para el recuerdo:</p>
					
					<i>15 pesos sale un paty acá, con 15 pesos...con 15 pesos me hago alto guiso</i>
                </div>
            </main>

            <Footer />
        </>
    );
}

export default AltoGuiso;