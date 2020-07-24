import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Switch, Route } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/contact" className="button">
        Contact
      </Link>
      <Link to="/about" className="button">
        About
      </Link>
      <Link to="/work" className="button">
        Work
      </Link>
    </div>
  );
};

export default Navbar;
