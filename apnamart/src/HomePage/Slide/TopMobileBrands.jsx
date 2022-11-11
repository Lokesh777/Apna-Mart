import React from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import styles from "./Slide.module.css";
import { GrocerieSlider, mobileTopBrands, SmartPhonesSlider } from "../../data";

const TopMobileBrands
 = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrow: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = useRef(null);
  useEffect(() => {
    console.log(sliderRef);
  }, []);

  return (
    <div className={styles.Mobilemancan}>
      <div className={styles.ahm}>
        <div
          className={styles.cleft}
          onClick={() => sliderRef.current.slickPrev()}
        >
          <ChevronLeftIcon
            style={{ fontSize: "2.5rem", color: "gray", fontWeight: "100" }}
          />
        </div>
      </div>
      <div className={styles.Mobilecan}>
        <Slider ref={sliderRef} {...settings}>
          {mobileTopBrands.map((list, i) => {
            return (
              <div className={styles.Mgrow}>
                

                  <img className={styles.Mreso} src={list.imgSrc} alt={list.n} />
   
                 
                
              </div>
            );
          })}
        </Slider>
      </div>
      <div
        className={styles.cright}
        onClick={() => sliderRef.current.slickNext()}
      >
        <ChevronRightIcon
          style={{ fontSize: "2.5rem", color: "gray", fontWeight: "100" }}
        />
      </div>
    </div>
  );
};

export default TopMobileBrands
;
