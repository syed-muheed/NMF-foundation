import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import VideoSec from '../../components/VideoSec';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo-nmf.png'
import Service from '../../components/Service';
import AboutS2 from '../../components/AboutS2';
import FunFact from '../../components/FunFact';
import CauseSection from '../../components/CauseSection';
import TeamSection from '../../components/TeamSection';
import PartnerSection from '../../components/PartnerSection';
import VolunteerTeamSection from '../../components/VolunteerTeamSection';
import Navbar2 from '../../components/Navbar2';
import ShariahTeamSection from '../../components/ShariahTeamSection';


const AboutPage =() => {
    return(
        <Fragment>
            <Navbar2 Logo={Logo}/>
            <PageTitle pageTitle={'About Us'} pagesub={'About'}/> 
            {/* <VideoSec/> */}
            <Service Fclass={'wpo-features-section-s2'}/>
            <AboutS2/>
            <ShariahTeamSection />
            {/* <FunFact/> */}
            <CauseSection/>
            <TeamSection/>
            {/* <PartnerSection tNone={'title-none'}/> */}
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AboutPage;
