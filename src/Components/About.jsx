import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
const About = () => {
  return (
    <>
      <Container className="home_container">
        <Row>
          <Col md={12} xs={12} className="text-center d-none d-sm-block">
            <Image src="/images/profile-pic.jpg" thumbnail className="homeDp" />
          </Col>
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <Card style={{ border: "none" }} className="">
              <Card.Body className="body_text">
                <Card.Text>
                  <h2 className="st_font">Hello,</h2>
                  <div className="infoText">
                    <p className="info">
                      I am <strong>Mukarram Javid </strong>
                      having 2 year experince of full-stack development. I offer
                      the technical expertise you are seeking for web developer
                      position.
                    </p>
                    <p className="info">
                      Since earning my bachoelor's degree in Computer Science
                      from University of Engineering & Technology, Lahore. I am
                      having 2 years experince of ASP.NET MVC 5. Recently, I
                      have completed my Final Year Project in ASP.NET MVC 5
                      using Entity Framework 6. Now, I am learing JS framework
                      'React.js' & 'Web API'.
                    </p>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </>
  );
};
export default About;
