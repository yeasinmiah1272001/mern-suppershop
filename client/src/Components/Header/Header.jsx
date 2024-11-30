import React from "react";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";

const Header = () => {
  // const token = localStorage.getItem("adminToken");
  // console.log("token", token);
  return (
    <div className="sticky top-0 bg-white z-30">
      <TopHeader />
      <BottomHeader />
    </div>
  );
};

export default Header;
