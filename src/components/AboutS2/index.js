import React from 'react'
import {Link} from  'react-router-dom'
import abimg from '../../images/logo_transperent.png'


const AboutS2 = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return(
        <section className="wpo-about-section-s2 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-img">
                                <img src={abimg} alt=""/>
                                {/* <div className="wpo-total-raised">
                                    <div className="wpo-total-raised-wrap">
                                        <div className="wpo-total-raised-icon">
                                            <i className="fi flaticon-wallet-filled-money-tool"></i>
                                        </div>
                                        <div className="wpo-total-raised-text">
                                            <ul>
                                                <li>Total Raised<span>$25000</span></li>
                                            </ul>
                                            <div className="progress-section">
                                                <div className="process">
                                                    <div className="progress">
                                                        <div className="progress-bar">
                                                            <div className="progress-value"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="round-ball-1"></div>
                                <div className="round-ball-2"></div>
                                <div className="round-ball-3"></div>
                                <div className="round-ball-4"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-text">
                            <span>Mission</span>
                            <h2>Constructing Pathways To Financial Independence.</h2>
                            <p>Join us in our mission to empower communities towards Riba-free financial freedom. Through innovative initiatives, we provide tools and resources for stability and equality.</p>
                            <ul>
                                <li>Explore 'Halalfy' App for Islamic financial education.</li>
                                <li>Discover Qarz-e-Hasna, promoting financial fairness.</li>
                                <li>Make an impact with Zakat, freeing individuals from Riba.</li>
                                <li>Contribute to our Riba for Impact initiative, paving the way for financial freedom.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutS2;