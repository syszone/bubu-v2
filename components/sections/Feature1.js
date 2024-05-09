

'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const topPicture = {
    zIndex: 888,
    background: 'url(/_next/static/media/bg_img_team.1a81c964.png) center center no-repeat',
    top:-60,left:90,
    width: '156px',
    height: '176px',
    margin: '0 auto',
    position: 'absolute',
  };

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".next_slider-10",
        prevEl: ".prev_slider-10",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        750: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
}

export default function Feature1() {
    return (
        <>

            <section className="tf-section fueture">
                <div className="container w_1320">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="container_inner">
                                <div className="swiper-container slider-10" data-aos="fade-in" data-aos-duration={1000}>
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="icon-box">
                                            
                                            <div className="top">
                                                
                                                <div className="content" style={{zIndex:'1'}}>
                                                    <h5 style={{marginTop:"20px", }}><Link href="/project-list">Eco-Warrior</Link></h5>
                                                    <p style={{height:"200px"}}>A portion of Bubu’s transactions is dedicated to forest conservation projects, protecting Bubu's home and the homes of his forest friends. This initiative has resonated deeply with environmentally conscious investors.</p>
                                                </div>
                                            </div>
                                            <div className="topPicture"><img src="/assets/images/common/team_5.png" alt=""/></div>

                                                {/* <div className="top">
                                                      <div className="icon">
                                                        <img src="/assets/images/common/icon_1.png" alt="" />
                                                    </div>  
                                                    
                                                    <div className="content" >

                                                        <h5 style={{marginTop:"20px"}}><Link href="/project-list">Eco-Warrior</Link></h5>
                                                        <p style={{height:"200px"}}>A portion of Bubu’s  transactions is dedicated to forest conservation projects, protecting Bubu's home and the homes of his forest friends. 
                                                        This initiative has resonated deeply with environmentally conscious investors.</p>
                                                    </div>
                                                </div> */}
                                                <div className="bottom">
                                                    <img src="/assets/images/backgroup/bg_bt_box_1.png" alt="" />
                                                </div>
                                                <div className="number">
                                                    1
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="icon-box">
                                                <div className="top">
                                                    {/* <div className="icon">
                                                        <img src="/assets/images/common/icon_2.png" alt="" />
                                                    </div> */}
                                                    <div className="content">
                                                        <h5 style={{marginTop:"20px"}}><Link href="/project-list">Bearish Humor</Link></h5>
                                                        <p style={{height:"200px"}}>Bubu’s regular "Bear Market Tips" include advice such as "Always invest in a good nap" and "Honey is the sweetest investment." 
                                                        His lighthearted take on the crypto market brings smiles and is a refreshing reminder not to take life too seriously.</p>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <img src="/assets/images/backgroup/bg_bt_box_1.png" alt="" />
                                                </div>
                                                <div className="number">
                                                    2
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="icon-box">
                                                <div className="top">
                                                    {/* <div className="icon">
                                                        <img src="/assets/images/common/icon_3.png" alt="" />
                                                    </div> */}
                                                    <div className="content">
                                                        <h5 ><Link href="">Accessibility Advocate</Link></h5>
                                                        <p style={{height:"200px"}}>Bubu is on a mission to make crypto accessible to everyone, not just the tech-savvy. 
                                                        He simplifies complex crypto concepts into fun, easy-to-understand bear analogies, making him a favorite in educational crypto circles.
                                                        Bubu is on a mission to make crypto accessible to everyone, not just the tech-savvy.</p>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <img src="/assets/images/backgroup/bg_bt_box_1.png" alt="" />
                                                </div>
                                                <div className="number">
                                                    3
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="icon-box">
                                                <div className="top">
                                                    {/* <div className="icon">
                                                        <img src="/assets/images/common/icon_3.png" alt="" />
                                                    </div> */}
                                                    <div className="content">
                                                        <h5 style={{marginTop:"20px"}}><Link href="/project-list">Community Builder</Link></h5>
                                                        <p style={{height:"200px"}}>Bubu hosts yearly "Honey and Blockchain" meetups in the forest, blending virtual activities with real-world conservation efforts. 
                                                        These events are not only a chance to learn about crypto but also a way to meet other community members and take part in preserving natural habitats.</p>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <img src="/assets/images/backgroup/bg_bt_box_1.png" alt="" />
                                                </div>
                                                <div className="number">
                                                    4
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="icon-box">
                                                <div className="top">
                                                    {/* <div className="icon">
                                                        <img src="/assets/images/common/icon_3.png" alt="" />
                                                    </div> */}
                                                    <div className="content">
                                                        <h5 style={{marginTop:"20px"}}><Link href="/project-list">Charismatic Leader</Link></h5>
                                                        <p style={{height:"200px"}}>Despite his accidental entry into crypto, Bubu’s innate leadership qualities have shone through. 
                                                        He encourages open communication, shares his honey, and ensures all members feel welcome in the Bubu family</p>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <img src="/assets/images/backgroup/bg_bt_box_1.png" alt="" />
                                                </div>
                                                <div className="number">
                                                    5
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className="next_slider-10 next_slider"><svg width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 8H16.5M16.5 8L9.75 1.25M16.5 8L9.75 14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                </div>
                                <div className="prev_slider-10 prev_slider"><svg width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 8H1.5M1.5 8L8.25 1.25M1.5 8L8.25 14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                </div>
                                <div className="col-md-12 mt30">
                                    <p className="desc text-center mb20">
                                    Bubu the Bear continues to be more than just a meme coin mascot; he is a beacon of positivity in the often volatile crypto landscape. As Bubu navigates through the complexities of the market with naive grace and unintentional wisdom, his community grows stronger, bound by a shared love for crypto and conservation. 
                                    Bubu isn't just a financial venture—it's a movement, a lifestyle, and a testament to the fact that even a bear can make a mark in the digital world.
                                    </p>
                                    <div className="wrap-btn justify-content-center">
                                        <Link href="/submit-IGO-on-chain" className="tf-button style1">
                                            JOIN US
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
