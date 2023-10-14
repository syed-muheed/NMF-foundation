import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar';
import Hero6 from '../../components/hero6';
import Service5 from '../../components/Service5';
import AboutS4 from '../../components/AboutS4';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo2.png'
import PartnerSection from '../../components/PartnerSection';
import TeamSection2 from '../../components/TeamSection2';
import BlogSection5 from '../../components/BlogSection5';
import abimg from '../../images/about6.jpg'
import ProjectSection4 from '../../components/ProjectSection4';
import Testimonial2 from '../../components/Testimonial2';
import EventSection4 from '../../components/EventSection4';


const HomePage6 =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-header-style-4'}/>
            <Hero6 heroClass={'wpo-hero-section-6'}/>
            <AboutS4 abClass={'wpo-about-section-s6'} abImg={abimg} Atitle={'We are Protecting Wildlife With All Our Dedication.'}/>
            <Service5/>
            <TeamSection2/>
            <ProjectSection4/>
            <Testimonial2 tClass={'wpo-testimonial-area-s3 pt-0'}/>
            <EventSection4/>
            <BlogSection5/>
            <PartnerSection tNone={'title-none'}/>
            <Scrollbar/>
            <Footer/>
        </Fragment>
    )
};
export default HomePage6;