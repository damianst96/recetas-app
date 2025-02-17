// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles.css';
import { useState } from 'react';
import SearchForm from './SearchForm';
// import SearchResult from './SearchResult';

function Header({ onSearch }) {
	const [results, setResults] = useState([]);

  // Definir la función handleSearch que realiza la búsqueda en la API
  const handleSearch = async () => {
    try {
      const response = await fetch(`/api?title=${results}`);
      const data = await response.json();
      setResults(data.recipes); // Guardar los resultados en el estado
    } catch (error) {
      console.error('Error al buscar recetas:', error);
    }
  };
  
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid className="container">
        <Navbar.Brand href="/">Recetas Damucho</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Tipos de recetas" id="basic-nav-dropdown">
				<NavDropdown.Item href="#">Arroz</NavDropdown.Item>
				<NavDropdown.Item href="#">Carne</NavDropdown.Item>
				<NavDropdown.Item href="#">Cocktails</NavDropdown.Item>
				<NavDropdown.Item href="/guisos">Guisos</NavDropdown.Item>
				<NavDropdown.Item href="#">Panes y Pizzas</NavDropdown.Item>
				<NavDropdown.Item href="#">Pasta</NavDropdown.Item>
				<NavDropdown.Item href="#">Pollo</NavDropdown.Item>
				<NavDropdown.Item href="#">Postres</NavDropdown.Item>
				<NavDropdown.Item href="#">Sandwiches</NavDropdown.Item>
				<NavDropdown.Item href="#">Tartas</NavDropdown.Item>
				<NavDropdown.Item href="#">Tortas</NavDropdown.Item>
				<NavDropdown.Item href="#">Veggie</NavDropdown.Item>
			</NavDropdown>
			
			<NavDropdown title="Filtrar recetas" id="basic-nav-dropdown">
				<NavDropdown.Item href="/dulces">Dulces</NavDropdown.Item>
				<NavDropdown.Item href="/saladas">Saladas</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item href="#">Fáciles</NavDropdown.Item>
				<NavDropdown.Item href="#">Medias</NavDropdown.Item>
				<NavDropdown.Item href="#">Difíciles</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item href="#">Menúes</NavDropdown.Item>
			</NavDropdown>
			
			<NavDropdown title="Recetas por país" id="basic-nav-dropdown">
				<NavDropdown.Item href="/argentina">Argentina</NavDropdown.Item>
				<NavDropdown.Item href="#">China</NavDropdown.Item>
				<NavDropdown.Item href="#">España</NavDropdown.Item>
				<NavDropdown.Item href="/eeuu">Estados Unidos</NavDropdown.Item>
				<NavDropdown.Item href="#">India</NavDropdown.Item>
				<NavDropdown.Item href="#">Italia</NavDropdown.Item>
				<NavDropdown.Item href="#">Japón</NavDropdown.Item>
				<NavDropdown.Item href="#">Medio Oriente</NavDropdown.Item>
				<NavDropdown.Item href="#">México</NavDropdown.Item>
				<NavDropdown.Item href="/uruguay">Uruguay</NavDropdown.Item>
				<NavDropdown.Item href="#">Venezuela</NavDropdown.Item>
			</NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
	  
      <SearchForm className="d-flex" onSubmit={handleSearch} />
      {/* <Form className="d-flex" onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Buscar recetas"
        className="me-2"
        aria-label="Search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <Button type="submit" variant="outline-success" className="search" href={`/search?title=${query}`}>
        Buscar
      </Button>
    </Form> */}
    </Navbar>
  );
}

export default Header;