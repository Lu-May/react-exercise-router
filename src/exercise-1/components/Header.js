import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/App.css";

const Header = () => {
  return (
    <nav className="webs">
      <Link to="/" className="webLink">
        <NavLink
          exact
          className="webLink"
          to="/"
          activeStyle={{
            textDecoration: "underline",
          }}
        >
          Home
        </NavLink>
      </Link>
      <Link to="/products" className="webLink">
        <NavLink
          exact
          className="webLink"
          to="/products"
          activeStyle={{
            textDecoration: "underline",
          }}
        >
          Products
        </NavLink>
      </Link>
      <Link to="/profile" className="webLink">
        <NavLink
          exact
          className="webLink"
          to="/profile"
          activeStyle={{
            textDecoration: "underline",
          }}
        >
          My Profile
        </NavLink>
      </Link>
      <Link to="/about" className="webLink">
        <NavLink
          exact
          className="webLink"
          to="/about"
          activeStyle={{
            textDecoration: "underline",
          }}
        >
          About Us
        </NavLink>
      </Link>
    </nav>
  );
};

export default Header;
