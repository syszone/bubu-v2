

'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import React from 'react';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 10,
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 10,
        }
    },
    pagination: {
        el: ".pagination_slider-6",
        clickable: true,
    },
}

 
const sectionStyle = {
     position: 'relative',
     overflow: 'hidden',
     backgroundImage: 'url("/assets/images/common/gold_crypto_coins_rain_smiling_laughing_blue_bear_full.png")',
     //backgroundSize: 'contain',
     backgroundRepeat: 'no-repeat',
     backgroundPosition: 'center',
     marginTop:'100px'
   };

const mobileStyles = {
    overflow: 'visible', // Remove overflow: 'hidden'
    backgroundSize: 'auto', // Remove backgroundSize: 'contain'
    backgroundPosition: 'unset' 
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    //backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2))',
    zIndex: 1,
    pointerEvents: 'none', // This prevents the overlay from blocking interaction with elements behind it
  };
  
  const containerStyle = {
    position: 'relative',
    zIndex: 2,
  };

export default function Technology() {

    const mobileBackgroundPosition = '20% 10%';
    const [isMobileView, setIsMobileView] = React.useState(false);

    // Check viewport width on mount and resize
    React.useEffect(() => {
      const handleResize = () => {
        setIsMobileView(window.innerWidth <= 768);
      };
  
      handleResize(); // Check viewport width on mount
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);



    return (
        <>
            <section style={isMobileView ? { ...sectionStyle, ...mobileStyles, backgroundPosition: mobileBackgroundPosition } : sectionStyle}> 
             
            <div className="container w_1490"  >
      <div className="bg-overlay" style={overlayStyle}></div>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="tf-title" data-aos="fade-right" data-aos-duration={800}>
            <div className="img_technology">
              {/* <img src="/assets/images/common/gold_crypto_coins_rain_smiling_laughing_blue_bear.png" alt="" /> */}
              <img className="coin coin_1" src="/assets/images/common/coin1.png" alt="" />
              <img className="coin coin_7" src="/assets/images/common/coin7.png" alt="" width={"30%"}/>
              <img className="coin coin_8" src="/assets/images/common/coin8.png" alt=""  width={"10%"}/>
              {/* <img className="coin coin_5" src="/assets/images/common/coin5.png" alt="" /> */}
              {/* <img className="coin coin_6" src="/assets/images/common/coin6.png" alt="" /> */}
              <img className="coin coin_9" src="/assets/images/common/coin9.png" alt=""  width={"20%"}/>
              <img className="coin coin_10" src="/assets/images/common/coin10.png" alt=""  width={"10%"}/>
              <img className="coin coin_11" src="/assets/images/common/coin8.png" alt=""  width={"10%"}/>
              <img className="coin coin_14" src="/assets/images/common/coin7.png" alt=""  width={"10%"}/>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="content_technology" data-aos="fade-up" data-aos-duration={800}>
            <div className="tf-title left">
              <h2 className="title mb20">Introducing Bubu the Bear!</h2>
              <h4 className="title mb20">the most endearing and lovable mascot the crypto world has ever seen!</h4>
            </div>
            <p className="sub_technology" style={{color:'#e6e9eb'}}>Bubu started his journey as an ordinary forest dweller with an extraordinary love for honey, long naps, and the occasional adventure. One sunny afternoon, while exploring a particularly tech-savvy camper's backpack, Bubu accidentally activated a cryptocurrency app. With curiosity sparked by glowing screens and intriguing charts, Bubu's transformation from a simple forest bear into a crypto sensation began.</p>
            <div className="swiper-container slider-6">
              <Swiper {...swiperOptions} className="swiper-wrapper">
                <SwiperSlide>
                  <img src="/assets/images/common/logo_tech_1.png" alt="" style={{
                        filter: 'brightness(0) invert(1) grayscale(100%) brightness(1000%)',
                        }} />
                </SwiperSlide>
              </Swiper>
              <div className="swiper-pagination pagination_slider-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
            </section>
        </>
    )
}
