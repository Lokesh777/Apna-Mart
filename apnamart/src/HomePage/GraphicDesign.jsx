import React from 'react'
import AyushSlide from './Slide/AyushSlide';


// const ayusharr=["https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png",
// "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png","https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png",
// "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png",
// "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png"]

const ayusharr=[
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109073_1654018509_Fruits-Veg.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109088_1654018530_Beverage-Corner.jpghttps://www.jiomart.com/images/cms/aw_rbslider/slides/1657109088_1654018530_Beverage-Corner.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109143_1656693044_Foodgrains-Oils.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109179_1654018570_Snacks-FOOD.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109205_1654018587_Home-care.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109260_1654018604_personal-Care.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109280_1654018629_Dairy-Bakery.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109301_1654018647_Instant-Foods.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109327_1654018658_Home-Kitchen.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109379_1654018684_Womens-Wear.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109408_1654018699_Kids-WEAR.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1661329065_02--Shop-From-Top-Categories-Kitchen-Appliances.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1661329189_02--Shop-From-Top-Categories-audio.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109495_1654018730_Smartphones.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657109344_1654018675_Mens-Wear.jpg"
]

const GraphicDesign = () => {
  return (
    <div className='simple'>
      <br/>
      <br/>
        {/* <AyushSlide list={ayusharr} number={5}/> */}
        <AyushSlide list={ayusharr} number={7}/>

        <br/>
        <br/>

    
    </div>
  )
}

export default GraphicDesign;