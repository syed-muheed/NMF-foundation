import React, { useState } from 'react';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import Logo from '../../images/logo-nmf.png'
import TeamSection from '../../components/TeamSection';

import vImg from '../../images/volunteer.jpg';

const VolunteerPage = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        file: null,
        note: '',
    });

    const [formStatus, setFormStatus] = useState({
        success: false,
        error: false,
    });

    const validateForm = () => {
        const errors = {};

        if (!formState.name.trim()) {
            errors.name = 'Name is required';
        }

        if (!formState.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
            errors.email = 'Invalid email address';
        }

        if (!formState.subject.trim()) {
            errors.subject = 'Subject is required';
        }

        if (!formState.file) {
            errors.file = 'CV is required';
        } else {
            const allowedFileTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

            if (!allowedFileTypes.includes(formState.file.type)) {
                errors.file = 'Please upload a PDF or DOCX file';
            }

            const maxSize = 5 * 1024 * 1024;

            if (formState.file.size > maxSize) {
                errors.file = 'File size exceeds 5MB limit';
            }
        }

        if (!formState.note.trim()) {
            errors.note = 'Case Description is required';
        }

        return errors;
    };

    const SubmitHandler = async (e) => {
        e.preventDefault();

        const errors = validateForm();

        if (Object.keys(errors).length > 0) {
            setFormStatus({ success: false, errors });
            return;
        }

        const formData = new FormData();
        formData.append('name', formState.name);
        formData.append('email', formState.email);
        formData.append('subject', formState.subject);
        formData.append('file', formState.file);
        formData.append('note', formState.note);

        try {
            const response = await fetch('https://api.halalfy.app/v1/open/web/volunteer/message', {
                method: 'POST',
                body: formData,
            });
            console.log(response)
            if (response.ok) {
                setFormStatus({ success: true, errors: {} });
            } else {
                setFormStatus({ success: false, errors: { general: 'Error sending email. Please try again later.' } });
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setFormStatus({ success: false, errors: { general: 'Error sending email. Please try again later.' } });
        }
    };

    return (
        <>
            <Navbar2 Logo={Logo} />
            <PageTitle pageTitle={'Volunteer'} pagesub={'Volunteer'} />
            <div className="volunteer-area">
                <div className="volunteer-wrap">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="volunteer-contact">
                                    <div className="volunteer-contact-form">
                                        <h2>Become a Volunteer</h2>
                                        <form
                                            onSubmit={SubmitHandler}
                                            className="contact-validation-active"
                                            id="contact-form-main"
                                        >
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="name"
                                                        id="name"
                                                        placeholder="First Name"
                                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        name="email"
                                                        id="email"
                                                        placeholder="Email"
                                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="subject"
                                                        id="subject"
                                                        placeholder="Subject"
                                                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group form-group-in">
                                                    <label htmlFor="file">{formState.file ? formState.file.name : 'Upload Your CV (PDF or DOCX)'}</label>
                                                    <div className="custom-file">
                                                        <input
                                                            id="file"
                                                            type="file"
                                                            accept=".pdf, .docx"
                                                            className="custom-file-input"
                                                            name="file"
                                                            onChange={(e) => setFormState({ ...formState, file: e.target.files[0] })}
                                                        />
                                                    </div>
                                                    <i className="ti-cloud-up"></i>
                                                </div>
                                                <div className="col-lg-12 col-12 form-group">
                                                    <textarea
                                                        className="form-control"
                                                        name="note"
                                                        id="note"
                                                        placeholder="Case Description..."
                                                        onChange={(e) => setFormState({ ...formState, note: e.target.value })}
                                                    ></textarea>
                                                </div>
                                                <div className="submit-area col-lg-12 col-12">
                                                    <button type="submit" className="theme-btn submit-btn">
                                                        Send Message
                                                    </button>
                                                    <div id="loader">
                                                        <i className="ti-reload"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="clearfix error-handling-messages">
                                                {formStatus?.errors?.general && <div id="error">{formStatus.errors.general}</div>}
                                                <div id="name-error">{formStatus?.errors?.name}</div>
                                                <div id="email-error">{formStatus?.errors?.email}</div>
                                                <div id="subject-error">{formStatus?.errors?.subject}</div>
                                                <div id="file-error">{formStatus?.errors?.file}</div>
                                                <div id="note-error">{formStatus?.errors?.note}</div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </>
    );
};

export default VolunteerPage;
