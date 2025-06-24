import { Container, Row, Col } from "react-bootstrap";

import CardC from "../cardC/CardC";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [productos, setProductos] = useState([]);

  const obtenerProductos = async () => {
    try {
      const productos = await fetch("https://fakestoreapi.com/products");
      const data = await productos.json();
      setProductos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <>
      <Container>
        <Row>
          {productos.map((producto) => (
            <Col key={producto.id} sm="12" md="6" lg="4">
              <CardC
                urlImagen={producto.image}
                titulo={producto.title}
                descripcion={producto.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
