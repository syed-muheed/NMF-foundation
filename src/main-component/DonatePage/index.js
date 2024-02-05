import React, { Fragment, useEffect, useState } from 'react';
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
import SimpleReactValidator from 'simple-react-validator';
import { toast } from 'react-toastify';
import { loadReCaptcha } from 'react-recaptcha-v3'

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const validateMobile = (mobile) => {
    const re = /^[6-9]\d{9}$/;
    return re.test(mobile);
};

const DonatePage = () => {
    const [amount, setAmount] = useState('')
    const [name, setName] = useState('')
    const [pan, setPan] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')

    const { donationType } = useParams()

    useEffect(() => {
        loadReCaptcha(process.env.REACT_APP_RECAPTCHA_KEY)
    }, [])

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const getButtonName = () => {
        if (donationType === 'zakat') {
            return "Zakat"
        } else if (donationType === 'sadaqah') {
            return "Sadaqah"
        } else if (donationType === 'ribba') {
            return "Interest Impact"
        }
    }

    const validateForm = () => {
        if (!amount || isNaN(amount) || amount <= 0) {
            toast.error("Invalid amount");
            return
        }

        if (!name.trim()) {
            toast.error("Name is required");
            return
        }

        if (!validateEmail(email)) {
            toast.error("Invalid email");
            return
        }

        if (!validateMobile(mobile)) {
            toast.error("Invalid mobile number. Mobile number must be in Indian format starting with 6-9 and contain 10 digits.");
            return
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        validateForm()

        try {
            window.grecaptcha.ready(async () => {
                const captchaToken = await window.grecaptcha.execute(process.env.REACT_APP_RECAPTCHA_KEY, { action: 'submit' });
                const requestPayload = {
                    donationType: donationType,
                    isAnonymous: false,
                    name: name,
                    email: email,
                    amount: amount,
                    mobile: mobile,
                    pan: pan,
                    captcha: captchaToken
                };

                const response = await fetch('https://api.halalfy.app/v1/open/web/donation/initiate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestPayload)
                });
                const responseData = await response.json();
                if (responseData.paymentUrl) {
                    window.location.href = responseData.paymentUrl
                } else {
                    toast.error('Something went wrong! Please try again')
                }

            });
        } catch (error) {
            toast.error('Error during donation initiation:', error);
            }
    };


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
        } else if (donationType === 'ribba') {
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
        } else if (donationType === 'ribba') {
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
                                        <input
                                            type="number"
                                            min={0}
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            className="form-control"
                                            name="amount"
                                            id="amount"
                                            placeholder="Enter Donation Amount"
                                        />
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
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Full Name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="mobile"
                                                    id="mobile"
                                                    placeholder="Mobile Number"
                                                    value={mobile}
                                                    onChange={(e) => setMobile(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="pan"
                                                    placeholder="PAN Number"
                                                    value={pan}
                                                    onChange={(e) => setPan(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {getContent()}
                                    <div className="submit-area">
                                        <button type="submit" className="theme-btn submit-btn" onClick={handleSubmit}>Donate {getButtonName()}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default DonatePage;

