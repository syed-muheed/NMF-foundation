import React, { Component } from "react";
import Teams, { Volunteers } from '../../api/team'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'


class VolunteerTeamSection extends Component {
    render() {
        var settings = {
            dots: false,
            arrows: false,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        const ClickHandler = () => {
            window.scrollTo(10, 0);
        }

        return (
            <div className="wpo-team-area section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="wpo-section-title">
                                <span>Expert Team</span>
                                <h2>Meet Our Volunteer Team</h2>
                                <p>Explore the tireless dedication of our volunteers shaping our noble mission.</p>
                            </div>
                        </div>
                    </div>
                    <div className="wpo-team-wrap">
                        <div className="team-slider">
                            <Slider {...settings}>
                                {Volunteers.slice(0, 6).map((Team, tm) => (
                                    <div className="wpo-team-item" key={tm}>
                                        <div className="wpo-team-img">
                                            <img src={Team.tImg} alt="" />
                                        </div>
                                        <div className="wpo-team-content">
                                            <h2>{Team.name}</h2>
                                            <span>{Team.title}</span>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VolunteerTeamSection;