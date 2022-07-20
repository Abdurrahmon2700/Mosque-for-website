import React from "react";
import Logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import Navbarr from "../Navbar/Navbar.css";

let activeStyle = {
  color: "green",
  borderBottom: "2px solid #FD8C73",
};

function Navbar(props) {
  return (
    <>
      <div className="navbar_site">
        <ul className="navbar_list">
          <li className="mb-0">
            <a className="d-flex justify-content-start mb-3" href="#">
              <h1 className="mb-0">Alkavsar.uz</h1>
            </a>
          </li>
          <li>
            <NavLink
              to="/Home"
              className=""
              aria-current="page"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className=""
              aria-current="page"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Service"
              className=""
              aria-current="page"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Feature"
              className=""
              aria-current="page"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Feature
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Blog"
              className=""
              aria-current="page"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className=""
              aria-current="page"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
