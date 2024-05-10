
import Link from "next/link"

export default function Cta22() {
    return (
        <>

            <section className="tf-section tf_CTA_2" style={{marginTop: '40px'}}>
                <div className="overlay">
                </div>
                <div className="container relative">
                    <div className="row">
                    <div className="col-md-3">
                        <div className="image_cta" data-aos="fade-left" data-aos-duration={1200} style={{ position: 'relative' }}>
                        
                            <img className="move4 flare-img" src="/assets/images/common/img_cta2.png" alt="" />
                            <h3 className="title move5 icon icon_1" style={{ position: 'absolute', top: '40%', left: '-6%', transform: 'translate(-50%, -50%)', zIndex: '2', color: 'white' }}>
                                BLOCKCHAIN
                            </h3>
                            <img className="move4 icon icon_2" src="/assets/images/common/full-base-logo.png" alt="" style={{ position: 'absolute', top: '60%', left: '-5%', transform: 'translate(-50%, -50%)', zIndex: '2', }}/> 
                            {/* 
                            <img className="move5 icon icon_1" src="/assets/images/common/icon_cta.png" alt="" />
                            <img className="move5 icon icon_2" src="/assets/images/common/icon_cta_2.png" alt="" />
                            */}
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="tf-title left mb0" data-aos="fade-up" data-aos-duration={800}>
                            
                              <h2 className="title">
                                become our potential partner
                            </h2>  
                            <p className="sub">Lorem ipsum dolor sit amet consectetur</p>
                            
                              <div className="wrap-btn">
                                <Link href="/submit-project" className="tf-button style3">
                                    Apply Project
                                </Link>
                            </div>  
                        </div>
                    </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}
