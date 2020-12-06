import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import HomeIcon from "@material-ui/icons/Home";
import EmailIcon from "@material-ui/icons/Email";
import InfoIcon from "@material-ui/icons/Info";
import ImageIcon from "@material-ui/icons/Image";
import ChildFriendlyIcon from "@material-ui/icons/ChildFriendly";

const Navbar = () => {
  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-dark n">
            <NavLink exact className="navbar-brand" to="/">
              dom rodzinny przy ul. Solnej &nbsp;
              <ChildFriendlyIcon></ChildFriendlyIcon>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
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
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/"
                  >
                    <HomeIcon></HomeIcon> Start
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/gallery"
                  >
                    <ImageIcon></ImageIcon> Galeria
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/about"
                  >
                    <InfoIcon></InfoIcon> O mnie
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/contact"
                  >
                    <EmailIcon></EmailIcon> Kontakt
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
