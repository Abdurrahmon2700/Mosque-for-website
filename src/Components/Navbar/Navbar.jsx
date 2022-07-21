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
      <div classNameName="navbar_site">
        <nav className="navbar navbar-expand-lg bg-light">
          <div>
            <a classNameName="d-flex justify-content-start mb-3" href="#">
              <h1 classNameName="mb-0">Alkavsar.uz</h1>
            </a>
          </div>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li>
                  <NavLink
                    to="/Home"
                    classNameName=""
                    aria-current="page"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/About"
                    classNameName=""
                    aria-current="page"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Service"
                    classNameName=""
                    aria-current="page"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Service
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Feature"
                    classNameName=""
                    aria-current="page"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Feature
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Blog"
                    classNameName=""
                    aria-current="page"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Contact"
                    classNameName=""
                    aria-current="page"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex" role="search"></form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
