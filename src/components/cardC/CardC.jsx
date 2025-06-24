import { Button, Card } from "react-bootstrap";
import "./CardC.css";
import { Link } from "react-router";

const CardC = ({ idProd, urlImagen, titulo, descripcion }) => {
  return (
    <>
      <Card className="mt-5">
        <Card.Img variant="top" src={urlImagen} />
        <Card.Body>
          <Card.Title className="text-truncate">{titulo}</Card.Title>
          <Card.Text className="text-truncate">{descripcion}</Card.Text>
          <Link
            to={`/galeria-productos/${idProd}}`}
            className="btn btn-primary"
          >
            Ver Más
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardC;
