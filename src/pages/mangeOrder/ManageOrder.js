import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import "./manage.css";
import { Spinner, Button } from "react-bootstrap";
import UseAuth from "./../../hooks/useAuth/UseAuth";
const ManageOrder = () => {
  const { user } = UseAuth();
  console.log(user);
  const [manage, setManage] = useState();
  useEffect(() => {
    fetch("https://fathomless-beyond-11252.herokuapp.com/confimorder")
      .then((res) => res.json())
      .then((data) => {
        data.status = "Pending......";
        setManage(data);
      });
  }, []);
  console.log(manage);
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
      <Container>
        <Row className="g-3">
          {manage?.map((manages, index) => (
            <Col key={index} lg={4} md={12} sm={12}>
              <div className="manage-cont">
                <img
                  className="img-fluid mange-img"
                  src={manages.image}
                  alt=""
                />
                <div>
                  <h1>
                    Cost: <span className="text-danger">{manages.price}</span>{" "}
                  </h1>
                  <h2 className="text-info">{manages.name}</h2>
                  <p>{manages.info}</p>
                </div>
              </div>
            </Col>
          ))}
          {manage?.map((tableListmange, index) => (
            <div key={index}>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Delete</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>{user?.displayName}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(tableListmange._id)}
                        className="btn  btn-outline-danger "
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <Button variant="primary" disabled>
                        <Spinner
                          as="span"
                          animation="grow"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                        {manage?.status}
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ManageOrder;
