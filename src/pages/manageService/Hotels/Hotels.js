import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Hotel.css";
const Hotels = () => {
  const [hotels, setHotels] = useState();
  useEffect(() => {
    fetch("https://fathomless-beyond-11252.herokuapp.com/addhotel")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);
  return (
    <div className="hotels-container">
      <div className="hotels-info">
        <h1>Featured places to stay</h1>
        <p>Popular places to stay that Chisfis recommends for you</p>
      </div>

      <Container>
        <Row className="g-3">
          {hotels?.map((hotel, index) => (
            <Col key={index} lg={3} md={12} sm={12}>
              <div className="hotel-cart">
                <Card>
                  <Card.Img
                    variant="top"
                    className="hotel-img"
                    src={hotel.image}
                  />
                  <Card.Body>
                    <Card.Title>{hotel.name}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Hotels;
