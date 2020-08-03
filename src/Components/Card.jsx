import React from "react";
import { Col, Card } from "react-bootstrap";
// import { Link } from "react-router-dom";
import SData from "../Data";
const Cards = () => {
  return (
    <>
      {SData.map((val) => {
        return (
          <Col md={4} xs={12} sm={12} key={val.id}>
            <Card className="CardStyle">
              <Card.Img src={val.img} />
              <Card.Body>
                <Card.Title className="movieTitle">{val.title}</Card.Title>
              </Card.Body>
            </Card>
            <br />
          </Col>
        );
      })}
    </>
  );
};
export default Cards;
