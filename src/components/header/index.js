import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from '../../components/MobileMenu'


export default class Header extends Component {

    state = {
        isSearchShow: false,
    }

    searchHandler = () => {
        this.setState({
            isSearchShow: !this.state.isSearchShow
        })
    }





    render() {
        const { isSearchShow } = this.state;

        const SubmitHandler = (e) => {
            e.preventDefault()
        }

        const ClickHandler = () => {
            window.scrollTo(10, 0);
        }
        return (
            <header id="header" className={this.props.topbarNone}>
                <div className={`wpo-site-header ${this.props.hclass}`}>
                    <nav className="navigation navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                    <div className="mobail-menu">
                                        <MobileMenu />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-6">
                                    <div className="navbar-header">
                                        <Link onClick={ClickHandler} className="navbar-brand" to="/home"><img src={this.props.Logo}
                                            alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-1 col-1">
                                    <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                        <button className="menu-close"><i className="ti-close"></i></button>
                                        <ul className="nav navbar-nav mb-2 mb-lg-0">
                                            <li className="menu-item-has-children">
                                                <Link onClick={ClickHandler} to="/">Home</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} to="/home">Home Charity</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/home2">Home Education</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/home3">Home Wildlife</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/home4">Home Ocean Polution</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/home5">Home World Pandemic</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/home6">Home Nature</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/home7">Home Nature S2</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link to="/cause">Cause</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} to="/cause">Cause</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/cause-single/1">Cause Single</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link to="/">Events</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} to="/event">Events</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/event-s2">Events S2</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/event-single/1">Events Single</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link to="/">Pages</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} to="/about">About</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/service">Service</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/service-single/1">Service Single</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/project">Project</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/project-single/1">Project Single</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/donate">Donate</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/volunteer">Volunteer</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/testimonial">Testimonial</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/404">Error 404</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/login">Login</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/register">Sign Up</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link onClick={ClickHandler} to="/blog">Blog</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} to="/blog">Blog right sidebar</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/blog-left-sidebar">Blog left sidebar</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/blog-fullwidth">Blog fullwidth</Link></li>
                                                    <li className="menu-item-has-children">
                                                        <Link onClick={ClickHandler} to="/">Blog details</Link>
                                                        <ul className="sub-menu">
                                                            <li><Link onClick={ClickHandler} to="/blog-single/1">Blog details right sidebar</Link>
                                                            </li>
                                                            <li><Link onClick={ClickHandler} to="/blog-single-left-sidebar/1">Blog details left
                                                                sidebar</Link></li>
                                                            <li><Link onClick={ClickHandler} to="/blog-single-fullwidth/1">Blog details
                                                                fullwidth</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-2 col-2">
                                    <div className="header-right">
                                        <div className="close-form">
                                            <Link onClick={ClickHandler} className="theme-btn" to="/donate">Donate Now</Link>
                                        </div>
                                        <div className="header-search-form-wrapper">
                                            <div className="cart-search-contact">
                                                <button onClick={this.searchHandler} className="search-toggle-btn"><i
                                                    className={`${isSearchShow ? 'ti-close' : 'ti-search'}`}></i></button>
                                                <div className={`header-search-form ${isSearchShow ? 'header-search-content-toggle' : ''}`}>
                                                    <form onSubmit={SubmitHandler}>
                                                        <div>
                                                            <input type="text" className="form-control"
                                                                placeholder="Search here..." />
                                                            <button type="submit"><i
                                                                className="fi flaticon-search"></i></button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}
