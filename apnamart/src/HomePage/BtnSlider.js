import React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Slider.css';


export default function BtnSlider({ direction, moveSlide }) {
  // console.log(direction, moveSlide);
  return (
  
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? <ArrowForwardIosIcon/> : <ArrowBackIosIcon/>} 
    </button>
   
  );
}

