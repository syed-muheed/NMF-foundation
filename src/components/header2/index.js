import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from '../../components/MobileMenu'
import HeaderTopbar from '../HeaderTopbar'


export default class Header2 extends Component {

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
                <HeaderTopbar />
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
                                        <Link onClick={ClickHandler} className="navbar-brand" to="/">
                                            <img src={this.props.Logo} alt="" width={250} height="100%" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-1 col-1">
                                    <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                        <button className="menu-close"><i className="ti-close"></i></button>
                                        <ul className="nav navbar-nav mb-2 mb-lg-0">
                                            <li className="menu-item-has-children">
                                                <Link onClick={ClickHandler} to="/">Home</Link>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link to="/about">About</Link>
                                            </li>
                                            {/* <li className="menu-item-has-children">
                                                <Link to="/projects">Projects</Link>
                                            </li> */}
                                            <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-2 col-2">
                                    <div className="header-right">
                                        <div className="close-form">
                                            <Link onClick={ClickHandler} className="theme-btn" to="/donate">Donate Now</Link>
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
