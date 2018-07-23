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
      {/* <a href="http://beatport.com" target="_blank">
        <li className="music-item">
          <img src={beatport} />
          <p>Beatport</p>
        </li>
      </a> */}
      <a
        href="https://open.spotify.com/artist/0FXGuFCHJLQ7f4avSm3L6W?si=K-zqGL8TQomQsSvSXb6pDQ"
        target="_blank"
      >
        <li className="music-item">
          <img src={spotify} />
          <p>Spotify</p>
        </li>
      </a>
      <a
        href="https://itunes.apple.com/ro/artist/wide-notion/1266727952"
        target="_blank"
      >
        <li className="music-item">
          <img src={itunes} />
          <p>iTunes</p>
        </li>
      </a>
      <a href="https://www.deezer.com/en/artist/12982849" target="_blank">
        <li className="music-item">
          <img src={deezer} />
          <p>Deezer</p>
        </li>
      </a>
    </ul>
    <div className="music-metonymy">
      <h3>RELEASED BY</h3>
      <a href="https://www.facebook.com/metonymyrecordings/" target="_blank">
        <img src={metonymy} />
      </a>
    </div>
  </div>
);

export default Music;
