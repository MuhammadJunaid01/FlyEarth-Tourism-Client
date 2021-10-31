import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "./banner.css";
import slider1 from "../../images/slider.jpg";
import slider2 from "../../images/slider-2.jpg";
import slider3 from "../../images/slider-3.jpg";
import slider4 from "../../images/slider-4.jpg";
import slider5 from "../../images/slider-5.jpg";
const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 caruser-image"
            src={slider1}
            alt="First slide"
          />

          <Carousel.Caption className="carusel-info">
            <Button>GET ROAM</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 caruser-image"
            src={slider2}
            alt="First slide"
          />

          <Carousel.Caption className="carusel-info">
            <Button>GET ROAM</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 caruser-image"
            src={slider3}
            alt="First slide"
          />

          <Carousel.Caption className="carusel-info">
            <Button>GET ROAM</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 caruser-image"
            src={slider4}
            alt="First slide"
          />

          <Carousel.Caption className="carusel-info">
            <Button>GET ROAM</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 caruser-image"
            src={slider5}
            alt="First slide"
          />

          <Carousel.Caption className="carusel-info">
            <Button>GET ROAM</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
