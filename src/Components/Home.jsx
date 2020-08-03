import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import img1 from "./images/programmer.gif";
const Home = () => {
  return (
    <>
      <Container className="home_container " id="home_container">
        <Row>
          <Col md={6} sm={6} xs={12} className="left_col">
            <h1 className="title">
              Grow your business with{" "}
              <strong className="name">Wazir Technical</strong>.
            </h1>
            <h3 className="desc">
              We are team of talented Web Developer & Desginer.
            </h3>
            <Link to="/contact" className="btn btn-outline-dark mt-4">
              Get Started
            </Link>
          </Col>
          <Col md={6} sm={6} xs={12} className="right_col">
            <img
              src="./images/programmer.gif"
              alt="myPic"
              className="img-fluid img-responsive animated img-rounded"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
