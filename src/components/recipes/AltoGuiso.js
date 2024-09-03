import Header from '../Header';
import Footer from '../Footer';
import '../../styles.css';

function AltoGuiso(){
    return(
        <>
            <Header />

            <main className="recipe">
            <h1 className="title">Alto Guiso</h1>

            <div className="banner-main">
                <img src="img/alto guiso.jpg" alt="loading..." />
            </div>

            
                <div className="ingredients">
                    <h5>Ingredientes:</h5>
                    <ul>
                        <li>Corte de carne económico: aprox. 600grs (puede ser de vaca o de cerdo)</li>
						<li>Fideos, Arroz o legumbres: aprox. 250grs</li>
                        <li>Puré de tomate: 1 lata o 1 caja</li>
                        <li>Cebolla: 1</li>
                        <li>Zanahoria: 1</li>
                        <li>Ajo: 2 dientes</li>
                        <li>Sal, Orégano, Pimentón y Ají Molido: a gusto</li>
                    </ul>
                </div>
                <div className="description">
                    <p>Voy a empezar contando una historia que cambió mi vida: el 7 de agosto del 2011 fue la fecha 1 del 
                    Torneo Apertura del fútbol argentino y Lanús le ganó 1-0 a San Lorenzo de visitante en el Nuevo Gasómetro. Lo más
					importante no fue la victoria sino una frase de un hincha del "granate" que quedó para el recuerdo:</p>
					
					<p><i><b>15 pesos sale un paty acá, con 15 pesos...con 15 pesos me hago alto guiso</b></i></p>

                    <div className="banner">
                        <p><img src="img/alto-guiso.jpg" width="100%" height="20%" alt="loading..." /></p>
                    </div>
					
					<p>Para la mayoría de la gente es insólito que una frase tan simple como esa signifique tanto. Resulta que
					en la época 15 pesos argentinos para un paty de cancha era mucho dinero y para un alto guiso no estabas muy
					lejos en dinero. Fue tanto lo que generó que se hicieron memes, temas musicales y hasta se creó el "Indice Alto Guiso"
					para medir la inflación en relación al precio del guiso.</p>
					
					<p>Incluso encontraron al señor Alto Guiso muchos años después de la histórica frase. Una historia bien argentina
					sobre la inflación.</p>
					
					<p>Ahora vamos a la receta. Realmente no hay mucho para explicar, el primer paso es cortar la carne en cubitos y
					sellarla en una cacerola grande, mientras tanto cortar las verduras. Cuando la carne esté sellada reservar.</p>
					
					<p>Sin lavar la olla agregar las verduras y saltearlas con sal, luego volver a agregar la carne junto con el
					puré de tomate y un poco de agua o caldo hasta cubrir. Dejar cocinar por aproximadamente 40 minutos hasta que
					el líquido se reduzca. Servir muy caliente apenas apagado el fuego.</p>
					
					<p>Esta es una de las recetas más personalizables que existen. Se pueden agregar o reemplazar ingredientes
					como gusten: se puede agregar vino, legumbres, chorizo colorado, pollo...el cielo es el límite.</p>
                </div>
            </main>

            <Footer />
        </>
    );
}

export default AltoGuiso;