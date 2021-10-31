import React from "react";
import Banner from "../banner/Banner";
import NavigationBar from "../menu/Navigation/NavigationBar";
import TopmMenu from "../menu/topMenu/TopmMenu";

const TopHeader = () => {
  return (
    <div>
      <TopmMenu></TopmMenu>
      <NavigationBar></NavigationBar>
      <Banner></Banner>
    </div>
  );
};

export default TopHeader;
