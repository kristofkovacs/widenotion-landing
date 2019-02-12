import React from "react";
import About from "./sections/About.js";
import Music from "./sections/Music.js";
import Gallery from "./sections/Gallery.js";
import Contact from "./sections/Contact.js";
import Nav from "./components/Nav.js";
import { Provider } from "rebass";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";

const App = () => (
  <Provider className="background" theme={theme}>
    <GlobalStyle />
    <Nav />
    <About />
    <Music />
    <Gallery />
    <Contact />
  </Provider>
);

export default App;
