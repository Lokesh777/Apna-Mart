import React from 'react'
import { useRef } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import styles from "./Shop.module.css";
import { categorydata } from '../../data';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Category = () => {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        arrow:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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
    <div className={styles.shopc}> 
    <h3 className={styles.tim}>Shop by Categories</h3>
    <div className={styles.forflex}>
      <div className={styles.lefty} onClick={() => sliderRef.current.slickPrev()}>     
       <ChevronLeftIcon style={{fontSize:"2.5rem", color:"gray", fontWeight:"100"}} />
     </div>
     <div className={styles.contain}>
    
         <Slider ref={sliderRef}{...settings}>
             { categorydata.map((list, i) => {
              return (    
              <div className={styles.shop}>
                  <img className={styles.dark} 
                  style={{height:"15rem",width:"12rem"}} src={list.image} alt={list.n} />
                  <p className={styles.air}>{list.title}</p>
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

export default Category