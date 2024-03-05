import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo-nmf.png'
import Projects from '../../api/projects'

const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <img src={Logo} style={{filter:'brightness(500)'}} alt="blog" width={200} height="100%" />
                                </div>
                                <p>Discover interest-free financial freedom through Nimal Maula Foundation's initiative for all</p>
                                {/* <ul>
                                <li>
                                    <Link to="/">
                                        <i className="ti-facebook"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="ti-twitter-alt"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="ti-instagram"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="ti-google"></i>
                                    </Link>
                                </li>
                            </ul> */}
                            </div>
                        </div>
                        <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Navigation</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/about">About</Link></li>
                                    {/* <li><Link onClick={ClickHandler} to="/projects">Projects</Link></li> */}
                                    <li><Link onClick={ClickHandler} to="/contact">Contact us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact </h3>
                                </div>
                                <div className="contact-ft">
                                    <p>Would you have any enquiries.Please feel free to contuct us</p>
                                    <ul>
                                        <li><i className="fi flaticon-mail"></i>talktous@nimalmaulafoundation.com</li>
                                        <li><i className="fi flaticon-phone-call"></i>9000 33 66 45 </li>
                                        <li><i className="fi flaticon-location"></i>404 Konark Towers, Dilsukhnagar, Hyderabad, 500036</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget instagram">
                                <div className="widget-title">
                                    <h3>Projects</h3>
                                </div>
                                {/* <ul className="d-flex">
                                    {Projects.slice(0, 6).map((project, pitem) => (
                                        <li className="grid" key={pitem}>
                                            <div className="img-holder">
                                                <Link onClick={ClickHandler} to={`/project-single/${project.id}`}>
                                                    <img src={project.projectImg} alt="" />
                                                </Link>
                                            </div>
                                        </li>
                                    ))}
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> &copy; 2024. All Rights Reserved. | <Link to='/terms'>Terms and Conditions</Link> | <Link to='/privacy-policy'>Privacy Policy</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;