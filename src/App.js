import React from "react";
import logo from "./logo.svg";
import About from "./sections/About.js";
import Music from "./sections/Music.js";
import Gallery from "./sections/Gallery.js";
import Contact from "./sections/Contact.js";
import Nav from "./components/Nav.js";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <Nav />
      <About />
      <Music />
      <Gallery />
      <Contact />
    </ThemeProvider>
  </div>
);

export default App;
