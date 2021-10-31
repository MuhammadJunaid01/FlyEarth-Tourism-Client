import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./tourpackge.css";
const TourPackege = (props) => {
  const add = props.tour;
  const { price, image, name, country, _id } = props.tour;
  const handleBooking = (id) => {
    // console.log("hhhhhhhhhhhh", id);
  };
  return (
    <div>
      <Card className="tour-card">
        <Card.Img variant="top" className="tour-images " src={image} />
        <Card.Body className="card-tour-body">
          <div className="count">
            <p className="tour-names">{name}</p>
            <p className="country-name">{country}</p>
          </div>
          <p className="tour-price">
            {price}
            <small>tk</small>
          </p>
          <Link to={`/booking/${_id}`}>
            <Button
              onClick={() => handleBooking(_id)}
              className="veiwmore-btn"
              variant="warning"
            >
              BOOKINK
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TourPackege;
