import React, { useEffect, useState } from "react";
import { Col, Container, Offcanvas, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./topmenu.css";
import UseAuth from "./../../../hooks/useAuth/UseAuth";
const TopmMenu = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { user, LogOut } = UseAuth();
  const [orderDetail, setOrderDetail] = useState();
  const [orderProducts, setOrderProducts] = useState();
  useEffect(() => {
    fetch("https://fathomless-beyond-11252.herokuapp.com/ordersumary")
      .then((res) => res.json())
      .then((data) => {
        setOrderDetail(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://fathomless-beyond-11252.herokuapp.com/confimorder")
      .then((res) => res.json())
      .then((data) => {
        setOrderProducts(data);
        console.log("order data load", data.confirmed);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const myOrder = orderProducts?.length;
  const userOrder = orderDetail?.length;
  const totalOrder = myOrder + userOrder;
  console.log("user order:", userOrder);
  console.log("myorder:", myOrder);
  console.log("confirmorder", orderProducts);
  return (
    <div className="topMenu">
      <Container>
        <div className="topmenucontainer">
          <div className="contuct-topmenu">
            <div className="call-phone">
              <span className="contuct-icon">
                <i className="fas fa-phone-alt"></i>
              </span>
              <span className="phoneNumber">+88016-34900664</span>
            </div>
            <div className="addressCont">
              <span className="contuct-icon">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <span className="address">
                144,Bhaddar Hat,Chittagong,Bangladeh.
              </span>
            </div>
          </div>
          <div className="social-link">
            <span>
              <i className="fab fa-twitter social-icons"></i>
            </span>
            <span>
              <i className="fab fa-facebook social-icons"></i>
            </span>
            <span>
              <i className="fab fa-instagram-square social-icons"></i>
            </span>
            <span>
              <i className="fab fa-linkedin-in social-icons"></i>
            </span>

            <div className="login-top">
              {user.email ? (
                <Link
                  onClick={LogOut}
                  className="user-login-top-link"
                  to="/login"
                >
                  <i className="fas fa-sign-out-alt"></i>Log Out
                </Link>
              ) : (
                <Link className="user-login-top-link" to="/login">
                  <i className="far fa-user-circle user-login-top"></i> Login
                </Link>
              )}
            </div>
            <div className="cart">
              <i
                onClick={handleShow}
                className="fas fa-shopping-cart social-icons"
              >
                {totalOrder}
              </i>
            </div>
          </div>
          {/* start  canvas */}
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="my-order">
                <h1>My Bookig</h1> <p> {orderProducts?.length}</p>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Row className="g-3 mb-3">
                {orderProducts?.map((product, index) => (
                  <Col key={index} lg={6} sm={12} md={12}>
                    <div className="products-cont">
                      <img
                        className=" products-image"
                        src={product.image}
                        alt=""
                      />
                      <h4>{product.name}</h4>
                      <p>{product.country}</p>
                      <p>{product.address}</p>
                    </div>
                  </Col>
                ))}
              </Row>
              <h1 className="total-bookig">Total Booking:{totalOrder}</h1>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </Container>
    </div>
  );
};

export default TopmMenu;
