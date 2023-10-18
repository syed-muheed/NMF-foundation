import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Homepage from '../HomePage'
import Homepage2 from '../HomePage2'
import Homepage3 from '../HomePage3'
import Homepage4 from '../HomePage4'
import Homepage5 from '../HomePage5'
import Homepage6 from '../HomePage6'
import Homepage7 from '../HomePage7'
import AboutPage from '../AboutPage'
import ServicePage from '../ServicePage'
import SeviceSinglePage from '../SeviceSinglePage'
import CauseSinglePage from '../CauseSinglePage'
import TeamSinglePage from '../TeamSinglePage'
import EventPage from '../EventPage'
import EventPage2 from '../EventPage2'
import EventSinglePage from '../EventSinglePage'
import ProjectPage from '../ProjectPage'
import ProjectSinglePage from '../ProjectSinglePage'
import CausePage from '../CausePage'
import TestimonialPage from '../TestimonialPage'
import BlogPage from '../BlogPage'
import BlogPageLeft from '../BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth'
import BlogDetails from '../BlogDetails'
import BlogDetailsFull from '../BlogDetailsFull'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide'
import ContactPage from '../ContactPage'
import ErrorPage from '../ErrorPage'
import DonatePage from '../DonatePage'
import VolunteerPage from '../VolunteerPage'
import LoginPage from '../LoginPage'
import SignUpPage from '../SignUpPage'
import ForgotPassword from '../ForgotPassword'
import PrivacyPolicy from '../PrivacyPolicy';
import Terms from '../Terms';


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<CausePage />} />
          <Route path='about' element={<CauseSinglePage />} />
          <Route path='projects' element={<ProjectPage />} />
          <Route path='project-single/:id' element={<ProjectSinglePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path='donate' element={<DonatePage />} />
          <Route path='privacy-policy' element={<PrivacyPolicy />} />
          <Route path='terms' element={<Terms />} />
          {/* <Route exact path='/' element={<Homepage />} />
          <Route path='home' element={<Homepage />} />
          <Route path='home2' element={<Homepage2 />} />
          <Route path='home3' element={<Homepage3 />} />
          <Route path='home4' element={<Homepage4 />} />
          <Route path='home5' element={<Homepage5 />} />
          <Route path='home6' element={<Homepage6 />} />
          <Route path='home7' element={<Homepage7 />} />
          <Route path='about' element={<AboutPage />} />

          <Route path='cause' element={<CausePage />} />
          <Route path='cause-single/:id' element={<CauseSinglePage />} />
          <Route path='team-single/:id' element={<TeamSinglePage />} />
          <Route path='event' element={<EventPage />} />
          <Route path='event-s2' element={<EventPage2 />} />
          <Route path='event-single/:id' element={<EventSinglePage />} />
          <Route path='project' element={<ProjectPage />} />
          <Route path='project-single/:id' element={<ProjectSinglePage />} />
          <Route path='testimonial' element={<TestimonialPage />} />
          <Route path='blog-single/:id' element={<BlogDetails />} />
          <Route path='blog-single-left-sidebar/:id' element={<BlogDetailsLeftSiide />} />
          <Route path='blog-single-fullwidth/:id' element={<BlogDetailsFull />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog-left-sidebar' element={<BlogPageLeft />} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth />} />
          <Route path='volunteer' element={<VolunteerPage />} />
          <Route path='404' element={<ErrorPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<SignUpPage />} />
          <Route path='forgot-password' element={<ForgotPassword />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AllRoute;
