import React from "react";
import "./about.css";
import aboutimage from "../../images/aboutus.png";
import { Container, Row, Col } from "react-bootstrap";
const About = () => {
  return (
    <div>
      <h1>Hello about</h1>
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <img className="img-fluid" src={aboutimage} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
