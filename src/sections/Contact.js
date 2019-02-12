import React from "react";
import facebook from "../img/facebook.svg";
import instagram from "../img/instagram.svg";
import twitter from "../img/twitter.svg";

import { Header1, Header2, Paragraph } from "../styles";
import { Flex, Image, NavLink } from "rebass";

const Contact = () => (
  <Flex
    className="contact"
    flexDirection="column"
    alignItems="center"
    mt={[80, 80, 100, 120, 150]}
    mb={[50, 50, 120, 150, 200]}
  >
    <Header1 mb={[40, 40, 60, 80, 100]} fontSize={[28, 28, 38, 46, 48]}>
      Contact
    </Header1>
    <Flex flexDirection="column">
      <ContactEmailItem
        type={"PRESS"}
        email={"press@widenotionmusic.net"}
        mb={45}
      />
      <ContactEmailItem
        type={"CONTACT"}
        email={"contact@widenotionmusic.net"}
        mb={45}
      />
      <ContactEmailItem
        type={"BOOKING"}
        email={"booking@widenotionmusic.net"}
      />
    </Flex>
    <Flex mt={[20, 20, 50, 70, 80]} flexWrap="wrap" justifyContent="center">
      <ContactSocialItem
        link={"https://facebook.com/widenotionofficial"}
        image={facebook}
      />
      <ContactSocialItem
        link={"https://www.instagram.com/wide.notion/"}
        image={instagram}
      />
      <ContactSocialItem
        link={"https://twitter.com/WideNotionMusic"}
        image={twitter}
      />
    </Flex>
  </Flex>
);

const ContactEmailItem = ({ email, type, ...rest }) => (
  <Flex
    {...rest}
    flexDirection={["column", "column", "row"]}
    justifyContent="space-between"
    alignItems="center"
    flexWrap="wrap"
  >
    <Header2 color="lightgray" fontSize={[18, 18, 22, 28, 28]}>
      {type}
    </Header2>
    <NavLink href={"mailto:" + email} target="_top">
      <Paragraph
        fontSize={[18, 18, 20, 24, 24]}
        css={{ "&:hover": { color: "lightgray" } }}
      >
        {email.toUpperCase()}
      </Paragraph>
    </NavLink>
  </Flex>
);

const ContactSocialItem = ({ link, image, ...rest }) => (
  <NavLink
    href={link}
    target="_blank"
    my={[10, 10, 20, 30]}
    mx={[15, 20, 30, 40, 50]}
    css={{
      transition: "all 0.2s ease-in-out",
      "&:hover": { color: "lightgray", opacity: "0.8", transform: "scale(1.1)" }
    }}
  >
    <Image src={image} width={[65, 68, 75, 85, 92]} />
  </NavLink>
);

export default Contact;
