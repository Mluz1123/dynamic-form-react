import { Card, Col } from "react-bootstrap";
import "./CardServices.css";

export default function CardServices({ service }) {
  const { title, subtitle, image, footer, link } = service;
  return (
    <Col className="container-card-service">
      <Card>
        <Card.Img src={image} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <a href={link} target="_blank" rel="noreferrer">
            {footer}
          </a>
        </Card.Footer>
      </Card>
    </Col>
  );
}
