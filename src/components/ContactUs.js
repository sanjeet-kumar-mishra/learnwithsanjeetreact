import React from 'react'
import "./ContactUs.css"

const ContactUs = () => {
    return (
        <div>
            <section id="contact" className="contact">
                <div className="container">

                    <div className="section-title">
                        <h2>Contact Us</h2>
                    </div>

                    <div className="row">

                        <div className="col-lg-6">

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="info-box">
                                        <h3>Social Profiles</h3>
                                        <div className="social-links">
                                            <a href="/" className="twitter"><i className="bi bi-twitter"></i></a>
                                            <a href="/" className="facebook"><i className="bi bi-facebook"></i></a>
                                            <a href="/" className="instagram"><i className="bi bi-instagram"></i></a>
                                            <a href="/" className="google-plus"><i className="bi bi-skype"></i></a>
                                            <a href="/" className="linkedin"><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box mt-4">
                                        <h3>Email Me</h3>
                                        <p>sanjitkumarmishra4@gmail.com</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box mt-4">
                                        <h3>Call Me</h3>
                                        <p>+91 7008 726 317</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">
                            <form className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default ContactUs
