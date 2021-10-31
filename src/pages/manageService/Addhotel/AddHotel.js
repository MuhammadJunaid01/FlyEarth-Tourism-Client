import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddHotel.css";
import UseAuth from "./../../../hooks/useAuth/UseAuth";

const AddHotel = () => {
  const { user } = UseAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("https://fathomless-beyond-11252.herokuapp.comaddhotel", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(data);
  };

  return (
    <div>
      <h1>hello add hotel</h1>
      <Container>
        <div className="addhotelForm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="addhotel-input"
              {...register("name")}
              placeholder="Enter Your Hotel Name:"
            />
            <input
              className="addhotel-input"
              {...register("address")}
              placeholder="Enter Your Address"
            />
            <input
              className="addhotel-input"
              {...register("phone")}
              placeholder="Enter Your Phone Number:"
            />
            <input
              className="addhotel-input"
              {...register("email")}
              value={user?.email}
            />
            <input
              className="addhotel-input"
              type="text"
              {...register("image")}
              placeholder="Enter Your Hotel image Url:"
            />

            <input className="addhotel-input" type="submit" />
          </form>
        </div>
      </Container>
    </div>
  );
};

export default AddHotel;
