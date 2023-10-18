import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'

import Logo from '../../images/logo-nmf.png'
import Footer from '../../components/footer';

const PrivacyPolicy = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <Fragment>
            <Navbar2 Logo={Logo} />
            <PageTitle pageTitle={'Privacy Policy'} />
            <section className="wpo-service-single-section ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-content">
                                    <div className="wpo-service-single-content-des">
                                        <p>
                                            The creator of this Privacy Policy ensures a steady commitment to your privacy with regard
                                            to the protection of your invaluable information that you may share across this Website. This
                                            Privacy Policy contains information about the Website.
                                        </p>
                                        <p>
                                            All the definitions and interpretations are pari passu as per the Terms of Use, as uploaded on
                                            the Platform.
                                        </p>
                                        <p>
                                            Nimal Maula Foundation, a non-profit organization is the operator of an online platform
                                            whose main objective is dedicated to transforming lives through financial empowerment and
                                            promoting riba (interest)-free transactions within our community. Our mission is simple yet
                                            profound: to provide individuals and families with the knowledge and tools they need to
                                            navigate the complex world of finance while upholding ethical principles. Here, we firmly
                                            believe that everyone should have access to fair and ethical financial solutions. Our mission
                                            is to break the chains of riba (interest) that often burden individuals and communities,
                                            limiting their financial freedom and well-being. Through our expertise and unwavering
                                            commitment, we strive to empower individuals, ensuring they have the skills and resources to
                                            make informed financial decisions that benefit themselves and their communities.
                                        </p>
                                        <p>
                                            To provide you with our uninterrupted use of the Website, we may collect and, in some
                                            circumstances, disclose information about you with your permission. To ensure better
                                            protection of your privacy, we provide this notice explaining our information collection and
                                            disclosure policies and the choices you make about the way your information is collected and
                                            used.
                                        </p>
                                        <h5>Index:</h5>
                                        <div className="wpo-solutions-icon">
                                            <ol>
                                                <li>Personal Information</li>
                                                <li>Information We Collect</li>
                                                <li>Our Use Of Your Information</li>
                                                <li>How Information Is Collected</li>
                                                <li>External Links on The Platform</li>
                                                <li>Cookies</li>
                                                <li>Google Analytics</li>
                                                <li>Google AdSense</li>
                                                <li>Your Rights</li>
                                                <li>Compliances</li>
                                                <li>Confidentiality</li>
                                                <li>Other Information Collectors</li>
                                                <li>Our Disclosure of Your Information</li>
                                                <li>Accessing, Reviewing and Changing Your Profile</li>
                                                <li>Security</li>
                                                <li>Severability</li>
                                                <li>Amendment</li>
                                                <li>Consent Withdrawal, Data Download &amp; Data Removal Requests</li>
                                                <li>Contact Us</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="wpo-solutions-section">
                                    <h2>solutions Service</h2>
                                    <div className="row">
                                        {Services.slice(0, 3).map((service, Sitem) => (
                                            <div className="col-lg-4 col-md-6 col-12" key={Sitem}>
                                                <div className="wpo-solutions-item">
                                                    <div className="wpo-solutions-icon">
                                                        <div className="icon">
                                                            <i className={`fi ${service.fIcon1}`}></i>
                                                        </div>
                                                    </div>
                                                    <div className="wpo-solutions-text">
                                                        <h2><Link onClick={ClickHandler} to={`/service-single/${service.id}`}>{service.title}</Link></h2>
                                                        <p>The lower-numbered purposes are better understood and practiced </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default PrivacyPolicy;
