import "./NavbarC.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarC = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://th.bing.com/th/id/OIP.EcRIk-YxtGrYoYPwdzWAuQAAAA?rs=1&pid=ImgDetMain"
              alt=""
              width={120}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
              <Nav.Link href="#link">Contacto</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="#home">Iniciar Sesion</Nav.Link>
              <Nav.Link href="#link">Registrarse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarC;
