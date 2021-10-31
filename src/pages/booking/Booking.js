import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import "./booking.css";
const Booking = () => {
  const { id } = useParams();
  console.log(id);
  const [booking, setBooking] = useState({});
  const [isLoading, setIsLoading] = useState();
  useEffect(() => {
    fetch(`https://fathomless-beyond-11252.herokuapp.combooking/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
        console.log(data);
        setIsLoading(true);
        if (data.insertedId) {
          alert("added succesfully");
        }
      })
      .catch((err) => console.log(err))
      .finally(setIsLoading(false));
  }, []);
  const handleAddTocart = (cartData) => {
    axios
      .post("https://fathomless-beyond-11252.herokuapp.comorders", cartData)
      .then((res) => {
        console.log(res);
      });

    console.log("cart data", cartData);
  };
  isLoading ? console.log("booking", booking) : console.log("hello is loading");
  return (
    <div className="bookinContainer">
      <Container>
        <Row>
          <Col lg={4} mmd={12} sm={12}>
            <Card>
              <Card.Img
                variant="top"
                className="booking-image"
                src={booking.image}
              />
              <Card.Body>
                <Card.Title>{booking.name}</Card.Title>
                <p>
                  Cost: {booking.price}
                  <small>tk</small>
                </p>
                <button
                  onClick={() => handleAddTocart(booking)}
                  className="addcart-btn"
                >
                  Add To Cart
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Booking;
