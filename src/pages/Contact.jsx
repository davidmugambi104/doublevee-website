import React, { useState } from 'react';

const Contact = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false); // State to manage form submission status
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { name, company, phone, message } = formData;

        // Create the mailto link
        const mailtoLink = `mailto:davidmugambi104@mail.com?subject=${encodeURIComponent(name)} - ${encodeURIComponent(company)}&body=Phone number: ${encodeURIComponent(phone)}%0A%0A${encodeURIComponent(message)}`;

        // Redirect to the mailto link
        window.location.href = mailtoLink;

        // Hide form and show success message
        setIsFormSubmitted(true);

        // Reset form after 5 seconds
        setTimeout(() => {
            setIsFormSubmitted(false);
            setFormData({
                name: '',
                company: '',
                email: '',
                phone: '',
                message: ''
            });
        }, 5000);
    };

    return (
        <div className="container contact">
            <div className="row">
                <div className="col-md-8 col-12 mx-auto">
                    <div className="card shadow-lg border-0 p-4">
                        <h1 className="text-center bg-dark text-white display-4 d-inline-block">Contact us</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group my-5">
                                <div className="row">
                                    <div className="col-md-6 col-12 mx-auto my-2">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="form-control-lg"
                                            placeholder="First Name"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 col-12 mx-auto my-2">
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="form-control-lg"
                                            placeholder="Last Name"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-5">
                                <div className="row">
                                    <div className="col-md-6 col-12 mx-auto my-2">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-control-lg"
                                            placeholder="Email Address"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 col-12 mx-auto my-2">
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="form-control-lg"
                                            placeholder="Phone no."
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-11">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="form-control"
                                        rows="5"
                                        placeholder="Your message"
                                        required
                                    ></textarea>
                                </div>
                            </div>
                            <div className="mt-5 col-md-6 col-12 mx-auto">
                                <button type="submit" className="btn btn-outline-dark btn-lg btn-block">
                                    Send Message
                                </button>
                            </div>
                        </form>
                        {isFormSubmitted && (
                            <div className="reply-group mt-3 text-center">
                                <p>Your message has been sent successfully!</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
