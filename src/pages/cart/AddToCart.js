import React, { useEffect, useState } from "react";
import "./Addcart.css";
import { useForm } from "react-hook-form";
import UseAuth from "./../../hooks/useAuth/UseAuth";
import { Col, Container, Offcanvas, Row, Spinner } from "react-bootstrap";
const AddToCart = () => {
  const { user, isLoading } = UseAuth();
  const [show, setShow] = useState(false);
  // react hook
  const { register, handleSubmit } = useForm();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let email = user.email;

  const [myOrders, setMyOrders] = useState();
  const [confirmed, setConfirmed] = useState();
  useEffect(() => {
    fetch(`https://fathomless-beyond-11252.herokuapp.com/myorders/${email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data))
      .catch((err) => console.log(err));
  }, [isLoading]);
  // const handleOrderConfirmed = (id) => {
  //   console.log("id", myOrders[id]);
  // };
  const onSubmit = (data) => {
    console.log(data, confirmed);
    fetch("https://fathomless-beyond-11252.herokuapp.com/confimorder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(confirmed),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleorderConfirmed = (index) => {
    setConfirmed(myOrders[index]);
  };
  // console.log(myOrders);
  return (
    <div className="cartcontainer">
      <Container>
        <div className="order-componets">
          {<h1 className="text-center">My Orders</h1>}

          {user.email ? (
            <Row className="g-3">
              {myOrders?.map((orders, index) => (
                <Col key={index} lg={4} md={12} sm={12}>
                  <div className="orders-reapet">
                    <img className="orders-image" src={orders.image} alt="" />
                    <div className="order-info">
                      <p>{orders.country}</p>
                      <p>{orders.name}</p>
                      <p>{orders.info}</p>
                      <p>{orders.price}</p>
                    </div>
                    <div className="group-btn">
                      <button
                        onClick={handleShow}
                        className="btn btn-outline-warning text-dark mt-2"
                      >
                        Order Placed
                      </button>
                    </div>

                    <Offcanvas show={show} onHide={handleClose}>
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        {myOrders?.map((confirmed, index) => (
                          <div key={index} className="confirmed-cont">
                            <img
                              className="confirmed-img "
                              src={confirmed.image}
                              alt=""
                            />
                            <button
                              className="btn btn-outline-info w-100"
                              onClick={() => handleorderConfirmed(index)}
                            >
                              Add Cart
                            </button>
                          </div>
                        ))}
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <input
                            className="orderSubmit"
                            {...register("firstName")}
                            placeholder="Enter Yuour Name:"
                          />
                          <input
                            className="orderSubmit"
                            {...register("email")}
                            value={user.email}
                          />
                          <input
                            className="orderSubmit"
                            type="text"
                            {...register("adress")}
                            placeholder="Enter Your Address:"
                          />
                          <input
                            className="orderSubmit"
                            type="text"
                            {...register("phoneNumber")}
                            placeholder="Enter Your PhoneNumber:"
                          />
                          <input className="orderSubmit" type="submit" />
                        </form>
                      </Offcanvas.Body>
                    </Offcanvas>
                  </div>
                </Col>
              ))}
            </Row>
          ) : (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </div>
      </Container>
    </div>
  );
};

export default AddToCart;
