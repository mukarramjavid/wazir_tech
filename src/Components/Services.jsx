import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "./Card";
const Services = () => {
  return (
    <>
      <Container className="home_container">
        <Col md={12} sm={12} xs={12}>
          <h1 className="service_title">Services</h1>
        </Col>
        <hr />
        <Row>
          <Cards />
        </Row>
      </Container>
    </>
  );
};
export default Services;
