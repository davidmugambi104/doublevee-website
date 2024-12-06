import React from 'react'
import { FaFacebookSquare,FaLinkedin } from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import {Link} from 'react-router-dom';
 // Adjust this based on your file structure

function About() {
    return (
    <div className="container aboutus">
        <div className="row">
            <div className="col-md-6 col-12 my-auto">
                <img src={require('../images/about.svg')} alt="about us" className="img-fluid" />
            </div>
            <div className="col-md-6 col-12 my-auto">
                    <h1 className="display-4 text-center my-5">About Us </h1>
                    <p className="lead text-justify text-center">We're dedicated to providing exceptional experiences. Connect with us to learn more!</p>
                    <div className="text-center col-md-6 col-12 mx-auto">
                        <Link to="/contact" className="btn btn-outline-dark btn-block btn-lg my-5">Contact Us</Link>
                    </div>
            </div>
        </div>
        <div className="about_company">
                <h1 className="display-4">About Company</h1>
                <div className="pt-4">
                    <p className="about_info">Welcome to Doublevee Lounge, the premier destination for relaxation, social gatherings, and unforgettable experiences. Nestled in the heart of <a href="https://bit.ly/3ZErO26">RUIRU</a>, we offer a unique blend of comfort, luxury, and exceptional service that sets us apart from the rest.

At Doublevee Lounge, we take pride in creating an atmosphere where guests can unwind, connect, and enjoy the finest in entertainment and hospitality. Whether you’re seeking a vibrant night out, a cozy evening with friends, or a venue for your next private event, Doublevee Lounge provides an unparalleled experience tailored to your needs.</p>
                </div>
        </div>
        <div className="testimony">
                <h1 className="display-4 mb-4">What Our Clients Say</h1>
                <div className="row mb-5">
                    <div className="col-md-10 col-12 mx-auto">
                        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner card border-0 shadow-lg p-4">
                                <div className="carousel-item active text-center">
                                    <div className="row">
                                        <div className="col-md-8 col-12 my-auto">
                                            <img src={require('../images/customers/customer.svg')} className="text-center img-fluid" width="450" height="400" alt="customer1" />
                                        </div>
                                        <div className="col-md-4 col-12 my-auto">
                                            <div className="text-dark">
                                                <h3 className="font-weight-bolder ">Customer ABC</h3>
                                                <p>"<strong>Exceptional Service:</strong> Customers appreciate the attentive and friendly staff who go above and beyond to ensure a welcoming and enjoyable experience for everyone."</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={require('../images/customers/customer1.svg')} className="text-center img-fluid" width="450" height="400" alt="customer2" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                            <div className="text-dark">
                                                <h3 className="font-weight-bolder ">Customer ABC</h3>
                                                <p>"<strong>Delicious Food and Drinks:</strong> Patrons love the high-quality food and creative cocktails that Doublevee Lounge offers. The drinks are expertly mixed, and the menu features a variety of dishes that cater to different tastes, adding to the overall appeal of the place."</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={require('../images/customers/customer3.svg')} className="text-center img-fluid" width="450" height="400" alt="customer3" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h3 className="font-weight-bolder ">Customer RTY</h3>
                                            <p><strong>Ambiance and Atmosphere:</strong> The lounge’s stylish decor, comfortable seating, and vibrant yet relaxed atmosphere create the perfect setting for socializing, making it a favorite spot for both casual outings and special occasions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={require('../images/customers/customer4.svg')} className="text-center img-fluid" width="450" height="400" alt="customer4" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h3 className="font-weight-bolder ">Customer RTY</h3>
                                            <p>Live Entertainment and Events: Guests enjoy the dynamic lineup of live music, DJ sets, and special events that keep the energy high and create memorable nights out. The diverse entertainment options make Doublevee Lounge a go-to destination for a fun and lively experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="team">
            <h1 className="display-4">Our Team</h1>
        </div>
        <div className="row mb-5">
            <div className="col-md-4 col-12 mx-auto my-2">
                <div className="card border-0 shadow-lg p-4">
                    <img src={require('../images/ceo.png')} className="card-img-top" alt="director" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">Rosaline</h5>
                        <div className="card-text text-black-50">CEO <p className="float-right">5 years</p>
                        </div>
                        <h6 className="mt-5">CONNECT</h6>
                        <div className="d-flex justify-content-around">
                            <FaFacebookSquare className="connect" />
                            <AiFillInstagram className="connect" />
                            <FaLinkedin className="connect" />
                            <IoLogoYoutube className="connect" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12 mx-auto my-2">
                <div className="card border-0 shadow-lg p-4">
                    <img src={require('../images/customers/customer1.svg')} className="card-img-top" alt="director" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">Mugambi</h5>
                        <div className="card-text text-black-50">Website & Financial Support Consultant <p className="float-right">3 years</p>
                        </div>
                        <h6 className="mt-5">CONNECT</h6>
                        <div className="d-flex justify-content-around">
                            <FaFacebookSquare className="connect" />
                            <AiFillInstagram className="connect" />
                            <FaLinkedin className="connect" />
                            <IoLogoYoutube className="connect" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12 mx-auto my-2">
                <div className="card border-0 shadow-lg p-4">
                    <img src="https://source.unsplash.com/9UVmlIb0wJU/500x350" className="card-img-top" alt="director" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">Team Member</h5>
                        <div className="card-text text-black-50">Manager <p className="float-right">8 years</p>
                        </div>
                        <h6 className="mt-5">CONNECT</h6>
                        <div className="d-flex justify-content-around">
                            <FaFacebookSquare className="connect" />
                            <AiFillInstagram className="connect" />
                            <FaLinkedin className="connect" />
                            <IoLogoYoutube className="connect" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default About;