import React from "react";
import about from "../img/about.png";
import mobileAbout from "../img/mobileAbout.png";

import { Paragraph, Header1, Header2 } from "../styles";
import { Flex, Hide, Image } from "rebass";

const About = () => (
  <Flex className="about" mt={150} justifyContent="center">
    <Flex
      justifyContent="center"
      flexDirection="column"
      width={["92%", "90%", "85%", "80%", "70%"]}
    >
      <Header1 mb={40} fontSize={[28, 28, 38, 46, 48]}>
        About
      </Header1>
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection={[
          "column-reverse",
          "column-reverse",
          "row",
          "row",
          "row"
        ]}
      >
        <Flex
          flexDirection="column"
          css={{ textAlign: "left" }}
          mr={40}
          width={["100%", "100%", "65%", "60%", "50%"]}
        >
          <Paragraph
            mb={20}
            color={"lightgray"}
            fontSize={[14, 16, 16, 18, 18]}
          >
            This story is about a kid who had a dream and who wanted to be
            acknowledged in the dance music industry. Initially, he was refused
            by most artists and labels. After multiple rejections he finally
            discovered that he had to push himself forward, as no one will ever
            do that for him.
          </Paragraph>
          <Paragraph
            mb={20}
            color={"lightgray"}
            fontSize={[14, 16, 16, 18, 18]}
          >
            The whole Wide Notion Project was created in August 2015 by Lengyel
            Levente from Transylvania. It started publishing in January 2017,
            with a debut single called 'First Step' It was an organic project
            from the start and its final touches were created in collaboration
            with the 'METONYMY Recordings' label, founded by 'Wide Notion'
          </Paragraph>
          <Paragraph
            mb={20}
            color={"lightgray"}
            fontSize={[14, 16, 16, 18, 18]}
          >
            The Wide Notion and METONYMY Recordings are communicating their
            vision not just in a musical but also in a physical form. And behind
            the scenes there are years of continuous working, sacrificing and
            learning.
          </Paragraph>
          <Paragraph
            mb={20}
            color={"lightgray"}
            fontSize={[14, 14, 16, 18, 18]}
          >
            Some people believe in miracles: that they are going to be
            discovered. But miracles don't exist, so we have to create
            everything by ourselves. Don't forget, the key of success is in the
            action itself. It's in the work and sacrifice put into something.
            It's in the days when you're surrounded by doubt and negativity and
            you still carry on and follow your dreams.
          </Paragraph>
          <Header2 mb={20} fontSize={[18, 18, 22, 28, 28]}>
            This is what Wide Notion is about.
          </Header2>
        </Flex>
        <Hide xsmall small>
          <Image width="100%" mb={0} src={about} />
        </Hide>
        <Hide medium large xlarge>
          <Image width="100%" mb={20} src={mobileAbout} />
        </Hide>
      </Flex>
    </Flex>
  </Flex>
);

export default About;
