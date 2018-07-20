import React from "react";
import about from "../img/about.png";
import "./About.css";

const About = () => (
  <div className="about">
    <h2>About</h2>
    <div className="about-content">
      <div className="about-texts">
        <p>
          This story is about a kid who had a dream and who wanted to be
          acknowledged in the dance music industry. Initially, he was refused by
          most artists and labels. After multiple rejections he finally
          discovered that he had to push himself forward, as no one will ever do
          that for him.
        </p>
        <p>
          The whole Wide Notion Project was created in August 2015 by Lengyel
          Levente from Transylvania. It started publishing in January 2017, with
          a debut single called 'First Step' It was an organic project from the
          start and its final touches were created in collaboration with the
          'METONYMY Recordings' label, founded by 'Wide Notion'
        </p>
        <p>
          The Wide Notion and METONYMY Recordings are communicating their vision
          not just in a musical but also in a physical form. And behind the
          scenes there are years of continuous working, sacrificing and
          learning.{" "}
        </p>
        <p>
          Some people believe in miracles: that they are going to be discovered.
          But miracles don't exist, so we have to create everything by
          ourselves. Don't forget, the key of success is in the action itself.
          It's in the work and sacrifice put into something. It's in the days
          when you're surrounded by doubt and negativity and you still carry on
          and follow your dreams.{" "}
        </p>
        <p>
          <span>This is what Wide Notion is about.</span>
        </p>
      </div>
      <img src={about} />
    </div>
  </div>
);

export default About;
