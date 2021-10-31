import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import "./yourneeds.css";
const YourNeeds = () => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));
  return (
    <div className="yourNeeds">
      <Container>
        <div className="info">
          <h3>Find Adventure That Suits Your Needs</h3>
        </div>
        <form className="select-dest" onSubmit={handleSubmit(onSubmit)}>
          <input {...register("firstName")} placeholder="First name" />
          <input {...register("lastName")} placeholder="Last name" />
          <select {...register("category")}>
            <option value="">Travel Type....</option>
            <option value="A">Adventure</option>
            <option value="B">Destination</option>
            <option value="C">Explore</option>
            <option value="D">Holidys</option>
            <option value="E">On Bugdet</option>
            <option value="F">Popular</option>
            <option value="I">Romantic</option>
          </select>

          <input type="submit" />
        </form>
      </Container>
    </div>
  );
};

export default YourNeeds;
