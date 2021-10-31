import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DashBoard.css";
const DashBoard = () => {
  return (
    <div>
      <h1>hello dash board</h1>
      <Container>
        <div className="dashBoardContainer">
          <Link className="text-white" to="/addhotel">
            <div className="addhotel">
              <span className="addhotelicon">
                <i className="fas fa-plus"></i>
              </span>
              <p>Add Hotel</p>
            </div>
          </Link>
          <Link className="text-white" to="/myorder">
            <div className="myorder">
              <span className="myordericon">
                <i className="fas fa-user"></i>
              </span>

              <p>My Order</p>
            </div>
          </Link>
          <div className="addSpecialOffer"></div>
        </div>
      </Container>
    </div>
  );
};

export default DashBoard;
