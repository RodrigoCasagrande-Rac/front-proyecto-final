import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardC = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://th.bing.com/th/id/OIP.DFhYMDOzkr1QWFqlCU2KewHaE8?rs=1&pid=ImgDetMain"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardC;
