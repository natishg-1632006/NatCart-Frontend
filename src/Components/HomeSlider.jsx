import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from "/Image/1.webp"
import slide2 from "/Image/2.webp"

const HomeSlider = () => {
   const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  
  return (
   
    <>
    <div className="w-3/4 mx-auto">
      <div className="pt-5 ">
      <Slider {...settings} >
        <div>
          <img src={slide1} alt="Slide1" />
        </div>
        <div>
          <img src={slide2} alt="Slide1" />
        </div>
        <div>
          <img src={slide1} alt="Slide1" />
        </div>
        <div>
          <img src={slide2} alt="Slide1" />
        </div>
      </Slider>
      </div>
    </div>
    </>
  )
}

export default HomeSlider
