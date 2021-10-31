import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./manage.css";
const ManageOrder = () => {
  const [manage, setManage] = useState();
  useEffect(() => {
    fetch("https://fathomless-beyond-11252.herokuapp.com/confimorder")
      .then((res) => res.json())
      .then((data) => setManage(data));
  }, [manage]);
  //   console.log("manage", manage);
  const handleDelete = (id) => {
    console.log("delete id", id);
    fetch(`https://fathomless-beyond-11252.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    }).then((res) => {
      console.log("dele", res);
    });
  };
  return (
    <div className="manageContainer">
      <h1>Manage Your Order</h1>
      <Container>
        <Row className="g-3">
          {manage?.map((manage, index) => (
            <Col key={index} lg={4} md={12} sm={12}>
              <div className="manage-cont">
                <img
                  className="img-fluid mange-img"
                  src={manage.image}
                  alt=""
                />
                <div className="manage-info">
                  <p>{manage.address}</p>
                  <p>{manage.country}</p>
                  <p>{manage.name}</p>
                </div>
                <button
                  onClick={() => handleDelete(manage._id)}
                  className="btn  btn-outline-danger delete-btn"
                >
                  Delete
                </button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ManageOrder;
