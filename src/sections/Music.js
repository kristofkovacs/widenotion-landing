import React from "react";
import beatport from "../img/beatport.svg";
import spotify from "../img/spotify.svg";
import itunes from "../img/itunes.svg";
import deezer from "../img/deezer.svg";
import metonymy from "../img/metonymy.svg";
import "./Music.css";

const Music = () => (
  <div className="music">
    <h2>My Music</h2>

    <ul className="music-list">
      <li className="music-item">
        <img src={beatport} />
        <p>Beatport</p>
      </li>
      <li className="music-item">
        <img src={spotify} />
        <p>Spotify</p>
      </li>
      <li className="music-item">
        <img src={itunes} />
        <p>iTunes</p>
      </li>
      <li className="music-item">
        <img src={deezer} />
        <p>Deezer</p>
      </li>
    </ul>
    <div className="music-metonymy">
      <h3>RELEASED BY</h3>
      <img src={metonymy} />
    </div>
  </div>
);

export default Music;
