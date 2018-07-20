import React from "react";
import "./Contact.css";
import facebook from "../img/facebook.svg";
import instagram from "../img/instagram.svg";
import twitter from "../img/twitter.svg";

const Contact = () => (
  <div className="contact">
    <h2>Contact</h2>
    <ul className="contact-email">
      <li>
        <p className="contact-email-title">PRESS</p>
        <p>PRESS@WIDENOTIONMUSIC.NET</p>
      </li>
      <li>
        <p className="contact-email-title">PRESS</p>
        <p>PRESS@WIDENOTIONMUSIC.NET</p>
      </li>
      <li>
        <p className="contact-email-title">PRESS</p>
        <p>PRESS@WIDENOTIONMUSIC.NET</p>
      </li>
    </ul>
    <div className="contact-social">
      <a href="https://facebook.com/widenotionofficial" target="_blank">
        <img className="contact-social-item" src={facebook} />
      </a>
      <a href="https://facebook.com/widenotionofficial" target="_blank">
        <img className="contact-social-item" src={instagram} />
      </a>
      <a href="https://facebook.com/widenotionofficial" target="_blank">
        <img className="contact-social-item" src={twitter} />
      </a>
    </div>
  </div>
);

export default Contact;
