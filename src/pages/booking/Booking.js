import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Container, Form, Row, Button } from "react-bootstrap";
import { useParams } from "react-router";
import "./booking.css";
const Booking = () => {
  const { id } = useParams();
  console.log(id);
  const [booking, setBooking] = useState({});
  const [isLoading, setIsLoading] = useState();
  useEffect(() => {
    fetch(`https://fathomless-beyond-11252.herokuapp.com/booking/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
        console.log("data booking", data);
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
      .post("https://fathomless-beyond-11252.herokuapp.com/orders", cartData)
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
                src={booking?.image}
              />
              <Card.Body>
                <Card.Title>{booking?.name}</Card.Title>
                <p>
                  Cost: {booking?.price}
                  <small>tk</small>
                </p>
                <button
                  className="addcart-btn"
                  onClick={() => handleAddTocart(booking)}
                >
                  Add To Cart
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button className="addcart-btn" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Booking;
