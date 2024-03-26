import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sideBar">
      <div className="linkSide">
        <p className="Home">
          <Link to="/"><img className="homeImg" src="https://image.pngaaa.com/627/2341627-middle.png" alt=" Home" /></Link>
        </p>
        <p>
          <Link to="/AboutUs" className="About"> <img className="aboutUsImg" src="/img/mary.png" alt="About US" />
          About US
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SideBar;
