import './App.css';
import Header from './components/Header';
import Card from './components/RecipeCard';
import Footer from './components/Footer';

function Home() {

  return (
    <>

      <Header />
    
    <div className='cards'>
        <Card 
          title="Guiso de fideos moñito"
          description="Una receta en homenaje a Johnny el hincha de Talleres, manjar de los dioses con los mejores fideos"
          picture="img/guiso de fideos moñito.jpg"
          route="/guiso-moñito"
        />

        <Card 
          title="Alto Guiso" 
          description="15 peso' sale un paty acá, con 15 peso' me hago Alto Guiso"
          picture="img/alto guiso.jpg"
          route="/alto-guiso"
        />

        <Card 
          title="Cheesecake" 
          description="Cheesecake"
          picture="img/alto guiso.jpg"
          route="/alto-guiso"
        />

        <Card 
          title="Budín de Pan" 
          description="Budín de Pan"
          picture="img/alto guiso.jpg"
          route="/alto-guiso"
        />
    </div>

      <Footer />

    </>
  );
}

export default Home;
