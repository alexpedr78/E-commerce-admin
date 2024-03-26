import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="NavBar">
      <img className="logo" src="/img/mary.png" alt="" />
      <h1>
        <Link to={"/"}>Mary Poppin's bag</Link>
      </h1>
      <img className="logo" src="/img/mary.png" alt="" />
    </nav>
  );
}

export default Navbar;
