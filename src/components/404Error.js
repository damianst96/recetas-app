import Header from './Header';
import Footer from './Footer';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function Error404(){
    return(
        <div>
            <Header />

            <main className='recipe'>
                <h1 className="title">¡La página que buscaste no existe!</h1>

                <div className='description'>
                    <h5 className='title'>Pero no te preocupes, te dejamos fotos de comida</h5>
                </div>

                <Zoom><img src='img/asado2.jpg' className="banner-image" width="100%" alt="loading..." /></Zoom><br></br>
                <Zoom><img src='img/pizza2.jpg' className="banner-image" width="100%" alt="loading..." /></Zoom><br></br>
                <Zoom><img src='img/budin de pan.jpg' className="banner-image" width="100%" alt="loading..." /></Zoom><br></br>
            </main>

            <Footer />
        </div>
    );


}

export default Error404;