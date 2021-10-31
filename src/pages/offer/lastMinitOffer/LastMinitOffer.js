import React from "react";
import "./Lsatminitoffer.css";
import lastminitOffer from "../../../images/header-2-img-1.png";
import { Button, Col, Container, Row } from "react-bootstrap";
const LastMinitOffer = () => {
  return (
    <div className="mintoofer">
      <Container>
        <div className="minitOffer-container">
          <Row>
            <Col lg={5} md={1} sm={1}>
              <div className="minitoffer-banner">
                <img src={lastminitOffer} alt="" />
              </div>
            </Col>
            <Col lg={2} md={1} sm={1}></Col>
            <Col lg={5} md={1} sm={1}>
              <div className="minitOffer-info">
                <h1>Last Minute Offer</h1>
                <p>Aerial view of Cape Town with Cape Town Stadium</p>
                <p>
                  Lorem ipsum dolor sit amet. Lorem Ipsn gravida. Pro ain
                  gravida nibh vel velit an auctor aliqueenean ollicitudin ain
                  gravida nibh vel version an ipsum. Lorem ipsim dolor sit amet
                  auctor aliqueenean ollicitudin.
                </p>
                <button className="veiwMore-btn">Veiw More</button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default LastMinitOffer;
