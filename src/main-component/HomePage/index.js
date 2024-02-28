import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar'
import Hero from '../../components/hero'
import Service from '../../components/Service'
import About from '../../components/about'
import CauseSection from '../../components/CauseSection'
import TeamSection from '../../components/TeamSection'
import Testimonial from '../../components/Testimonial'
import CtaSection from '../../components/ctaSection'
import EventSection from '../../components/EventSection'
import BlogSection from '../../components/BlogSection'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo-nmf.png'
import PartnerSection from '../../components/PartnerSection';
import vimg from '../../images/volunteer.png'
import Navbar2 from '../../components/Navbar2';
import VolunteerTeamSection from '../../components/VolunteerTeamSection';
import Doners from '../../components/Doners';


const HomePage = () => {
    return (
        <Fragment>
            <Navbar2 Logo={Logo} />
            <Hero />
            {/* <Service Fclass={'wpo-features-section-s2'} vclassClass={'v1'}/> */}
            <About />
            <CauseSection />
            <VolunteerTeamSection />
            {/* <TeamSection/> */}
            <Testimonial />
            <CtaSection vImg={vimg} cTitle={'Let’s shape a better world with acts of humanity.'} />
            <BlogSection/>
            {/*  <EventSection/>
            <PartnerSection/> */}
            <Doners />
            <Scrollbar />
            <Footer />
        </Fragment>
    )
};
export default HomePage;