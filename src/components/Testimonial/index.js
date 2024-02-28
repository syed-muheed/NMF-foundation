import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/testimonial/Mohammed Anwar.png'
import ts2 from '../../images/testimonial/Farheen Begum.png'
import ts3 from '../../images/testimonial/img-3.jpg'


class Testimonial extends Component {
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
                Des: "I'm thankful to the Nimal Maula Foundation team for helping me escape the sin of Riba. They provided 23,000 rupees to release my gold from Muthoot Finance. I seek forgiveness from Allah for my mistake.",
                Title: 'Mohammed Anwar',
                Sub: "",
            },
            {
                tsImg: ts2,
                Des: "Main Nimal Maula Foundation ke team ka shukriya ada karti hoon ke unho ne mujhe Riba ke gunaah se bachaya. Unhone mere sonay ko Manappuram Finance se nikalne ke liye 10,000 rupaye diye. Main apne ghalti ke liye Allah se Maafi chahti hoon.",
                Title: 'Farheen Begum',
                Sub: "",
            }
        ]
        return (

            <div className="wpo-testimonial-area section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="wpo-section-title">
                                <span>Testimonial</span>
                                <h2>What People Say About Us</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form,</p>
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

export default Testimonial;