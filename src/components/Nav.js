import React from "react";
import logo from "../img/wn.svg";
import { Link as LinkBase } from "react-scroll";
import { Box, Fixed, Flex, Image } from "rebass";
import styled from "styled-components";

export const Link = styled(LinkBase)`
  margin: 0px 30px;
  font-family: "Neou-Bold";
  color: #fff;
  &:hover {
    color: #c1c1c1;
    cursor: pointer;
  }
`;

const Nav = () => (
  <Fixed className="nav" zIndex={1} top={0} bg="darkgray" right={0} left={0}>
    <Flex flexDirection="column" alignItems="center">
      <Flex
        flexDirection={["column", "column", "row"]}
        justifyContent="center"
        alignItems="center"
      >
        <Flex>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Image
              width={[55, 60, 65, 70, 75]}
              css={{
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  color: "#c1c1c1",
                  opacity: "0.8",
                  transform: "scale(1.1)",
                  cursor: "pointer"
                }
              }}
              src={logo}
            />
          </Link>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
          py={[3, 3, 20, 25, 30]}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={1000}
            offset={-80}
          >
            About
          </Link>
          <Link
            to="music"
            spy={true}
            smooth={true}
            duration={1000}
            offset={-120}
          >
            Music
          </Link>
          <Link to="gallery" smooth={true} duration={1000} offset={-120}>
            Gallery
          </Link>
          <Link to="contact" smooth={true} duration={1000} offset={-120}>
            Contact
          </Link>
        </Flex>
      </Flex>
      <Box
        bg="#fff"
        css={{ height: "1px" }}
        m={0}
        width={["100%", "100%", "100%", "80%", "75%"]}
      />
    </Flex>
  </Fixed>
);

export default Nav;
