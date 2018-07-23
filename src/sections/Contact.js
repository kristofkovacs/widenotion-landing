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
        <a href="mailto:press@widenotionmusic.net" target="_top">
          <p>PRESS@WIDENOTIONMUSIC.NET</p>
        </a>
      </li>
      <li>
        <p className="contact-email-title">CONTACT</p>
        <a href="mailto:contact@widenotionmusic.net" target="_top">
          <p>CONTACT@WIDENOTIONMUSIC.NET</p>
        </a>
      </li>
      <li>
        <p className="contact-email-title">BOOKING</p>
        <a href="mailto:booking@widenotionmusic.net" target="_top">
          <p>BOOKING@WIDENOTIONMUSIC.NET</p>
        </a>
      </li>
    </ul>
    <div className="contact-social">
      <a href="https://facebook.com/widenotionofficial" target="_blank">
        <img className="contact-social-item" src={facebook} />
      </a>
      <a href="https://www.instagram.com/wide.notion/" target="_blank">
        <img className="contact-social-item" src={instagram} />
      </a>
      <a href="https://twitter.com/WideNotionMusic" target="_blank">
        <img className="contact-social-item" src={twitter} />
      </a>
    </div>
  </div>
);

export default Contact;
