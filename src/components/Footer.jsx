import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaGithub } from 'react-icons/fa';
// import { IoLogoYoutube } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer id="sticky-footer" className="bg-light text-dark-50">
            <div className="container py-1">
                <div className="row">
                    <div className="col-md-6 col-12 my-auto">
                        <small>Copyright &copy; davidmugambi104@gmail.com</small>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="d-flex float-right">
                            
                            <a href="#" target="_blank">
                                <FaLinkedin className="connect text-dark" />
                            </a>
                            <a href="#" target="_blank">
                                <FaFacebookSquare className="connect text-dark" />
                            </a>
                            <a href="#" target="_blank">
                                <AiFillInstagram className="connect text-dark" />
                            </a>

                            <a href="#" target="_blank">
                                <FaGithub className="connect text-dark" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
