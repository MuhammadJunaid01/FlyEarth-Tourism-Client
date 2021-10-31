import React from "react";
import "./footer.css";
import { Col, Container, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <Container>
          <div className="footer-banner">
            <Row>
              <Col lg={6} md={12} sm={12}>
                <div className="col-info">
                  <h2> Follow Us</h2>
                </div>
                <div className="follw-icon-container">
                  <div className="follw-icon">
                    <span>
                      <i className="fab fa-facebook icon"></i>
                    </span>
                    <span>
                      <i className="fab fa-youtube icon"></i>
                    </span>
                    <span>
                      <i className="fab fa-instagram-square icon"></i>
                    </span>
                    <span>
                      <i className="fab fa-linkedin icon"></i>
                    </span>
                    <span>
                      <i className="fab fa-github icon"></i>
                    </span>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={12} sm={12}>
                <div className="subscribe-container">
                  <div className="subscribe-info">
                    <h2>Subsceibe Our Channel</h2>
                  </div>
                  <div className="subcribe">
                    <input className="subs-email" type="email" />
                    <input type="button" value="Subscribe" />
                  </div>
                </div>
              </Col>
            </Row>
            <div className="copy">
              <p>
                Allright reserved{" "}
                <i className="fas fa-copyright text-white"></i>
                <i>by Muhhammad Junaid</i>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
