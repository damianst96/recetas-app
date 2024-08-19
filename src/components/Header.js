import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles.css';

function NavScrollExample() {
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

export default NavScrollExample;