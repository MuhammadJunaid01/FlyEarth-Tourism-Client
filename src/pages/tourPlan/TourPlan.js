import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import "./touPlan.css";
import TourPackege from "./tourPackege/TourPackege";
const TourPlan = () => {
  const [tourPlan, setTourPlan] = useState([]);
  const [isloading, setIsloading] = useState();
  useEffect(() => {
    fetch("https://fathomless-beyond-11252.herokuapp.comtourpackeges")
      .then((res) => res.json())
      .then((data) => {
        setTourPlan(data);
        setIsloading(true);
      })
      .catch((err) => console.log(err))
      .finally(setIsloading(false));
  }, []);

  return isloading === false ? (
    <div className="loader">
      <Spinner animation="border" variant="primary" />
    </div>
  ) : (
    <div className="tourPlan">
      <Container>
        <div className="tourPlan-container">
          <div className="tour-info">
            <h4>Modern & Beautiful</h4>
            <h1>Explore the World for Yourself</h1>
          </div>
          <Row className="g-3">
            {tourPlan.map((tour) => (
              <Col key={tour._id} lg={4} md={12} sm={12}>
                <TourPackege tour={tour}></TourPackege>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default TourPlan;
