import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import { useParams } from 'react-router-dom'
import { Teams } from '../../api/team';
import Footer from '../../components/footer'
import Logo from '../../images/logo-nmf.png'
import Navbar2 from '../../components/Navbar2';


const TeamSinglePage = (props) => {
    const { id } = useParams()

    const TeamSingle = Teams.find(item => item.id === id)

    const SubmitHandler = (e) => {
        e.preventDefault()
    }



    return (
        <Fragment>
            <Navbar2 Logo={Logo} />
            <PageTitle pageTitle={TeamSingle.name} pagesub={TeamSingle.title} />
            <div className="attorney-pg-area section-padding">
                <div className="container">
                    <div className="attorney-info-wrap">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="attorney-info-img">
                                    <img src={TeamSingle.tImg} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="attorney-info-text">
                                    <h2>{TeamSingle.name}</h2>
                                    <ul>
                                        <li>Position: <span>{TeamSingle.title}</span></li>
                                        {/* <li>Practice Area:<span>{TeamSingle.title}</span></li>
                                        <li>Experience:<span>12 Years</span></li>
                                        <li>Address:<span>Millington, Ave, TN 38053</span></li>
                                        <li>Phone:<span>+00 568 746 987</span></li>
                                        <li>Email:<span>youremail@gmail.com</span></li>
                                        <li>Fax:<span>568 746 987</span></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="exprience-area">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="exprience-wrap">
                                    <h2>Personal Experience</h2>
                                    <p>{TeamSingle.description.split('\n').map((item, key) => <Fragment key={key}>{item}<br /></Fragment>)}</p>
                                </div>
                                {/* <div className="at-progress">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid">
                                            <div className="progress yellow">
                                                <span className="progress-left">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <div className="progress-value">80%</div>
                                                <div className="progress-name"><span>Success</span></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid">
                                            <div className="progress blue">
                                                <span className="progress-left">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <div className="progress-value">90%</div>
                                                <div className="progress-name"><span>Happy Client</span></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid">
                                            <div className="progress pink">
                                                <span className="progress-left">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <div className="progress-value">95%</div>
                                                <div className="progress-name"><span>Project Done</span></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid">
                                            <div className="progress green">
                                                <span className="progress-left">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <div className="progress-value">2500+</div>
                                                <div className="progress-name"><span>Donar</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="education-area ex-wiget">
                                    <h2>Education</h2>
                                    <ul>
                                        <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</li>
                                        <li>If you are going to use a passage of Lorem Ipsum.</li>
                                        <li>Very popular during the Renaissance. </li>
                                        <li>Many desktop publishing packages and web page editors now.</li>
                                    </ul>
                                </div>
                                <div className="language-area ex-wiget">
                                    <h2>Language</h2>
                                    <ul>
                                        <li>French(fluent), English (fluent), Greek , chinese.</li>
                                    </ul>
                                </div>
                                <div className="wpo-contact-area ex-wiget">
                                    <h2>Contact Me</h2>
                                    <div className="quote-form">
                                        <form onSubmit={SubmitHandler}>
                                            <div className="form-group half-col">
                                                <input type="text" className="form-control" placeholder="Name:" name="name" />
                                            </div>
                                            <div className="form-group half-col">
                                                <input type="email" className="form-control" placeholder="Email:" name="email" />
                                            </div>
                                            <div className="form-group half-col">
                                                <input type="text" className="form-control" placeholder="Subject:" name="subject" />
                                            </div>
                                            <div className="form-group half-col">
                                                <input type="text" className="form-control" placeholder="Your Address:" name="address" />
                                            </div>
                                            <div className="form-group full-col">
                                                <textarea className="form-control" name="note" placeholder="Description..."></textarea>
                                            </div>
                                            <div className="form-group full-col">
                                                <button className="btn theme-btn" type="submit">Get In Touch</button>
                                            </div>
                                        </form>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamSinglePage;
