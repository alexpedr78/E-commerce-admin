import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="NavBar">
      <div >
        <img className="logo" src="/img/logo.png" alt="" />
        <h1>Mary Poppin's bag</h1>
        <img className="logo" src="/img/logo.png" alt="" />
      </div>
  
    </nav>
  );
}

export default Navbar;
