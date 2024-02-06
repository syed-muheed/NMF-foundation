import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loadReCaptcha } from 'react-recaptcha-v3'

import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo-nmf.png'

const DonatePage = () => {
    const [amount, setAmount] = useState('')
    const [isLoading, setLoading] = useState(false)

    const { donationType } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadReCaptcha(process.env.REACT_APP_RECAPTCHA_KEY)
    }, [])

    useEffect(() => {
        const validDonationTypes = ['zakat', 'sadaqah', 'ribba'];
        if (!validDonationTypes.includes(donationType)) {
            navigate('/404');
        }
    }, [donationType, navigate]);

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
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        validateForm()
        setLoading(true)
        try {
            window.grecaptcha.ready(async () => {
                const captchaToken = await window.grecaptcha.execute(process.env.REACT_APP_RECAPTCHA_KEY, { action: 'submit' });
                const requestPayload = {
                    donationType: donationType,
                    amount: amount,
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
                    setLoading(false)
                } else {
                    toast.error('Something went wrong! Please try again')
                    setLoading(false)
                }

            });
        } catch (error) {
            setLoading(false)
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

    const handleChange = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        setAmount(value);
    };

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
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" style={{ height: 50 }}>₹</span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={amount}
                                                onChange={handleChange}
                                                placeholder="Enter Donation Amount"
                                                pattern="[0-9]*"
                                                inputMode="numeric" 
                                            />
                                        </div>

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
                                    {getContent()}
                                    <div className="submit-area">
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="theme-btn submit-btn"
                                            onClick={handleSubmit}
                                        >
                                            {isLoading ? 'Loading...' : `Donate ${getButtonName()}`}
                                        </button>
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

