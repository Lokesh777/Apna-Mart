import React from 'react'

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useRef } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import styles from "./Slide.module.css";
import { GrocerieSlider } from '../../data';



const MultipleSlide = () => {

  

var settings = {
  dots: true,
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
    <div className={styles.mancan}>
      <div className={styles.ahm}>

      <div className={styles.cleft} onClick={() => sliderRef.current.slickPrev()}>     
             <ChevronLeftIcon style={{fontSize:"2.5rem", color:"gray", fontWeight:"100"}} />
      </div>
       </div>
   <div className={styles.can}>
    
           <Slider
            ref={sliderRef}

            {...settings}>
                    { GrocerieSlider.map((list, i) => {
                            return (
                              
                        <div className={styles.grow}>
                      
                            <div className={styles.blow}>
                                  <div className={styles.discountdiv}>
                                      <p className={styles.discount}>33 % OFF</p>
                                      <img className={styles.discountimg} src="https://i.ibb.co/Yd3ZVDg/badge.png" 
                                      alt="badge" border="0" />
                                </div>
                                      <img className={styles.reso} src={list.imgSrc} alt={list.n} />
                                      <p className={styles.heading}>{list.heading}</p>
                                      <p className={styles.price}>{list.price}</p>
                                        <p className={styles.mrp}>{list.mrp}<> </></p>
                                      <p className={styles.rupees}>{list.rupees}</p>
                                      <p className={styles.save}>{list.save}</p>
                                      <button className={styles.addtocart}>Add to cart
                                          <img className={styles.add} src="https://i.ibb.co/QHDtjF4/plus.png" 
                                          alt="plus" border="0" />
                                    </button>
                    
                        </div>
                        </div>
                            )
                        })
                    }
                </Slider>

                </div>
                <div className={styles.cright}  onClick={() => sliderRef.current.slickNext()}>
                  <ChevronRightIcon style={{fontSize:"2.5rem", color:"gray", fontWeight:"100"}}/>
                </div>
                </div>
    
  )
}

export default MultipleSlide