import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const navbar = () => {
  return (
    <div className="topnav">
      <a>
        <Link to="/about">About</Link>
      </a>

      <a>
        <Link to="/projects">Projects</Link>
      </a>

      <a>
        <Link to="/contact">Contact</Link>
      </a>
    </div>
  );
};
export default navbar;
