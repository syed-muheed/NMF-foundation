import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import { useParams } from 'react-router-dom'
import blogs from '../../api/blogs'
import BlogSingle from '../../components/BlogDetails'
import Logo from '../../images/logo-nmf.png'
import Footer from '../../components/footer';
import Navbar2 from '../../components/Navbar2';


const BlogDetails =() => {

    const { id } = useParams()

    const BlogDetails = blogs.find(item => item.id === id)

    return(
        <Fragment>
            <Navbar2 Logo={Logo}/>
            <PageTitle pageTitle={BlogDetails.title} pagesub={'Blog'}/> 
             <BlogSingle/>
             <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogDetails;
