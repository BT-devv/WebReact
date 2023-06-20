import React, { useState } from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "/img/banner/img_banner_01.jpg",
    "/img/banner/img_banner_02.jpg",
    "/img/banner/img_banner_03.jpg",
    "/img/banner/img_banner_04.jpg",
    "/img/banner/img_banner_05.jpg",
    "/img/banner/img_banner_06.jpg",
  ];

  const preSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="contain"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[3]} alt="" />
        <img src={data[4]} alt="" />
        <img src={data[5]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={preSlide}>
          <ArrowBackIosNewOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowForwardIosOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slide;
