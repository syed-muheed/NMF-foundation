import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/testimonial/pasha.png'
import ts2 from '../../images/testimonial/Musaib 1.png'
import ts3 from '../../images/testimonial/Mohammed Khalid1 1.png'
import ts4 from '../../images/testimonial/Abdul Haseeb 1.png'
import ts5 from '../../images/testimonial/Abraar 1.png'
import ts6 from '../../images/testimonial/Noman 1.png'



class Doners extends Component {
    render() {
        var settings = {
            dots: false,
            arrows: true,
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
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

        const testimonial = [
            {
                tsImg: ts1,
                Des: "Great idea and initiative by NMF to foster an interest-free future, which is absolutely important. I am glad to be a part of it.",
                Title: 'K M Pasha',
                Sub: "",
            },
            {
                tsImg: ts2,
                Des: "I'm so grateful to be associated with the Nimal Maula Foundation. Their mission to foster an interest-free future is more than just a goal; it's a vision that we are collectively realizing. What a remarkable journey!",
                Title: 'Musaib Bin Nisar',
                Sub: "",
            },
            {
                tsImg: ts3,
                Des: "The Nimal Maula Foundation's commitment to transforming lives with Zakat is nothing short of extraordinary. It's not just about giving money; it's about giving hope and financial freedom. I'm honoured to be part of this mission.",
                Title: 'Mohammed Khalid',
                Sub: "",
            },
            {
                tsImg: ts4,
                Des: "Nimal Maula Foundation’s mission of creating a Riba-free community resonates deeply with me. I’ve seen firsthand the detrimental effects of interest-based loans, and I’m proud to support an organization that is dedicated to providing ethical financial solutions.",
                Title: 'Abdul Haseeb',
                Sub: "",
            },
            {
                tsImg: ts5,
                Des: "Joining the Nimal Maula Foundation means joining a family with a common purpose. We are embarking on a remarkable journey towards financial equity, and I’m excited about the impact we can make together.",
                Title: 'Abraar Farooq',
                Sub: "",
            },
            {
                tsImg: ts6,
                Des: "As a donor to Nimal Maula Foundation, I wholeheartedly support their mission of promoting a Riba-free community. It’s crucial to break the cycle of interest-based loans, and I’m grateful to be part of an organization that is actively working towards this goal.",
                Title: 'Syed Noman Bin Nuri',
                Sub: "",
            }
        ]
        return (

            <div className="wpo-testimonial-area section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="wpo-section-title">
                                <span>Who Help Us</span>
                                <h2>Our Donors</h2>
                                <p>Hear from our generous donors as they share their thoughts on the impact of their contributions and the positive change they’ve witnessed through the Nimal Maula Foundation.</p>
                            </div>
                        </div>
                    </div>
                    <div className="wpo-testimonial-wrap">
                        <div className="testimonial-slider owl-carousel">
                        <Slider {...settings}>
                                {testimonial.map((tesmnl, tsm) => (
                                    <div className="wpo-testimonial-item" key={tsm}>
                                        <div className="wpo-testimonial-img">
                                            <img src={tesmnl.tsImg} alt="" />
                                        </div>
                                        <div className="wpo-testimonial-content">
                                            <p>{tesmnl.Des}</p>
                                            <h2>{tesmnl.Title}</h2>
                                            <span>{tesmnl.Sub}</span>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Doners;