import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import NavbarC from "./components/NavbarC";
import CardC from "./components/CardC";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <NavbarC />
      <Container>
        <Row>
          <Col sm="12" md="6" lg="4">
            <CardC />
          </Col>
          <Col sm="12" md="6" lg="4">
            <CardC />
          </Col>
          <Col sm="12" md="6" lg="4">
            <CardC />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default App;
