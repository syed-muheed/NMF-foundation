import React from 'react'
import { Link } from 'react-router-dom'
import sadaqaBanner from '../../images/sadaqa-banner.png'
import zakatBanner from '../../images/zakat-banner.png'
import endowmentBanner from '../../images/impact-interest-banner.png'

const CauseSection = (props) => {
    const ClickHandler = (e, donationType) => {
        e.preventDefault();
        if (donationType === 'zakat') {
            window.location.href = 'https://payg.in/customer/#/pay-profile/DonateZakat'
        } else if (donationType === 'sadaqah') {
            window.location.href = 'https://payg.in/customer/#/pay-profile/DonateSadaqah'
        } else if (donationType === 'ribba') {
            window.location.href = 'https://payg.in/customer/#/pay-profile/DonateRiba'
        }
    }

    return (

        <div className={`wpo-campaign-area section-padding ${props.CmClass}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="wpo-section-title">
                            <span>Support Our Cause</span>
                            <h2>Give Generously Today</h2>
                            <p>Contribute to empower lives, making a positive impact in building a better, Riba-free community.</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-campaign-wrap">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-campaign-single">
                                <div className="wpo-campaign-item">
                                    <div className="wpo-campaign-img">
                                        <img src={sadaqaBanner} alt="sadaqa-banner" style={{ aspectRatio: 1 / 1 }} />
                                        <span className="thumb">Sadaqah Empowers</span>
                                    </div>
                                    <div className="wpo-campaign-content">
                                        <div className="wpo-campaign-text-top">
                                            <h2>Empowering Communities. Liberating Finances by Sadaqah.</h2>
                                            <div className="campaign-btn">
                                                <ul>
                                                    <li>
                                                        <span><img src='' alt="" /></span>
                                                        <span><Link onClick={ClickHandler} to={`/cause-single/`}></Link></span>
                                                    </li>
                                                    <li><a href='https://payg.in/customer/#/pay-profile/DonateSadaqah' className="e-btn" >Donate Sadaqah</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-campaign-single">
                                <div className="wpo-campaign-item">
                                    <div className="wpo-campaign-img">
                                        <img src={zakatBanner} alt="zakat-banner" style={{ aspectRatio: 1 / 1 }} />
                                        <span className="thumb">Zakat Transforms</span>
                                    </div>
                                    <div className="wpo-campaign-content">
                                        <div className="wpo-campaign-text-top">
                                            <h2>Unlocking Financial Freedom, Together with Zakat.</h2>
                                            <div className="campaign-btn">
                                                <ul>
                                                    <li>
                                                        <span><img src='' alt="" /></span>
                                                        <span><Link onClick={ClickHandler} to={`/cause-single/`}></Link></span>
                                                    </li>
                                                    <li><a href='https://payg.in/customer/#/pay-profile/DonateZakat' className="e-btn">Donate Zakat</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-campaign-single">
                                <div className="wpo-campaign-item">
                                    <div className="wpo-campaign-img">
                                        <img src={endowmentBanner} alt="sadaqa-banner" style={{ aspectRatio: 1 / 1 }} />
                                        <span className="thumb">Riba Impact</span>
                                    </div>
                                    <div className="wpo-campaign-content">
                                        <div className="wpo-campaign-text-top">
                                            <h2>Purify your<br /> earnings by removing <br />Riba.</h2>
                                            <div className="campaign-btn">
                                                <ul>
                                                    <li>
                                                        <span><img src='' alt="" /></span>
                                                        <span><Link onClick={ClickHandler} to={`/cause-single/`}></Link></span>
                                                    </li>
                                                    <li><a href='https://payg.in/customer/#/pay-profile/DonateRiba' className="e-btn">Donate Riba</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CauseSection;