import React from "react";
import "./banner-2.css";
import Zoom from "react-reveal/Zoom";
const Banner2 = () => {
  return (
    <div className="bannertowcontainer">
      <div className="play">
        <Zoom>
          <i className="fas fa-play-circle play-icon"></i>
        </Zoom>
      </div>
    </div>
  );
};

export default Banner2;
