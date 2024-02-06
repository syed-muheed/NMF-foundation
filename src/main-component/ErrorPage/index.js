import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Error from '../../components/404'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo.png'
import Navbar2 from '../../components/Navbar2';

const ErrorPage =() => {
    return(
        <Fragment>
            <Navbar2 Logo={Logo}/>
            <PageTitle pageTitle={'404'} pagesub={'404'}/> 
            <Error/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ErrorPage;

