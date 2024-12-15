import React, { useState } from "react";
import "./Slider.css";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ImgComp from "./ImgComp";
import i1 from "./images/10.avif";
import i2 from "./images/11.avif";
import i3 from "./images/12.avif";
import i4 from "./images/16.avif";
import i5 from "./images/23.avif";
import i6 from "./images/19.avif";
import i7 from "./images/24.avif";
import i8 from "./images/25.avif";
import i9 from "./images/21.avif";
import i10 from "./images/20.avif";
import i11 from "./images/35.avif";
import i12 from "./images/13.avif";
import i13 from "./images/22.avif";
import i14 from "./images/8.avif";
import i15 from "./images/18.avif";
import i16 from "./images/15.avif";
import i17 from "./images/17.avif";

function Slider() {
  let sliderArr = [
    <ImgComp src={i1} />,
    <ImgComp src={i2} />,
    <ImgComp src={i3} />,
    <ImgComp src={i4} />,
    <ImgComp src={i5} />,
    <ImgComp src={i6} />,
    <ImgComp src={i7} />,
    <ImgComp src={i8} />,
    <ImgComp src={i9} />,
    <ImgComp src={i10} />,
    <ImgComp src={i11} />,
    <ImgComp src={i12} />,
    <ImgComp src={i13} />,
    <ImgComp src={i14} />,
    <ImgComp src={i15} />,
    <ImgComp src={i16} />,
    <ImgComp src={i17} />,
  ];

  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <>
      {/* <h3 className="cont">Foto</h3> */}
      <div className="slider">
        {sliderArr.map((item, index) => {
          return (
            <div
              key={index}
              className="slide"
              style={{
                transform: `translateX(${x}%)`,
              }}
            >
              {item}
            </div>
          );
        })}
        <button id="goLeft" className="btn1" onClick={goLeft}>
          <ArrowLeftIcon className="arrow" />
        </button>
        <button id="goRight" className="btn1" onClick={goRight}>
          <ArrowRightIcon className="arrow" />
        </button>
      </div>
    </>
  );
}

export default Slider;
