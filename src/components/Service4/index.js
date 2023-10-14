import React from 'react'
import {Link} from 'react-router-dom'
import Services from '../../api/service'

const Service4 = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(

        <section className="wpo-features-section-s5">
            <div className="container">
                <div className="row">
                    {Services.slice(10,13).map((service, sitem) => (
                        <div className="col col-xl-4 col-lg-4 col-12" key={sitem}>
                            <div className="wpo-features-item">
                                <div className="wpo-features-icon">
                                    <div className="icon">
                                        <img src={service.fIcon1} alt=""/>
                                    </div>
                                </div>
                                <div className="wpo-features-text">
                                    <h2><Link onClick={ClickHandler} to={`/service-single/${service.id}`}>{service.title}</Link></h2>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Service4;