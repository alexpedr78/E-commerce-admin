import React from "react";
import "./SideBar.css";
function SideBar() {
  return (
    <div className="sideBar">
      <p className="Home">
        <a href="">Home</a>
      </p>
      <p className="About">
        <a href="">About</a>
      </p>
    </div>
  );
}

export default SideBar;
