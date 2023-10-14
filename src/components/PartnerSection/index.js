import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pimg1 from '../../images/partners/img-1.jpg' 
import pimg2 from '../../images/partners/img-2.jpg' 
import pimg3 from '../../images/partners/img-3.jpg' 
import pimg4 from '../../images/partners/img-4.jpg' 
import pimg5 from '../../images/partners/img-5.jpg' 

const partners = [
    {
      pImg:pimg1,
    },
    {
      pImg:pimg2,
    },
    {
      pImg:pimg3,
    },
    {
      pImg:pimg4,
    },
    {
      pImg:pimg5,
    },
    {
      pImg:pimg1,
    },
]


class PartnerSection extends Component {
    render() {
        var settings = {
            dots: false,
            arrows: false,
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
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

        return (

            <section className={`partners-section section-padding ${this.props.tNone}`}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="wpo-section-title">
                                <span>Who help us</span>
                                <h2>Our Partners & Donors</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form,</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="partner-grids partners-slider owl-carousel">
                                <Slider {...settings}>
                                    {partners.map((partner, pitem) => (
                                        <div className="grid" key={pitem}>
                                            <img src={partner.pImg} alt=""/>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PartnerSection;