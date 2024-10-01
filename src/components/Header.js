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
            <Nav.Link href="#action2">Link</Nav.Link>
			<NavDropdown title="Dropdown" id="basic-nav-dropdown">
				<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.2">
				  Another action
				</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item href="#action/3.4">
				  Separated link
				</NavDropdown.Item>
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