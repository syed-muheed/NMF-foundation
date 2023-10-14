import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import {Link} from  'react-router-dom'
import Causes from '../../api/cause'
import { useParams } from 'react-router-dom'
import pimg from '../../images/checkout/img-1.png'
import pimg2 from '../../images/checkout/img-2.png'
import pimg3 from '../../images/checkout/img-3.png'
import pimg4 from '../../images/checkout/img-4.png'

import cmt1 from '../../images/blog-details/comments-author/img-1.jpg'
import cmt2 from '../../images/blog-details/comments-author/img-2.jpg'
import cmt3 from '../../images/blog-details/comments-author/img-3.jpg'
import TeamSection from '../../components/TeamSection';




const CauseTabs = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }


    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <div className="wpo-case-details-tab">
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >

                            Objectives
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                        >

                            Team
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <div className="wpo-case-details-text">
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <div className="wpo-case-content">
                                    <div className="wpo-case-text-top">
                                        <h2>About</h2>
                                        <div className="case-b-text">
                                            <p>The Nimal Maula Foundation is a non-profit organization committed to empowering individuals and families in our community with financial literacy education and promoting riba (interest)-free transactions. We believe that everyone deserves access to fair and ethical financial solutions. With our expertise, we aim to liberate people from the burden of riba. </p>
                                        </div>
                                        <div className="case-bb-text">
                                            <h3>Mission</h3>
                                            <p>The Nimal Maula Foundation - your gateway to interest-free financial security, freedom, and equality. Our mission is simple: to empower our community and uplift them towards a brighter future. With our innovative programs and initiatives, we provide the necessary tools and resources to help you achieve financial stability without the burden of interest. Join us on this transformative journey towards a more equitable society where everyone can thrive without any financial constraints. Together, let's build a better future for all.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                        <Col sm="12">
                                <div className="wpo-case-content">
                                    <div className="wpo-case-text-top">
                                        <h2>Objectives</h2>
                                        <div className="case-bb-text">
                                            <ul>
                                                <li>Provide financial knowledge and protect your future with Nimal Maula Foundation's groundbreaking mobile app name Halalfy. Our Shariah-certified scholars are here to guide you on the path to financial freedom by educating you on the dangers of interest-based loans and the hidden pitfalls of interest in business and employment. Take control of your finances, make informed decisions, and safeguard your wealth with our user-friendly app. </li>
                                                <li>Provide a unique opportunity for you to contribute your zakat amount towards    supporting those in need. We work tirelessly to pay off interest-based loans on behalf of deserving individuals. </li>
                                                <li>Provide interest-free funds through our qarz e hasna program, by collecting sadaqah.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col sm="12">
                                <TeamSection />
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        </div>
    );
}

export default CauseTabs;