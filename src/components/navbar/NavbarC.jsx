import "./NavbarC.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router";

const NavbarC = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <NavLink to="#home">
            <img
              src="https://th.bing.com/th/id/OIP.EcRIk-YxtGrYoYPwdzWAuQAAAA?rs=1&pid=ImgDetMain"
              alt=""
              width={120}
            />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className={"nav-link"} to="/">
                Inicio
              </NavLink>
              <NavLink className={"nav-link"} to="#link">
                Sobre Nosotros
              </NavLink>
              <NavLink className={"nav-link"} to="#link">
                Contacto
              </NavLink>
            </Nav>
            <Nav className="ms-auto">
              <NavLink className={"nav-link"} to="#home">
                Iniciar Sesion
              </NavLink>
              <NavLink className={"nav-link"} to="#link">
                Registrarse
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarC;
