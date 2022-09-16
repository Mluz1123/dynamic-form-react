import { Col, Container, Row } from "react-bootstrap";
import "./Services.css";
import imgCoursel1 from "../../assets/img/hbo.jpeg";
import imgCoursel2 from "../../assets/img/netflix.jpeg";
import imgCoursel3 from "../../assets/img/prime.jpeg";
import CardServices from "./CardServices/CardServices";

export default function Services() {
  const servicesArray = [
    {
      title: "Wordpress Course",
      subtitle: "Lear all about this great CMS",
      image: imgCoursel1,
      footer: "Go to the course ➡️",
      link: "#",
    },
    {
      title: "Prestashop Curse",
      subtitle: "Lear all about this great CMS",
      image: imgCoursel2,
      footer: "Go to the course ➡️",
      link: "#",
    },
    {
      title: "React Course",
      subtitle: "Lear all about this great CMS",
      image: imgCoursel3,
      footer: "Go to the course ➡️",
      link: "#",
    },
  ];

  return (
    <div className="services p-4 mt-5">
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <h2 className="text-center">Services</h2>
            <h4 className="pb-3 text-center">
              Check some of my services trha is id
            </h4>
            <Row xs={1} md={3} className="g-4 mt-4">
              {servicesArray.map((service, index) => (
                <CardServices service={service} key={index} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
