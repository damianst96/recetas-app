import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles.css';

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
            <Nav.Link href="/todas-las-recetas">Todas las recetas</Nav.Link>
			<NavDropdown title="Filtrar recetas" id="basic-nav-dropdown">
				<NavDropdown.Item href="/dulces">Dulces</NavDropdown.Item>
				<NavDropdown.Item href="/saladas">Saladas</NavDropdown.Item>
				<NavDropdown.Divider />
        <NavDropdown.Item href="#">Fáciles</NavDropdown.Item>
        <NavDropdown.Item href="#">Medias</NavDropdown.Item>
        <NavDropdown.Item href="#">Difíciles</NavDropdown.Item>
			</NavDropdown>
			<NavDropdown title="Recetas por país" id="basic-nav-dropdown">
				<NavDropdown.Item href="#">Argentina</NavDropdown.Item>
				<NavDropdown.Item href="#">Caribe</NavDropdown.Item>
				<NavDropdown.Item href="#">China</NavDropdown.Item>
				<NavDropdown.Item href="#">España</NavDropdown.Item>
				<NavDropdown.Item href="#">Estados Unidos</NavDropdown.Item>
				<NavDropdown.Item href="#">India</NavDropdown.Item>
				<NavDropdown.Item href="#">Italia</NavDropdown.Item>
				<NavDropdown.Item href="#">Japón</NavDropdown.Item>
				<NavDropdown.Item href="#">Medio Oriente</NavDropdown.Item>
				<NavDropdown.Item href="#">México</NavDropdown.Item>
				<NavDropdown.Item href="#">Uruguay</NavDropdown.Item>
				<NavDropdown.Item href="#">Venezuela</NavDropdown.Item>
			</NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
	  
      <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Buscar recetas"
            className="me-2"
            aria-label="Search"
          />
        <Button variant="outline-success" className="search">Buscar</Button>
      </Form>
    </Navbar>
  );
}

export default Header;