import React from "react";
import { Link } from 'react-router-dom'
import Clients from './client'


import hero1 from '../../images/slider/right-img2.png'
import hero2 from '../../images/slider/s.png'
import hero3 from '../../images/slider/right-img.png'
import hero4 from '../../images/slider/top-img.jpg'


const Hero = () => {
    return (
        <section className="wpo-hero-section-1">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col col-xs-6 col-lg-6">
                        <div className="wpo-hero-section-text">
                            <div className="wpo-hero-title-top">
                                <span>Economic Liberation: A Beacon of Hope</span>
                            </div>
                            <div className="wpo-hero-title">
                                <h2>Empowering with financial wisdom</h2>
                            </div>
                            <div className="wpo-hero-subtitle">
                                <p>We’re Committed to practical help, lifting individuals from poverty and breaking free from debt traps.</p>
                            </div>
                            {/* <div className="btns">
                                <Link to="/about" className="btn theme-btn-s2">Get Started</Link>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-vec">
                            <div className="right-items-wrap">
                                <div className="right-item">
                                    <div className="r-img">
                                        <img src={hero1} alt="" />
                                    </div>
                                    {/* <div className="wpo-happy-client">
                                        <Clients/>
                                    </div> */}
                                </div>
                                <div className="right-item">
                                    <div className="wpo-total-project">
                                        <div className="wpo-total-project-wrap">
                                            <img src={hero4} alt="" />
                                        </div>
                                        <div className="project-shape">
                                            <img src={hero2} alt="" />
                                        </div>
                                    </div>
                                    <div className="r-img">
                                        <img src={hero3} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Hero;
