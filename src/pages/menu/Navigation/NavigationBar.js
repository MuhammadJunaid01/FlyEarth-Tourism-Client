import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigat.css";
import UseAuth from "./../../../hooks/useAuth/UseAuth";
const NavigationBar = () => {
  const { user } = UseAuth();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Fly Earth</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="link" to="/home">
                HOME
              </Link>
              <Link className="link" to="/about">
                ABOUT
              </Link>
              <Link className="link" to="/destination">
                DESTINATION
              </Link>
              <Link className="link" to="/tours">
                TOURS
              </Link>
              <Link className="link" to="/blogs">
                BLOG
              </Link>

              <Link className="link" to="/dashboard">
                DASHBOARD
              </Link>

              <Link className="link" to="/contuct">
                CONTUCT
              </Link>
            </Nav>
            {user.email && (
              <img className="user-image" src={user?.photoURL} alt="" />
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
