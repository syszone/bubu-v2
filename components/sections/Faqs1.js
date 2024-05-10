
import Link from "next/link"
import Accordion1 from "../elements/Accordion1"

export default function Faqs1() {
    return (
        <>

            <section className="tf-section FAQs">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-title" data-aos="fade-up" data-aos-duration={800}>
                                <h2 className="title">
                                    frequently asked questions
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <Accordion1 />
                        </div>
                        <div className="col-md-12">
                            <div className="content_faq text-center">
                                <p>Bubu Crypto Coin is excited to extend an invitation to potential partners who are interested in collaborating with us to enhance and expand our cryptocurrency ecosystem. As we continue to grow and evolve, we recognize the value of strategic partnerships in achieving our goals. This brief outlines the opportunities available for organizations and individuals to become our potential partners.</p>
                                <div className="wrap-btn">
                                    <Link href="/contact" className="tf-button style1">
                                        Whitepaper
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
