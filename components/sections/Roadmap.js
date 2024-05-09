

'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    loop: false, 
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".next_slider-7",
        prevEl: ".prev_slider-7",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
}

export default function Roadmap() {
    return (
        <>

            <section className="tf-section roadmap">
                <div className="container w_1850">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-title" data-aos="fade-up" data-aos-duration={800}>
                                <h2 className="title">
                                Why the Community Adores Bubu
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="container_inner roadmap_boder">
                                <div className="roadmap-wrapper" data-aos="fade-in" data-aos-duration={1000}>
                                    <div className="swiper-container slider-7">
                                        <Swiper {...swiperOptions} className="swiper-wrapper">
                                            <SwiperSlide>
                                                <div className="roadmap-box active">
                                                    <div className="icon">
                                                        <img src="/assets/images/common/icon_roadmap.svg" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="date">Eco-Warrior</h6>
                                                        <p style={{ textAlign: 'justify' }}>
                                                        A portion of Bubu’s  transactions is dedicated to forest conservation projects, 
                                                        protecting Bubu's home and the homes of his forest friends. This initiative has resonated deeply with environmentally conscious investors.
                                                        </p>
                                                        {/* <ul>
                                                            <li>Cras molestie ullamcorper augue nec pulvinar</li>
                                                            <li>Nam mollis sapien ut sapien gravida sollicitudin</li>
                                                            <li>Mauris vel nisl quis dolor accumsan luctus</li>
                                                        </ul> */}
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="roadmap-box active">
                                                    <div className="icon">
                                                        <img src="/assets/images/common/icon_roadmap.svg" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="date">Bearish Humor </h6>
                                                        <p style={{ textAlign: 'justify' }}>
                                                        Bubu’s regular "Bear Market Tips" include advice such as "Always invest in a good nap" and "Honey is the sweetest investment.
                                                        " His lighthearted take on the crypto market brings smiles and is a refreshing reminder not to take life too seriously.
                                                        </p>
                                                        {/* <ul>
                                                            <li>Cras molestie ullamcorper augue nec pulvinar</li>
                                                            <li>Nam mollis sapien ut sapien gravida sollicitudin</li>
                                                            <li>Mauris vel nisl quis dolor accumsan luctus</li>
                                                        </ul> */}
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="roadmap-box active">
                                                    <div className="icon">
                                                        <img src="/assets/images/common/icon_roadmap.svg" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="date">Accessibility Advocate</h6>
                                                        <p style={{ textAlign: 'justify' }}>
                                                        Bubu's charm goes beyond his market influence. Here are just a few reasons why the community has fallen head over heels for Bubu the Bear:
                                                        </p>
                                                        {/* <ul>
                                                            <li>Eco-Warrior*: A portion of Bubu’s  transactions is dedicated to forest conservation projects, protecting Bubu's home and the homes of his forest friends. This initiative has resonated deeply with environmentally conscious investors.</li>
                                                            <li>*Bearish Humor*: Bubu’s regular "Bear Market Tips" include advice such as "Always invest in a good nap" and "Honey is the sweetest investment." His lighthearted take on the crypto market brings smiles and is a refreshing reminder not to take life too seriously.</li>
                                                            <li>*Accessibility Advocate*: Bubu is on a mission to make crypto accessible to everyone, not just the tech-savvy. He simplifies complex crypto concepts into fun, easy-to-understand bear analogies, making him a favorite in educational crypto circles.</li>
                                                            <li>*Community Builder*: Bubu hosts yearly "Honey and Blockchain" meetups in the forest, blending virtual activities with real-world conservation efforts. These events are not only a chance to learn about crypto but also a way to meet other community members and take part in preserving natural habitats.</li>
                                                            <li>*Charismatic Leader*: Despite his accidental entry into crypto, Bubu’s innate leadership qualities have shone through. He encourages open communication, shares his honey, and ensures all members feel welcome in the Bubu family.</li>
                                                        </ul> */}
                                                        <p style={{ textAlign: 'justify' }}>Bubu is on a mission to make crypto accessible to everyone, not just the tech-savvy. He simplifies complex crypto concepts into fun, easy-to-understand bear analogies, making him a favorite in educational crypto circles.</p>
                                                        

                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="roadmap-box active">
                                                    <div className="icon">
                                                        <img src="/assets/images/common/icon_roadmap.svg" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="date">Community Builder</h6>
                                                        <p style={{ textAlign: 'justify' }}>
                                                        Bubu hosts yearly "Honey and Blockchain" meetups in the forest, blending virtual activities with real-world conservation efforts. These events are not only a chance to learn about crypto but also a way to meet other community members and take part in preserving natural habitats.
                                                        </p>
                                                        {/* <ul>
                                                            <li>Cras molestie ullamcorper augue nec pulvinar</li>
                                                            <li>Nam mollis sapien ut sapien gravida sollicitudin</li>
                                                            <li>Mauris vel nisl quis dolor accumsan luctus</li>
                                                        </ul> */}
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="roadmap-box active" >
                                                    <div className="icon">
                                                        <img src="/assets/images/common/icon_roadmap.svg" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="date">Charismatic Leader</h6>
                                                        <p style={{ textAlign: 'justify' }}>
                                                        Despite his accidental entry into crypto, Bubu’s innate leadership qualities have shone through. 
                                                        He encourages open communication, shares his honey, and ensures all members feel welcome in the Bubu family.
                                                        </p>
                                                        {/* <ul>
                                                            <li>Cras molestie ullamcorper augue nec pulvinar</li>
                                                            <li>Nam mollis sapien ut sapien gravida sollicitudin</li>
                                                            <li>Mauris vel nisl quis dolor accumsan luctus</li>
                                                        </ul> */}
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            {/* <SwiperSlide>
                                                <div className="roadmap-box">
                                                    <div className="icon">
                                                        <img src="/assets/images/common/icon_roadmap.svg" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="date">April 16, 2022</h6>
                                                        <ul>
                                                            <li>Cras molestie ullamcorper augue nec pulvinar</li>
                                                            <li>Nam mollis sapien ut sapien gravida sollicitudin</li>
                                                            <li>Mauris vel nisl quis dolor accumsan luctus</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="roadmap-box">
                                                    <div className="icon">
                                                        <img src="/assets/images/common/icon_roadmap.svg" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="date">April 16, 2022</h6>
                                                        <ul>
                                                            <li>Cras molestie ullamcorper augue nec pulvinar</li>
                                                            <li>Nam mollis sapien ut sapien gravida sollicitudin</li>
                                                            <li>Mauris vel nisl quis dolor accumsan luctus</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="roadmap-box">
                                                    <div className="icon">
                                                        <img src="/assets/images/common/icon_roadmap.svg" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="date">April 16, 2022</h6>
                                                        <ul>
                                                            <li>Cras molestie ullamcorper augue nec pulvinar</li>
                                                            <li>Nam mollis sapien ut sapien gravida sollicitudin</li>
                                                            <li>Mauris vel nisl quis dolor accumsan luctus</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </SwiperSlide> */}
                                        </Swiper>
                                    </div>
                                </div>
                                <div className="next_slider-7 next_slider"><svg width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 8H16.5M16.5 8L9.75 1.25M16.5 8L9.75 14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                </div>
                                <div className="prev_slider-7 prev_slider"><svg width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 8H1.5M1.5 8L8.25 1.25M1.5 8L8.25 14.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
