import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sideBar">
      <p className="Home">
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/AboutUs" className="About">
          About US
        </Link>
      </p>
    </div>
  );
}

export default SideBar;
