import Header from '../Header';
import Footer from '../Footer';

function GuisoMoñito(){
    return(
        <>
            <Header />

            <main className="recipe">
            <h1 className="title">Guiso de Fideos Moñito</h1>

            <div className="banner-main">
                <img src="img/guiso de fideos moñito.jpg" className="banner-image" width="100%" alt="loading..." />
            </div>

            
                <div className="ingredients">
                    <h5>Ingredientes:</h5>
                    <ul>
                        <li>Fideos Moñito: medio paquete</li>
						<li>Corte de carne económico: aprox. 500grs (puede ser de vaca o de cerdo)</li>
                        <li>Puré de tomate: 1 lata o 1 caja</li>
                        <li>Cebolla: 1</li>
                        <li>Zanahoria: 1</li>
                        <li>Ajo: 2 dientes</li>
                        <li>Sal, Orégano, Pimentón y Ají Molido: a gusto</li>
                    </ul>
                </div>
                <div className="description">
                    <p>Esta receta es un homenaje a un hincha de Talleres que dijo que haría un guiso de fideos moñito en una
					cena romántica con su señora. No dudo ni un solo segundo en responder a la pregunta.</p>
					
					<p>Esto es algo económico y muy sencillo ideal para el invierno. Primero vamos a picar la carne y la vamos
					a saltear vuelta y vuelta con aceite en una cacerola grande. Al mismo tiempo picamos la cebolla, zanahoria y ajo.
					Cuando la carne esté sellada la reservamos y salteamos las verduras con sal hasta que estén blandas.</p>
					
					<p>Volvemos a colocar la carne y luego incorporamos el puré de tomate y un poco de agua o caldo hasta cubrir.
					Dejamos cocinar por 40 minutos aproximadamente y al final agregamos los fideos moñito, mezclamos todo hasta que
					los fideos estén un poco menos cocidos que al dente y apagamos el fuego. Servir bien caliente.</p>
					
					<p>Esta es una de las recetas más personalizables que existen. Se pueden agregar o reemplazar ingredientes
					como gusten: se puede agregar vino, legumbres, chorizo colorado, pollo...el cielo es el límite.</p>
					
                </div>
            </main>

            <Footer />
        </>
    );
}

export default GuisoMoñito;