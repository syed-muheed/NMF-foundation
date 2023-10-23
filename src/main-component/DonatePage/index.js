import React, { Fragment, useState } from 'react';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo-nmf.png'
import pimg from '../../images/checkout/img-1.png'
import pimg2 from '../../images/checkout/img-2.png'
import pimg3 from '../../images/checkout/img-3.png'
import pimg4 from '../../images/checkout/img-4.png'
import { useParams } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import qrCode from '../../images/qr-code.png'

const DonatePage = () => {
    const [amount, setAmount] = useState('')
    const [modal, setModal] = useState(false);

    const { donationType } = useParams()
    console.log(donationType)
    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const toggle = () => setModal(!modal);

    const getButtonName = () => {
        if (donationType === 'zakat') {
            return "Zakat"
        } else if (donationType === 'sadaqah') {
            return "Sadaqah"
        } else if (donationType === 'interest-impact') {
            return "Interest Impact"
        }
    }

    const getContent = () => {
        if (donationType === 'sadaqah') {
            return (
                <div>
                    <p>At Nimal Maula Foundation, we’re pioneering a new era of giving with Objective 2:
                        “Empower with Sadaqah.” We stand as a unique force, devoted to providing interest-free
                        assistance to Qarz-e-Hasna through Sadaqah donations. What makes us exceptional is our
                        commitment to a perpetual cycle of giving, fostering financial fairness throughout our
                        community.
                    </p>
                    <p>Our Approach:</p>
                    <ol>
                        <li>Interest-Free Assistance: We’re here to support individuals in their time of need by
                            offering interest-free loans. No interest, no burdens, just a helping hand when it’s needed the
                            most.
                        </li>
                        <li>The Power of Sadaqah: Our approach hinges on the remarkable spirit of Sadaqah. It’s the
                            selfless contributions from our donors that enable us to extend this vital assistance to those
                            who require it most.
                        </li>
                        <li>Empowering Communities: By breaking the cycle of interest, we empower our community
                            members to stand on a firm financial foundation, promoting a sense of dignity and
                            independence.
                        </li>
                        <li>
                            Perpetual Giving: As individuals repay their loans, the funds are reinvested to help others,
                            creating a perpetual cycle of giving that embodies the very essence of financial fairness.
                            Join us in this extraordinary initiative, where your Sadaqah paves the way for individuals to
                            achieve a brighter and more secure financial future. Your generosity brings forth a legacy of
                            change, making a significant impact in the lives of many.
                        </li>
                    </ol>
                    <p>
                        Join us in this extraordinary initiative, where your Sadaqah paves the way for individuals to
                        achieve a brighter and more secure financial future. Your generosity brings forth a legacy of
                        change, making a significant impact in the lives of many.
                    </p>
                </div>
            )
        } else if (donationType === 'zakat') {
            return (
                <div>
                    <p>At Nimal Maula Foundation, we stand at the forefront of transformation with Objective 3:
                        “Transform Lives with Zakat.” This isn’t just a mission; it’s a revolutionary journey. Our core
                        goal is to harness the potential of Zakat to liberate individuals from the clutches of interest-
                        based loans. Through Zakat, we pay off the loan principal, fostering financial freedom, and
                        igniting the spirit of giving.
                    </p>
                    <p>Our Approach:</p>
                    <ol>
                        <li>Zakat’s Power Unleashed: We unleash the inherent power of Zakat to create a profound
                            impact. Each Zakat contribution becomes a lifeline, freeing individuals from the burden of
                            interest-based loans.
                        </li>
                        <li>Breaking the Chains: We are dedicated to liberating individuals from the cycle of interest.
                            Our unique approach focuses on paying off the loan principal, offering a path to financial
                            independence.
                        </li>
                        <li>Empowerment through Giving: Our mission extends beyond financial relief; it’s about
                            empowering both givers and recipients. It’s a circle of generosity that uplifts our entire
                            community.
                        </li>
                        <li>
                            A Trailblazing Initiative: We proudly pioneer this one-of-a-kind initiative, setting a
                            precedent in the field of financial freedom through Zakat.
                        </li>
                    </ol>
                    <p>
                        Join us on this extraordinary journey where your Zakat isn’t just charity; it’s a key to
                        unlocking financial independence, fostering a spirit of giving, and making an indelible mark
                        on the lives of many. Together, we break free from interest-based debt and create a future of
                        financial empowerment.
                    </p>
                </div>
            )
        } else if (donationType === 'interest-impact') {
            return (
                <div>
                    <p>As an organization committed to financial ethics and community well-being, we’ve embarked
                        on Objective 4: “Interest for Impact.” Our aim is to channel interest earned from various
                        sources, including savings accounts, fixed deposits, recurring deposits, and more, towards a
                        noble cause - paying off interest on loans.
                    </p>
                    <p>Our Approach:</p>
                    <ol>
                        <li>Interest Collection: We diligently collect interest from all sources, without expecting any
                            blessings or rewards. Our goal is solely to protect our community from the pitfalls of interest.
                        </li>
                        <li>Interest-Based Debt Relief: This interest amount collected is put to good use. We direct it
                            towards paying off the interest component of loans, thereby helping individuals escape the
                            cycle of interest-based debts.
                        </li>
                        <li>Principal Payment: The principal amount, vital for individuals’ loan release, is funded
                            through Zakat contributions. This way, we ensure that people are entirely liberated from
                            interest-based loans.
                        </li>
                    </ol>
                    <p>
                        By participating in “Interest for Impact,” you’re not only securing your financial ethics but also
                        actively contributing to a more equitable and interest-free financial future for all.
                    </p>
                </div>
            )
        }
    }

    const getSubTitle = () => {
        if (donationType === 'zakat') {
            return "Zakat Transforms"
        } else if (donationType === 'sadaqah') {
            return "Sadaqah Empowers"
        } else if (donationType === 'interest-impact') {
            return "Interest Impact"
        }
    }

    return (
        <Fragment>
            <Navbar2 Logo={Logo} />
            <PageTitle pageTitle={'Donate'} pagesub={getSubTitle()} />
            <div className="wpo-donation-page-area section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="wpo-donate-header">
                                <h2>Make a Donation</h2>
                            </div>
                            <div id="Donations" className="tab-pane">
                                <form onSubmit={SubmitHandler}>
                                    <div className="wpo-donations-amount">
                                        <h2>Your Donation</h2>
                                        <input type="number" min={0} value={amount} onChange={(e) => setAmount(e.target.value)} className="form-control" name="text" id="text" placeholder="Enter Donation Amount" />
                                        <div className='amount-selector row g-2'>
                                            <div className='col-auto'>
                                                <div className='amount-selector-item' onClick={() => setAmount(500)}>₹500</div>
                                            </div>
                                            <div className='col-auto'>
                                                <div className='amount-selector-item' onClick={() => setAmount(1000)}>₹1000</div>
                                            </div>
                                            <div className='col-auto'>
                                                <div className='amount-selector-item' onClick={() => setAmount(1500)}>₹1500</div>
                                            </div>
                                            <div className='col-auto'>
                                                <div className='amount-selector-item' onClick={() => setAmount(2000)}>₹2000</div>
                                            </div>
                                            <div className='col-auto'>
                                                <div className='amount-selector-item' onClick={() => setAmount(2500)}>₹2500</div>
                                            </div>
                                            <div className='col-auto'>
                                                <div className='amount-selector-item' onClick={() => setAmount(5000)}>₹5000</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wpo-donations-details">
                                        <h2>Details</h2>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="text" className="form-control" name="name" id="fname" placeholder="Full Name" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="text" className="form-control" name="pan" id="pan" placeholder="PAN Number" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="text" className="form-control" name="Adress" id="Adress" placeholder="Address" />
                                            </div>
                                        </div>
                                    </div>
                                    {getContent()}
                                    <div className="submit-area">
                                        <button type="submit" className="theme-btn submit-btn" onClick={toggle}>Donate {getButtonName()}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>QR Code</ModalHeader>
                <ModalBody>
                    <img src={qrCode} alt="qr-code" width="100%" height="auto" style={{ maxHeight: '500px', objectFit: 'cover' }} />
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </Fragment>
    )
};
export default DonatePage;

