import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import About from "./sections/About.js";
import Music from "./sections/Music.js";
import Gallery from "./sections/Gallery.js";
import Contact from "./sections/Contact.js";
import Nav from "./components/Nav.js";

class App extends Component {
  render() {
    return (
      <div className="home">
        <Nav />
        <About />
        <Music />
        <Gallery />
        <Contact />
      </div>
    );
  }
}

export default App;
