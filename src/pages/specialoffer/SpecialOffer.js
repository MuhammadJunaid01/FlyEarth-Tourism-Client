import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./offer.css";
import UseAuth from "./../../hooks/useAuth/UseAuth";
const SpecialOffer = () => {
  const { user } = UseAuth();
  const email = user?.email;
  const [offers, setOffers] = useState();
  const [isLoading, setIsLoading] = useState();
  useEffect(() => {
    fetch("https://fathomless-beyond-11252.herokuapp.com/specialOffer")
      .then((res) => res.json())
      .then((data) => {
        setOffers(data);
        setIsLoading(true);
      })
      .catch((err) => console.log(err))
      .finally(setIsLoading(false));
  }, []);
  const handleaddedcartspecialOffer = (index) => {
    const data = offers[index];
    console.log("data", data);
    data.email = email;
    fetch("https://fathomless-beyond-11252.herokuapp.com/addorder", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  offers ? console.log("offer paiche", offers) : console.log("khalilllllllll");
  return (
    <div className="specialoffer">
      <div className="special-info">
        <h1>Current hot offers</h1>
      </div>
      <Container>
        <Row className="g-3">
          {offers?.map((special, index) => (
            <Col key={index} lg={4}>
              <div className="special-container">
                <div className="special-banner">
                  <img
                    className="special img-fluid"
                    src={special.image}
                    alt=""
                  />
                </div>
                <div className="special-cardinfo">
                  <h4 className="specialname">{special.name}</h4>
                  <p>{special.info}</p>
                </div>
                <button
                  onClick={() => handleaddedcartspecialOffer(index)}
                  className="booknow btn btn-outline-primary"
                >
                  book now
                </button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SpecialOffer;
