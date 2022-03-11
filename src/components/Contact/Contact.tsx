import React from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import "./Contact.css"
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa"

const Contact = () => {
    return (
        <div className="contact-container">
            <Navbar />

            <div className="contact-center-container">
                <div className="contact-left">
                    <h3 className="contact-left-header">Contact</h3>
                    <p>Address: <span className="contact-detail">53111 Beuel Street 44, Bonn</span></p>
                    <p>Email: <span className="contact-detail">pizza-project@gmail.com</span></p>
                    <p style={{ marginBottom: "100px" }}>Contact number: <span className="contact-detail">+49-0171-4738397</span></p>
                    <div className="contact-left-icon-container">
                        <h3 className="contact-right-header">Follow Us</h3>
                        <div className="contact-left-icons">
                            <FaFacebook className="contact-icon" />
                            <FaInstagram className="contact-icon" />
                            <FaTiktok className="contact-icon" />
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <div className="contact-form">
                        <h3>Write us a message</h3>
                        <form>
                            <div className="contact-name-email">
                                <input type="text" placeholder="Name" className="contact-name" />
                                <input type="email" placeholder="Email" className="contact-email" />
                            </div>
                            <textarea name="message" className="contact-message" placeholder="Message..." ></textarea>
                            <button type="submit" className="contact-btn">Send</button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Contact