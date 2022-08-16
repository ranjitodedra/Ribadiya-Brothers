import React from "react";
import { a } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <footer className="py-1">
                        <div className="row">

                            <div className="col-lg-3">
                                <h4>Ribadiya Brothers</h4>
                            </div>

                            <div className="col-lg-3">
                                <h5>Section</h5>
                                <ul className="nav-column">
                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0">Home</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0">Features</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0">Pricing</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0">FAQs</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0">About</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3">
                                <h5>Section</h5>
                                <ul className="nav-column">
                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0 ">Home</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0">Features</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0">Pricing</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0">FAQs</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0">About</a>
                                    </li>
                                </ul>
                            </div>

                            {/* Subscribe */}
                            <div className="col-lg-3">
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of whats new and exciting from us</p>
                                <form>
                                    <div className="col-lg-6 inbox">
                                        <input id="newsletter1" type="test" className="form-control"
                                            placeholder="Emial address" />
                                    </div>
                                    <div className="col-lg-6 inbox">
                                        <button className="btn btn-dark sub"
                                            type="button">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="d-flex justify-content-between pt-4 mt-4 border-top">
                            <p>2022 Ribadiya Brothers, Inc All rights reserved.</p>
                            <ul className="list-unstyled d-flex">

                                <li className="ms-3">
                                    <a className="link-light" to="#">
                                        <i className="fa fa-facebook fa-2x"></i>
                                    </a>
                                </li>

                                <li className="ms-3">
                                    <a className="link-light" to="#">
                                        <i className="fa fa-instagram fa-2x"></i>
                                    </a>
                                </li>

                                <li className="ms-3">
                                    <a className="link-light" to="#">
                                        <i className="fa fa-twitter fa-2x"></i>
                                    </a>
                                </li>

                            </ul>
                        </div>

                    </footer>
                </div>

            </footer>
        </div>
    )
}

export default Footer;