
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Presale() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Pre Sale">
                <div>
                     
                    <section className="tf-section project-info">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <form action="contact/contact-process.php" className="form-contact">
                                        <div className="project-info-form">
                                            <h6 className="title">BUY BEFORE PRICE INCREASE!</h6>

                                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                                <div style={{ textAlign: 'left' }}> {/* Aligns text to the left */}
                                                    <h6 style={{ fontSize: '14px', fontWeight: 'bold', color: 'white' }}>Current Stage</h6>
                                                    <h6 style={{ fontSize: '14px', fontWeight: 'bold', color: 'white' }}>Stage 1</h6>
                                                </div>
                                                <div style={{ textAlign: 'right' }}> {/* Aligns text to the right */}
                                                    <h6 style={{ fontSize: '14px', fontWeight: 'bold', color: 'white' }}>Available Supply</h6>
                                                    <h6 style={{ fontSize: '14px', fontWeight: 'bold', color: 'white' }}>50,000,000 BRUNO </h6>
                                                </div>
                                            </div>

                                            <div className="content-progress-box" style={{marginBottom:"30px"}}>
                                                <div className="content-progress-box">
                                                    <div className="progress-bar" data-percentage="27.3%">
                                                        <p className="progress-title-holder">
                                                            <span className="progress-title">Token Sold</span>
                                                            <span className="progress-number-wrapper">
                                                                <span className="progress-number-mark">
                                                                    <span className="percent" />
                                                                </span>
                                                            </span>
                                                        </p>
                                                        <div className="progress-content-outter">
                                                            <div className="progress-content" />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom:"30px" }}>
                                                <div style={{ textAlign: 'left' }}> {/* Aligns text to the left */}
                                                    <h6 style={{ fontSize: '14px', fontWeight: 'bold', color: 'white' }}>Next Stage Price</h6>
                                                    <h6 style={{ fontSize: '14px', fontWeight: 'bold', color: 'white' }}>0.0000055 ETH</h6>
                                                </div>
                                                <div style={{ textAlign: 'right' }}> {/* Aligns text to the right */}
                                                    <h6 style={{ fontSize: '14px', fontWeight: 'bold', color: 'white' }}>Token Sold</h6>
                                                    <h6 style={{ fontSize: '14px', fontWeight: 'bold', color: 'white' }}>109,000 BRUNO </h6>
                                                </div>
                                            </div>

 

                                            <div className="form-inner">
                                                <fieldset>
                                                    <label>
                                                        Amount of Eth
                                                    </label>
                                                    <input type="text" id="amount" placeholder="Amount of Eth" required />
                                                </fieldset>
                                                
                                                <fieldset>
                                                    <label>
                                                        Tokens
                                                    </label>
                                                    <input type="number" id="token" placeholder="Tokens" required />
                                                </fieldset>
                                                 
                                            </div>
                                        </div>
                                        <div className="wrap-btn">
                                            <button type="submit" className="tf-button style1">
                                                Buy BRUNO
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                     
                </div>

            </Layout>
        </>
    )
}