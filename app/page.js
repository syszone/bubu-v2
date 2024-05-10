import Layout from "@/components/layout/Layout"
import Technology from "@/components/sections/Technology"
import Faqs1 from "@/components/sections/Faqs1"
import Feature1 from "@/components/sections/Feature1"
import Partner2 from "@/components/sections/Partner2"
import Roadmap from "@/components/sections/Roadmap"
import Team2 from "@/components/sections/Team2"
 
import Token2 from "@/components/sections/Token2"

import Cta1 from "@/components/sections/Cta1"
import Pagetitle1 from "@/components/sections/Pagetitle1"
import Partner1 from "@/components/sections/Partner1"
import Project1 from "@/components/sections/Project1"
import Project21 from "@/components/sections/Project21"
import Project31 from "@/components/sections/Project31"
import Project4 from "@/components/sections/Project4"
import Project22 from "@/components/sections/Project1"
import AboutBuBu from "@/components/sections/AboutBuBu"
import Cta22 from "@/components/sections/Cta22"
import Cta23 from "@/components/sections/Cta23"
import Team1 from "@/components/sections/Team1"
import Token1 from "@/components/sections/Token1"

export default function Home() {

    return (
        // <>

        //     <Layout headerStyle={1} footerStyle={1}>
        //         <Pagetitle1 />
        //         <Project1 />
        //         <Project21 />
        //         <Project31 />
        //         <Token1 />
        //         <Project4 />
        //         <Team1 />
        //         <Partner1 />
        //         <Cta1 />
        //     </Layout>
        // </>

        <>

            <Layout headerStyle={1} footerStyle={1}> 
             
                <div className="bg_body">
                    <div className="bg_h2">
                        <img src="/assets/images/backgroup/bg_home2.png" alt="" style={{ width: '100%', height: 'auto', display: 'block' }}/>
                    </div> 
                     
                    <Technology />
                    {/* <Roadmap /> */}
                    <Partner2 />
                    <Cta22 />
                {/* <Pagetitle2 /> */}
                  {/* <Feature1 />   */}
                    <AboutBuBu/>
                     
                    <Token2 />
                    {/* <Tiersystem /> */}
                    {/* <Technology /> */}
                    {/* <Roadmap /> */}
                    {/* <Project23 /> */}
                     {/* <Team2 /> */}

                     </div>
                
                
                {/* <Cta21 /> */}
                <Faqs1 />
                 
                <Cta23 />
            </Layout>
        </>
    )
}