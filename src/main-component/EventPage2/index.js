import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo.png'
import EventSection2 from '../../components/EventSection2';

const EventPage2 =() => {
    return(
        <Fragment>
            <Navbar2 Logo={Logo}/>
            <PageTitle pageTitle={'Events'} pagesub={'Events'}/> 
            <EventSection2/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default EventPage2;

