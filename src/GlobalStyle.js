import { createGlobalStyle } from "styled-components";

import { color } from "./styles";

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Neou-Thin";
  src: url("./neou//Neou-Thin.otf") format("opentype");
}

@font-face {
  font-family: "Neou-Bold";
  src: url("./neou//Neou-Bold.otf") format("opentype");
}

body {
  background-color: ${color.darkgray};
  font-family: "Neou-Bold";
  text-align: center;
  color: white;
  margin: 0;
}

*:visited {
  text-decoration: none;
}

*:link {
  text-decoration: none;
}

`;
