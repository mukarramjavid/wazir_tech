import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";
import swal from '@sweetalert/with-react';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState({
    fullname: "",
    email: "",
    phone: "",
    msg: "",
  });

  // accessing the values of text fields
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setInfo((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  // submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    isSweetAlert(true);
    
    emailjs
      .sendForm(
        "gmail",
        "template_gTtWW4bp",
        event.target,
        "user_vRtIQ3a4Onqdf5r7Scvla"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading(false)
        },
        (error) => {
          console.log(error.text);
        }
      );
    setInfo({
      fullname: "",
      email: "",
      phone: "",
      msg: "",
    });
    // alert(
    //   `${info.fullname} sent a "${info.msg}" to Mukarram Javid through this email ${info.email}`
    // );
  };
  return (
    <>
      <Container className="home_container">
        <Col md={12} sm={12} xs={12}>
          <h1 className="service_title1">Leave a message</h1>
        </Col>
        <hr />
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <form onSubmit={handleSubmit} className="info_form">
              <div className="form-group">
                <label className="control-label">Name:</label>
                <input
                  type="text"
                  placeholder="Your Full Name here..."
                  className="form-control title-text"
                  autoComplete="off"
                  name="fullname"
                  value={info.fullname}
                  onChange={inputEvent}
                  required
                />
              </div>
              <div className="form-group">
                <label className="control-label">Email:</label>
                <input
                  type="Email"
                  placeholder="xyz@example.com"
                  className="form-control"
                  name="email"
                  value={info.email}
                  onChange={inputEvent}
                  required
                />
              </div>
              <div className="form-group">
                <label className="control-label">Telephone:</label>
                <input
                  type="number"
                  placeholder="Your phone Number here..."
                  className="form-control"
                  name="phone"
                  value={info.phone}
                  onChange={inputEvent}
                  required
                />
              </div>
              <div className="form-group">
                <label className="control-label">Message:</label>
                <textarea
                  type="text"
                  className="form-control"
                  rows=""
                  col=""
                  placeholder="Type your message"
                  name="msg"
                  value={info.msg}
                  onChange={inputEvent}
                  required
                ></textarea>
              </div>
              {!isLoading && (
                <button
                  type="submit"
                  className="btn btn-outline-dark"
                  id="btnDark"
                >
                  Send message
                </button>
              )}
              {isLoading && (
                <button
                  type="submit"
                  className="btn btn-outline-dark"
                  id="btnDark"
                  disabled
                >
                  <div>
                    <i class="fas fa-spinner fa-spin"></i> Sending ...
                  </div>
                  
                </button>
               
               
              ) && 
                swal({
                  title: "Good job!",
                  text: "Message Send Successfully!",
                  icon: "success",
                  })
              }
            </form>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </>
  );
};
export default Contact;
