import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo-nmf.png'
import CauseSection from '../../components/CauseSection';

const CausePage =() => {
    return(
        <Fragment>
            <Navbar2 Logo={Logo}/>
            <PageTitle pageTitle={'Empower your impact'} pagesub={'Donate for a future of interest-free financial liberation'}/> 
            <CauseSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CausePage;

