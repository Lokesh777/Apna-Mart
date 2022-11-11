import React from "react";
import styles from "../HomePage/HomePageCss/Section.module.css";


import ShopCategory from "./Slide/ShopCategory";


const Section = () => {
  return (
    <div className={styles.belowSlider}>
      <div className={styles.off}>
        <img
          className={styles.imgie1}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1667281294_bLOCK_BUSTER_dEALS_1_Desktop.jpg"
          alt=""
        />

        <img
          className={styles.imgie2}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1662531217_Wednesday_Bonus.jpg"
          alt=""
        />

        {/* slider needed */}

        <img
          className={styles.imgie}
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1667239568_1665072912_Oct-6_Slim-Banner.jpg"
          alt=""
        />
      </div>

      <ShopCategory />
    </div>
  );
};

export default Section;
