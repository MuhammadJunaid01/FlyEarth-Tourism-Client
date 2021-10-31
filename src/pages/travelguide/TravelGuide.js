import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./travelguide.css";
const TravelGuide = () => {
  return (
    <div className="travelguidecontainer">
      <Container>
        <Row>
          <Col lg={3} md={12} sm={12}>
            <div className="travelinfocontainer">
              <div className="travelinfoicon">
                <i className="far fa-gem"></i>
              </div>
              <h5>Special Activites</h5>
              <p>
                Lorem ipsum dolor sit amet, consec lorem adipi scing elit eps
                Etiam ferm entum tinc idunt.
              </p>
            </div>
          </Col>
          <Col lg={3} md={12} sm={12}>
            <div className="travelinfocontainer">
              <div className="travelinfoicon">
                <i className="fas fa-pen"></i>
              </div>
              <h5>Special Activites</h5>
              <p>
                Lorem ipsum dolor sit amet, consec lorem adipi scing elit eps
                Etiam ferm entum tinc idunt.
              </p>
            </div>
          </Col>

          <Col lg={3} md={12} sm={12}>
            <div className="travelinfocontainer">
              <div className="travelinfoicon">
                <i className="far fa-star"></i>
              </div>
              <h5>Special Activites</h5>
              <p>
                Lorem ipsum dolor sit amet, consec lorem adipi scing elit eps
                Etiam ferm entum tinc idunt.
              </p>
            </div>
          </Col>

          <Col lg={3} md={12} sm={12}>
            <div className="travelinfocontainer">
              <div className="travelinfoicon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h5>Special Activites</h5>
              <p>
                Lorem ipsum dolor sit amet, consec lorem adipi scing elit eps
                Etiam ferm entum tinc idunt.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TravelGuide;
