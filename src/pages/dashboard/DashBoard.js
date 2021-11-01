import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ManageOrder from "../mangeOrder/ManageOrder";
import "./DashBoard.css";
const DashBoard = () => {
  return (
    <div>
      <Container>
        <div className="dashBoardContainer">
          <h1>Admin Dash Board:</h1>
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
          <Link className="text-white manageorder-link" to="/mangeorder">
            <p>
              <i className="fas fa-tasks myordericon"></i>
            </p>
            <p>Manage All Orders</p>
          </Link>
          <div className="addSpecialOffer"></div>
        </div>
      </Container>
    </div>
  );
};

export default DashBoard;
