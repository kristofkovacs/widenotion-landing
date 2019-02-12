import React from "react";
import "./Nav.css";
import logo from "../img/wn.svg";
import { Link } from "react-scroll";

const Nav = () => (
  <div className="nav">
    <div className="nav-content">
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        duration={500}
      >
        <img className="nav-logo" src={logo} />
      </Link>
      <ul className="nav-list">
        <Link to="about" spy={true} smooth={true} duration={1000} offset={-80}>
          <li className="nav-item">About</li>
        </Link>
        <Link to="music" spy={true} smooth={true} duration={1000} offset={-120}>
          <li className="nav-item">My Music</li>
        </Link>
        <Link to="gallery" smooth={true} duration={1000} offset={-120}>
          <li className="nav-item">Gallery</li>
        </Link>
        <Link to="contact" smooth={true} duration={1000} offset={-120}>
          <li className="nav-item">Contact Me</li>
        </Link>
      </ul>
    </div>
    <hr />
  </div>
);

export default Nav;
