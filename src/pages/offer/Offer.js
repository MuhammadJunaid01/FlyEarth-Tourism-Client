import React from "react";
import SpecialOffer from "../specialoffer/SpecialOffer";
import TravelGuide from "../travelguide/TravelGuide";
import LastMinitOffer from "./lastMinitOffer/LastMinitOffer";

const Offer = () => {
  return (
    <div>
      <LastMinitOffer></LastMinitOffer>
      <TravelGuide></TravelGuide>
      <SpecialOffer></SpecialOffer>
    </div>
  );
};

export default Offer;
