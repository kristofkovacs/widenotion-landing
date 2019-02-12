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
    mt={150}
    mb={200}
  >
    <Header1 mb={100}>Contact</Header1>
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
        mb={45}
      />
    </Flex>
    <Flex mt={80} flexWrap="wrap">
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
    flexDirection="row"
    justifyContent="space-between"
    alignItems="center"
    flexWrap="wrap"
  >
    <Header2 color="lightgray">{type}</Header2>
    <NavLink href={"mailto:" + email} target="_top">
      <Paragraph fontSize={24} css={{ "&:hover": { color: "lightgray" } }}>
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
    <Image src={image} />
  </NavLink>
);

export default Contact;
