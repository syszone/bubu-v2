'use client'
import { useState } from 'react'
export default function Accordion1() {
    const [isActive, setIsActive] = useState(1)

    const handleClick = (key) => {
        setIsActive(prevState => prevState === key ? null : key)
    }
    return (
        <>
            <div className="flat-accordion aos-init aos-animate" data-aos="fade-up" data-aos-duration={800}>
                <div className={isActive === 1 ? "flat-toggle active" : "flat-toggle"}>
                    <div className={isActive === 1 ? "h7 toggle-title active" : "h7 toggle-title"} onClick={() => handleClick(1)}>
                        <span className="icon-Icon">
                        </span>
                        <span>How Does a Crypto Presale Work?</span>
                    </div>
                    <p className="toggle-content" style={{ display: `${isActive === 1 ? "block" : "none"}` }}>
                    During a crypto presale, the project team typically offers tokens to investors at a discounted price in exchange for their support and investment. Presale participants may receive bonuses or incentives for participating early.
                    </p>
                </div>
                <div className={isActive === 2 ? "flat-toggle active" : "flat-toggle"}>
                    <div className={isActive === 2 ? "h7 toggle-title active" : "h7 toggle-title"} onClick={() => handleClick(2)}>
                        <span className="icon-Icon">
                        </span>
                        <span>What are the Benefits of Participating in a Crypto Presale?
                        </span>
                    </div>
                    <p className="toggle-content" style={{ display: `${isActive === 2 ? "block" : "none"}` }}>
                    Participating in a crypto presale allows investors to access tokens at a lower price before they are available to the public. It also provides an opportunity to support promising projects in their early stages and potentially earn a higher return on investment (ROI).

                    </p>
                </div>
                <div className={isActive === 3 ? "flat-toggle active" : "flat-toggle"}>
                    <div className={isActive === 3 ? "h7 toggle-title active" : "h7 toggle-title"} onClick={() => handleClick(3)}>
                        <span className="icon-Icon">
                        </span>
                        <span>What Risks are Associated with Crypto Presales?</span>
                    </div>
                    <p className="toggle-content" style={{ display: `${isActive === 3 ? "block" : "none"}` }}>
                    Crypto presales carry certain risks, including the possibility of project failure, regulatory uncertainty, lack of liquidity, and potential for fraud or scams. It's essential for investors to conduct thorough research and due diligence before participating in a presale.

                    </p>
                </div>
                
                <div className={isActive === 4 ? "flat-toggle active" : "flat-toggle"}>
                    <div className={isActive === 4 ? "h7 toggle-title active" : "h7 toggle-title"} onClick={() => handleClick(4)}>
                        <span className="icon-Icon">
                        </span>
                        <span>How Can I Participate in a Crypto Presale?
                        </span>
                    </div>
                    <p className="toggle-content" style={{ display: `${isActive === 4 ? "block" : "none"}` }}>
                    To participate in a crypto presale, investors typically need to register on the project's website or platform and follow the instructions for purchasing tokens. It's important to verify the authenticity of the project and ensure that you are following the prescribed procedures for participating in the presale.
                    </p>
                </div>

                <div className={isActive === 5 ? "flat-toggle active" : "flat-toggle"}>
                    <div className={isActive === 5 ? "h7 toggle-title active" : "h7 toggle-title"} onClick={() => handleClick(5)}>
                        <span className="icon-Icon">
                        </span>
                        <span>What is ownership in the metaverse?</span>
                    </div>
                    <p className="toggle-content" style={{ display: `${isActive === 5 ? "block" : "none"}` }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus eleifend egestas. Duis eget dictum purus. Fusce est mi, imperdiet porta neque malesuada, blandit scelerisque lectus. Maecenas vel lobortis risus. Donec ornare urna quis libero euismod, ac fermentum diam blandit. Nunc dapibus tempor lacus, vel lacinia enim efficitur eu</p>
                </div>

                <div className={isActive === 6 ? "flat-toggle active" : "flat-toggle"}>
                    <div className={isActive === 6 ? "h7 toggle-title active" : "h7 toggle-title"} onClick={() => handleClick(6)}>
                        <span className="icon-Icon">
                        </span>
                        <span>What is Crypto Staking?</span>
                    </div>
                    <p className="toggle-content" style={{ display: `${isActive === 6 ? "block" : "none"}` }}>
                    Crypto staking is the process of actively participating in a blockchain network by locking up your tokens to support the network's operations and secure transactions. In return, stakers earn rewards in the form of additional tokens.

                    </p>
                </div>

                <div className={isActive === 7 ? "flat-toggle active" : "flat-toggle"}>
                    <div className={isActive === 7 ? "h7 toggle-title active" : "h7 toggle-title"} onClick={() => handleClick(7)}>
                        <span className="icon-Icon">
                        </span>
                        <span>How does Crypto Staking Work?
</span>
                    </div>
                    <p className="toggle-content" style={{ display: `${isActive === 7 ? "block" : "none"}` }}>
                    Users lock up a certain amount of cryptocurrency in a staking wallet or smart contract, effectively becoming validators or delegators on the network. These validators validate transactions and secure the network, while delegators contribute to the process by staking their tokens with validators. In exchange for their contributions, stakers receive rewards, typically in the form of additional tokens.

                    </p>
                </div>
                <div className={isActive === 8 ? "flat-toggle active" : "flat-toggle"}>
                    <div className={isActive === 8 ? "h7 toggle-title active" : "h7 toggle-title"} onClick={() => handleClick(8)}>
                        <span className="icon-Icon">
                        </span>
                        <span>What are the Benefits of Crypto Staking?
</span>
                    </div>
                    <p className="toggle-content" style={{ display: `${isActive === 8 ? "block" : "none"}` }}>
                    Staking allows participants to earn passive income by staking their tokens and contributing to the security and decentralization of the blockchain network. It also helps to maintain network stability and efficiency.

                    </p>
                </div>

                <div className={isActive === 9 ? "flat-toggle active" : "flat-toggle"}>
                    <div className={isActive === 9 ? "h7 toggle-title active" : "h7 toggle-title"} onClick={() => handleClick(9)}>
                        <span className="icon-Icon">
                        </span>
                        <span>What is the Minimum Amount Required for Staking?
</span>
                    </div>
                    <p className="toggle-content" style={{ display: `${isActive === 9 ? "block" : "none"}` }}>
                    The minimum amount required for staking varies depending on the blockchain network and protocol. Some networks may have minimum staking requirements, while others allow users to stake any amount of tokens.
                    </p>
                </div>                

            </div>
        </>
    )
}
