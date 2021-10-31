import React from "react";
import Banner2 from "../banner-2/Banner2";
import Hotels from "../manageService/Hotels/Hotels";
import Offer from "../offer/Offer";
import TourPlan from "../tourPlan/TourPlan";
import YourNeeds from "../YourNeeds/YourNeeds";

const Home = () => {
  return (
    <div>
      <YourNeeds></YourNeeds>
      <TourPlan></TourPlan>
      <Offer></Offer>
      <Banner2></Banner2>
      <Hotels></Hotels>
    </div>
  );
};

export default Home;
