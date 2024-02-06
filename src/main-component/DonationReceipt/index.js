import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import Logo from '../../images/logo-nmf.png';
import { Button } from '@mui/material'; // Import Button from Material UI or your preferred UI library

import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const DonationReceipt = () => {
    const { orderId } = useParams();
    const [donationDetails, setDonationDetails] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate hook

    useEffect(() => {
        const fetchDonationDetails = async () => {
            try {
                const response = await fetch(`https://api.halalfy.app/v1/open/web/donation/details/${orderId}`);
                const data = await response.json();

                if (response.ok) {
                    setDonationDetails(data);
                } else {
                    throw new Error(data.message || 'Failed to fetch donation details');
                }
            } catch (error) {
                toast.error(error.message);
            }
        };

        if (orderId) {
            fetchDonationDetails();
        }
    }, [orderId]);

    // Handler for navigating back home
    const handleBackHome = () => {
        navigate('/'); // Adjust the path as per your routing setup
    };

    return (
        <Fragment>
            <Navbar2 Logo={Logo} />
            <PageTitle pageTitle={'Thank You for Your Donation'} pagesub={'Your generous support makes a difference'} />
            <div className="wpo-donation-page-area section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="wpo-donate-header">
                                <h2>Donation Receipt</h2>
                            </div>
                            <div className="wpo-donations-details">
                                {donationDetails ? (
                                    <>
                                        <h3 className='mb-3'>Thank you for your donation!</h3>
                                        <p className='mb-0'><strong>Transaction ID:</strong> {donationDetails.transactionId}</p>
                                        <p><strong>Payment Status:</strong> {donationDetails.paymentStatusText}</p>
                                        <p>A detailed receipt will be sent to your email shortly.</p>
                                        <div className="submit-area">
                                            <button type="submit" className="theme-btn submit-btn fs-6" onClick={handleBackHome}>Back Home</button>
                                        </div>
                                    </>
                                ) : (
                                    <p>Loading donation details...</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default DonationReceipt;
