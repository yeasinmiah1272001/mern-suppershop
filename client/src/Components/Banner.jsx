import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Container from "./Container";
import banner3 from "../assets/banner/banner3.gif";
import banner4 from "../assets/banner/banner2.jpg";
import banner5 from "../assets/banner/honey2.jpg";
import banner6 from "../assets/banner/honey3.jpg";
import banner7 from "../assets/banner/oil2.webp";
import banner8 from "../assets/shop2.avif";
import banner9 from "../assets/shop3.jpg";
import banner10 from "../assets/book2.jpg";
import banner11 from "../assets/oil.jpg";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    arrows: false,
  };

  return (
    <Container className="grid grid-cols-1 md:grid-cols-6 gap-3 h-auto md:h-96 p-4">
      {/* Main Carousel */}
      <div className="col-span-1 md:col-span-4 mb-3 md:mb-0">
        <div className="h-full">
          <Slider {...settings}>
            <div>
              <img
                src={banner8}
                alt="Banner 1"
                className="w-full h-[450px] object-cover rounded-md"
              />
            </div>
            <div>
              <img
                src={banner9}
                alt="Banner 1"
                className="w-full h-[450px] object-cover rounded-md"
              />
            </div>

            <div>
              <img
                src={banner5}
                alt="Banner 1"
                className="w-full h-[450px] object-cover rounded-md"
              />
            </div>
            <div>
              <img
                src={banner10}
                alt="Banner 1"
                className="w-full h-[450px] object-cover rounded-md"
              />
            </div>
            <div>
              <img
                src={banner6}
                alt="Banner 2"
                className="w-full h-[450px] object-cover rounded-md"
              />
            </div>
            <div>
              <img
                src={banner11}
                alt="Banner 1"
                className="w-full h-[450px] object-cover rounded-md"
              />
            </div>
            <div>
              <img
                src={banner7}
                alt="Banner 3"
                className="w-full h-[450px] object-cover rounded-md"
              />
            </div>
          </Slider>
          {/* <Slider {...settings}>
            <div>
              <img
                src={banner}
                alt="Banner 1"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div>
              <img
                src={banner1}
                alt="Banner 2"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div>
              <img
                src={banner2}
                alt="Banner 3"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </Slider> */}
        </div>
      </div>

      {/* Side Images */}
      <div className="grid grid-rows-2 gap-3 col-span-1 md:col-span-2">
        <div className="h-full">
          <img
            src={banner4}
            alt="Banner 5"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="h-full">
          <img
            src={banner3}
            alt="Banner 4"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
