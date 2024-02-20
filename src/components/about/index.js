import React from 'react'
import {Link} from  'react-router-dom'
import abimg from '../../images/about.png'
import shape from '../../images/ab-shape-2.png'


const About = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return(
        <section className="wpo-about-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-img">
                                <img src={abimg} alt=""/>
                                <div className="wpo-ab-shape-1">
                                    <div className="s-s1"></div>
                                    <div className="s-s2"></div>
                                </div>
                                <div className="wpo-ab-shape-2"><img src={shape} alt=""/></div>
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
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-text">
                            <span>About Us</span>
                            <h2>Financial Liberation: Riba-Free Solutions</h2>
                            <p>Empowering individuals and families, the Nimal Maula Foundation is dedicated to providing financial literacy education and advocating for riba-free transactions in our community. Our commitment ensures fair and ethical financial solutions, liberating people from the burden of riba.</p>
                            <ul>
                                <li>Elevate financial well-being.</li>
                                <li>Holistic monetary and non-monetary support.</li>
                                <li>Navigate poverty with sustainable measures</li>
                            </ul>
                            {/* <Link onClick={ClickHandler} className="theme-btn-s2" to="/about">More About</Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;