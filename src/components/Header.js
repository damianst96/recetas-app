// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles.css';
// import SearchResult from './SearchResult';
// import SearchForm from './SearchForm';

function Header() {
  
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
				<NavDropdown.Item href="/arroz">Arroz</NavDropdown.Item>
				<NavDropdown.Item href="/carne">Carne</NavDropdown.Item>
				<NavDropdown.Item href="/cocktails">Cocktails</NavDropdown.Item>
				<NavDropdown.Item href="/guisos">Guisos</NavDropdown.Item>
				<NavDropdown.Item href="pan-pizza">Panes y Pizzas</NavDropdown.Item>
				<NavDropdown.Item href="/pasta">Pasta</NavDropdown.Item>
				<NavDropdown.Item href="pollo">Pollo</NavDropdown.Item>
				<NavDropdown.Item href="/postres">Postres</NavDropdown.Item>
				<NavDropdown.Item href="/sandwiches">Sandwiches</NavDropdown.Item>
        <NavDropdown.Item href="/sopas">Sopas</NavDropdown.Item>
				<NavDropdown.Item href="/tartas">Tartas</NavDropdown.Item>
				<NavDropdown.Item href="/tortas">Tortas</NavDropdown.Item>
				<NavDropdown.Item href="/veggie">Veggie</NavDropdown.Item>
			</NavDropdown>
			
			<NavDropdown title="Filtrar recetas" id="basic-nav-dropdown">
				<NavDropdown.Item href="/dulces">Dulces</NavDropdown.Item>
				<NavDropdown.Item href="/saladas">Saladas</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item href="/facil">Fáciles</NavDropdown.Item>
				<NavDropdown.Item href="/medio">Medias</NavDropdown.Item>
				<NavDropdown.Item href="/dificil">Difíciles</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item href="/menues">Menúes</NavDropdown.Item>
			</NavDropdown>
			
			<NavDropdown title="Recetas por país" id="basic-nav-dropdown">
				<NavDropdown.Item href="/argentina">Argentina</NavDropdown.Item>
				<NavDropdown.Item href="/china">China</NavDropdown.Item>
				<NavDropdown.Item href="/españa">España</NavDropdown.Item>
				<NavDropdown.Item href="/eeuu">Estados Unidos</NavDropdown.Item>
				<NavDropdown.Item href="/india">India</NavDropdown.Item>
				<NavDropdown.Item href="/italia">Italia</NavDropdown.Item>
				<NavDropdown.Item href="/japon">Japón</NavDropdown.Item>
				<NavDropdown.Item href="/medio-oriente">Medio Oriente</NavDropdown.Item>
				<NavDropdown.Item href="/mexico">México</NavDropdown.Item>
				<NavDropdown.Item href="/uruguay">Uruguay</NavDropdown.Item>
				<NavDropdown.Item href="/venezuela">Venezuela</NavDropdown.Item>
			</NavDropdown>

      <Nav.Link href="/search">Buscar Recetas</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
	  
      {/* <SearchForm className="d-flex" /> */}

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