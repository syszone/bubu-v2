
import Link from "next/link"

export default function Cta23() {
    return (
        <>

            <section className="tf-section tf_CTA_2" style={{marginTop: '40px'}}>
                <div className="overlay">
                </div>
                <div className="container relative">
                <div className="row">
                    <div className="col-md-9">
                        <div className="tf-title left mb0" data-aos="fade-up" data-aos-duration={800}>
                            <h2 className="title">become our potential partner</h2>  
                            <p className="sub">Lorem ipsum dolor sit amet consectetur</p>
                            <div className="wrap-btn">
                                <Link href="/submit-project" className="tf-button style3">Apply Project</Link>
                            </div>  
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="" data-aos="fade-left" data-aos-duration={1200} style={{ position: 'relative', left: '-300px' }}>                     
                            <img src="/assets/images/common/cat23.png" alt="" style={{ maxWidth: '600px', height: 'auto', transform: 'scale(1)' }}/>
                        </div>
                    </div>
                </div>
                </div>

            </section>
        </>
    )
}
