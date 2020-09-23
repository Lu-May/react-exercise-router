import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

const Header = () => {
  return (
    <nav className="webs">
      <Link to="/" className="webLink">
        Home
      </Link>
      <Link to="/about" className="webLink">
      My Profile
      </Link>
      <Link to="/profile" className="webLink">
      About us
      </Link>
    </nav>
  );
};

export default Header;
