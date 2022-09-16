import { Card, Col } from "react-bootstrap";
import { fruit } from "./FirstStep";

export default function CardFruit({ fruit, clickCard, selectedCard }) {
  const { id, icon, name, description } = fruit;
  return (
    <Col
      className={`card-fruit mt-2 ${
        selectedCard === fruit.id ? "selected-card" : ""
      }`}
      onClick={() => clickCard(fruit)}
      key={id}
    >
      <Card>
        <Card.Body>
          <Card.Title>{icon}</Card.Title>
          <Card.Subtitle>{name}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
