import React, { useState } from "react";
import BtnSlider from "./BtnSlider";
import { v4 as uuidv4 } from "uuid";
import "./Slider.css";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const dataSlider = [
    {
      id: uuidv4(),
      title: "Lorem ipsum",
      subTitle: "Lorem",
    },
    {
      id: uuidv4(),
      title: "Lorem ipsum",
      subTitle: "Lorem",
    },
    {
      id: uuidv4(),
      title: "Lorem ipsum",
      subTitle: "Lorem",
    },
    {
      id: uuidv4(),
      title: "Lorem ipsum",
      subTitle: "Lorem",
    },
    {
      id: uuidv4(),
      title: "Lorem ipsum",
      subTitle: "Lorem",
    },
    {
      id: uuidv4(),
      title: "Lorem ipsum",
      subTitle: "Lorem",
    },
    {
      id: uuidv4(),
      title: "Lorem ipsum",
      subTitle: "Lorem",
    },
    {
      id: uuidv4(),
      title: "Lorem ipsum",
      subTitle: "Lorem",
    },
    {
      id: uuidv4(),
      title: "Lorem ipsum",
      subTitle: "Lorem",
    },
    {
      id: uuidv4(),
      title: "Lorem ipsum",
      subTitle: "Lorem",
    },
    {
      id: uuidv4(),
      title: "Lorem ipsum",
      subTitle: "Lorem",
    },
  ];

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: 10 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default Slider;
