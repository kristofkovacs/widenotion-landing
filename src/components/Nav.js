import React, { Component } from "react";
import logo from "../img/wn.svg";
import { animateScroll, Link as LinkBase } from "react-scroll";
import { Box, Fixed, Flex, Image, Toolbar } from "rebass";
import styled from "styled-components";
import { MenuText } from "../styles";

export const Link = styled(LinkBase)`
  font-family: "Neou-Bold";
  color: #fff;
  &:hover {
    color: #c1c1c1;
    cursor: pointer;
  }
`;

class Nav extends Component {
  scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  render() {
    return (
      <Fixed zIndex={10} top={0} left={0} right={0} p={0} m={0}>
        <Toolbar
          bg="darkgray"
          flexDirection="column"
          alignItems={ "center"}
          px={[0, 0, 0, 0, 0]}
          m={0}
          css={{
            overflowX: "scroll",
            "&::-webkit-scrollbar": {
              display: "none"
            }
          }}
        >
          <Flex
            flexDirection={["column", "column", "row"]}
            justifyContent="center"
            alignItems="center"
          >
            <Flex>
              <Link
                mx={["5px","10px","30px"]}
                activeClass="active"
                onClick={this.scrollToTop}
                to="nav"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Image
                mx={["5px","20px","40px"]}
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
              justifyContent="space-around"
              alignItems="center"
              flexDirection="row"
              py={[3, 3, 20, 25, 30]}
            >
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-120}
              >
                <MenuText mx={["5px","10px","20px"]} fontSize={[16, 18, 20, 22]}>About</MenuText>
              </Link>
              <Link
                to="music"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-120}
              >
                <MenuText mx={["5px","10px","20px"]} fontSize={[16, 18, 20, 22]}>Music</MenuText>
              </Link>
              <Link to="gallery" smooth={true} duration={1000} offset={-120}>
                <MenuText mx={["5px","10px","20px"]} fontSize={[16, 18, 20, 22]}>Gallery</MenuText>
              </Link>
              <Link to="contact" smooth={true} duration={1000} offset={-120}>
                <MenuText mx={["5px","10px","20px"]} fontSize={[16, 18, 20, 22]}>Contact</MenuText>
              </Link>
            </Flex>
          </Flex>
          <Box
            bg="#fff"
            css={{ height: "1px" }}
            m={0}
            p={0}
            width={["100%", "100%", "100%", "85%", "75%"]}
          />
        </Toolbar>
      </Fixed>
    );
  }
}

export default Nav;
