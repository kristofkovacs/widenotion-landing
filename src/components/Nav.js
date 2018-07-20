import React from "react";
import "./Nav.css";
import logo from "../img/wn.svg";

const Nav = () => (
  <div className="nav">
    <div className="nav-content">
      <img className="nav-logo" src={logo} />
      <ul className="nav-list">
        <li className="nav-item">About</li>
        <li className="nav-item">My Music</li>
        <li className="nav-item">Gallery</li>
        <li className="nav-item">Contact Me</li>
      </ul>
    </div>
    <hr />
  </div>
);

export default Nav;
