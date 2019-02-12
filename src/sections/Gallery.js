import React from "react";
import Slider from "react-slick";

import { Header1 } from "../styles";
import { Flex, Hide, Image } from "rebass";

import gallery1 from "../img/gallery1.jpg";
import gallery2 from "../img/gallery2.jpg";
import gallery3 from "../img/gallery3.jpg";

const gallery = [gallery1, gallery2, gallery3, gallery1];

class Gallery extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 500,
      slidesToScroll: 1,
      loop: true,
      arrows: false,
      variableWidth: false
    };
    return (
      <Flex className="gallery" flexDirection="column" mt={100}>
        <Header1 mb={[30, 50, 80, 100]}>Gallery</Header1>
        <Hide small medium large xlarge>
          <Slider className="gallery" {...settings} slidesToShow={1}>
            {gallery.map(image => (
              <Flex>
                <Image src={image} css={{ height: "300px" }} />
              </Flex>
            ))}
          </Slider>
        </Hide>
        <Hide xsmall large xlarge>
          <Slider className="gallery" {...settings} slidesToShow={2}>
            {gallery.map(image => (
              <Flex>
                <Image src={image} css={{ height: "400px" }} />
              </Flex>
            ))}
          </Slider>
        </Hide>
        <Hide xsmall small medium>
          <Slider className="gallery" {...settings} slidesToShow={3}>
            {gallery.map(image => (
              <Flex>
                <Image src={image} css={{ height: "400px" }} />
              </Flex>
            ))}
          </Slider>
        </Hide>
      </Flex>
    );
  }
}

export default Gallery;
