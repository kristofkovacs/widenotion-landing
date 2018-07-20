import React from "react";
import "./Gallery.css";
import GalleryImageHolder from "../components/GalleryImageHolder.js";
import Slider from "react-slick";

import gallery1 from "../img/gallery1.jpg";
import gallery2 from "../img/gallery2.jpg";
import gallery3 from "../img/gallery3.jpg";
import gallery4 from "../img/gallery4.png";

class Gallery extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <div className="gallery">
        <h2>Gallery</h2>
        <Slider className="gallery" {...settings}>
          <div>
            <img src={gallery1} />
          </div>
          <div>
            <img src={gallery2} />
          </div>
          <div>
            <img src={gallery3} />
          </div>
          <div>
            <img src={gallery1} />
          </div>
          <div>
            <img src={gallery2} />
          </div>{" "}
          <div>
            <img src={gallery3} />
          </div>{" "}
          <div>
            <img src={gallery1} />
          </div>{" "}
          <div>
            <img src={gallery2} />
          </div>{" "}
          <div>
            <img src={gallery3} />
          </div>{" "}
          <div>
            <img src={gallery1} />
          </div>
          <div />
        </Slider>
      </div>
    );
  }
}

export default Gallery;
