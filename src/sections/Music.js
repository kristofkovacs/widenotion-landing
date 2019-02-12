import React from "react";
import beatport from "../img/beatport.svg";
import spotify from "../img/spotify.svg";
import itunes from "../img/itunes.svg";
import deezer from "../img/deezer.svg";
import metonymy from "../img/metonymy.svg";

import { Header1, Header2 } from "../styles";
import { Flex, Image, NavLink } from "rebass";

const Music = () => (
  <Flex mt={150} className="music" flexDirection="column">
    <Header1 mb={80} fontSize={[28, 28, 38, 46, 48]}>
      My Music
    </Header1>

    <Flex flexWrap="wrap" justifyContent="center">
      <MusicItem
        mx={50}
        link={
          "https://open.spotify.com/artist/0FXGuFCHJLQ7f4avSm3L6W?si=K-zqGL8TQomQsSvSXb6pDQ"
        }
        image={beatport}
        label={"Beatport"}
      />

      <MusicItem
        mx={50}
        link={
          "https://open.spotify.com/artist/0FXGuFCHJLQ7f4avSm3L6W?si=K-zqGL8TQomQsSvSXb6pDQ"
        }
        image={spotify}
        label={"Spotify"}
      />
      <MusicItem
        mx={50}
        link={"https://itunes.apple.com/ro/artist/wide-notion/1266727952"}
        image={itunes}
        label={"iTunes"}
      />
      <MusicItem
        mx={50}
        link={"https://www.deezer.com/en/artist/12982849"}
        image={deezer}
        label={"Deezer"}
      />
    </Flex>
    <Flex mt={100} alignItems="center" justifyContent="center">
      <Header2 mr={25} fontSize={[18, 18, 22, 28, 28]}>
        RELEASED BY
      </Header2>
      <NavLink
        href="https://www.facebook.com/metonymyrecordings/"
        target="_blank"
      >
        <Image
          src={metonymy}
          css={{
            transition: "all 0.15s ease-in-out",
            "&:hover": {
              color: "#c1c1c1",
              opacity: "0.8",
              transform: "scale(1.05)",
              cursor: "pointer"
            }
          }}
        />
      </NavLink>
    </Flex>
  </Flex>
);

const MusicItem = ({ link, image, label, ...rest }) => (
  <NavLink
    {...rest}
    href={link}
    target="_blank"
    css={{
      transition: "all 0.15s ease-in-out",
      "&:hover": {
        color: "#c1c1c1",
        opacity: "0.8",
        transform: "scale(1.05)",
        cursor: "pointer"
      }
    }}
  >
    <Flex flexDirection="column" alignItems="center">
      <Image width={[95, 100, 120, 175]} src={image} mb={[15, 15, 30]} />
      <Header2 fontSize={[18, 18, 22, 28, 28]}>{label}</Header2>
    </Flex>
  </NavLink>
);

export default Music;
