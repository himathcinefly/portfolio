import React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

const isActiveStyle = {};

const navbar = () => {
  return (
    <div className="topnav">
      <a>
        <NavLink
          style={({ isActive }) => (isActive ? isActiveStyle : {})}
          to="/"
        >
          {" "}
          About{" "}
        </NavLink>
      </a>

      <a>
        <NavLink
          style={({ isActive }) => (isActive ? isActiveStyle : {})}
          to="/projects"
        >
          {" "}
          Projects{" "}
        </NavLink>
      </a>

      <a>
        <NavLink
          style={({ isActive }) => (isActive ? isActiveStyle : {})}
          to="/contact"
        >
          {" "}
          Contact{" "}
        </NavLink>
      </a>
    </div>
  );
};
export default navbar;
