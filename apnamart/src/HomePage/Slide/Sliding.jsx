import React from 'react';
import { useRef } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import styles from "./Shop.module.css";
import { lengthdata } from '../../data';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Sliding = () => {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        arrow:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      
      const sliderRef = useRef(null);
      useEffect(() => {
        console.log(sliderRef);
      }, []);
      

  return (
    <div className={styles.shopm}> 
    <div className={styles.forflex}>
      <div className={styles.lefty} onClick={() => sliderRef.current.slickPrev()}>     
       <ChevronLeftIcon style={{fontSize:"2.5rem", color:"gray", fontWeight:"100"}} />
     </div>
     <div className={styles.contain}>
    
         <Slider ref={sliderRef}{...settings}>
             { lengthdata.map((list, i) => {
              return (    
              <div className={styles.shop}>
                  <img className={styles.alovera} 
                   src={list.image} alt={list.n} />

              </div>
              )}) }
          </Slider>
      </div>
       <div className={styles.righty}  onClick={() => sliderRef.current.slickNext()}>
          <ChevronRightIcon style={{fontSize:"2.5rem", color:"gray", fontWeight:"100"}}/>
       </div>
       </div>
</div>
  )
}

export default Sliding