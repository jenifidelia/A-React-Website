import React from "react";
import './Footer.css'
import Button from "./Button.js";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="footer-container">


                <div className="newsletter-section">
                    <p className="heading"> Join the Adventure newsletter to receive our best vacation deals </p>
                    <p className="smalltext"> You can unsubscribe at any time. </p>
                    <div className="form-container">
                        <form>
                            <input name='email' type='email' placeholder='Your Email'/>
                        </form>
                        <Link className="no-line" to="SignUp">
                            <Button style="outline" size="full-height"> Subscribe </Button>
                        </Link>
                    </div>
                </div>



                <div className="links-section">

                    <div className="about-us-container">
                        <p className="heading2"> About Us </p>
                        <Link to="Services" className="the-links"> How it works </Link>
                        <Link to="Services" className="the-links"> Testimonials </Link>
                        <Link to="Services" className="the-links"> Careers </Link>
                        <Link to="Services" className="the-links"> Investors </Link>
                        <Link to="Services" className="the-links"> Terms of Service </Link>
                    </div>

                    <div className="contact-us-container">
                        <p className="heading2"> Contact Us </p>
                        <Link to="Services" className="the-links"> Contact </Link>
                        <Link to="Services" className="the-links"> Support </Link>
                        <Link to="Services" className="the-links"> Destinations </Link>
                        <Link to="Services" className="the-links"> Sponsorships </Link>
                    </div>

                    <div className="videos-container">
                        <p className="heading2"> Videos </p>
                        <Link to="Services" className="the-links"> Submit Video </Link>
                        <Link to="Services" className="the-links"> Ambassadors </Link>
                        <Link to="Services" className="the-links"> Agency </Link>
                        <Link to="Services" className="the-links"> Influencer </Link>
                    </div>

                    <div className="social-media-container">
                        <p className="heading2"> Social Media </p>
                        <Link to="Services" className="the-links"> Instagram </Link>
                        <Link to="Services" className="the-links"> Facebook </Link>
                        <Link to="Services" className="the-links"> Youtube </Link>
                        <Link to="Services" className="the-links"> Twitter </Link>
                    </div>

                </div>



                <div className="logos-container">

                    <div className="trvl-logo-container">
                        <Link to="/" className="trvl-logo">
                            TRVL <i className="fa-brands fa-typo3"></i>
                        </Link>
                    </div>

                    <small className="copyright-container">
                        TRVL <i class="fa-regular fa-copyright"></i> 2020
                    </small>

                    <div className="social-media-logos-container">
                        <Link to="/" className="sm-logo">
                            <i class='fab fa-facebook-f' />
                        </Link>

                        <Link to="/" className="sm-logo">
                            <i class='fab fa-instagram' />
                        </Link>

                        <Link to="/" className="sm-logo">
                            <i class='fab fa-youtube' />
                        </Link>

                        <Link to="/" className="sm-logo">
                            <i class='fab fa-twitter' />
                        </Link>

                        <Link to="/" className="sm-logo">
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>

                </div>


            </div>

        </>
    )

}

export default Footer;