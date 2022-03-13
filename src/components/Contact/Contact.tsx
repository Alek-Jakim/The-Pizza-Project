import React, { useState, FormEvent } from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { IContactDetails } from "../Interfaces"
import "./Contact.css"
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const Contact = () => {

    let navigate = useNavigate();

    const [contactDetails, setContactDetails] = useState<IContactDetails>({
        name: "",
        email: "",
        message: ""
    });


    // see in checkout how to do this

    function handleContactSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const hasEmptyFields = Object.values(contactDetails).some((el) => el === "");

        if (hasEmptyFields) {
            toast.error("All fields must be filled out!");
        } else {
            toast.done("Thank you for your message!");
            setTimeout(() => {
                navigate("/", { replace: true });
            }, 3000);
        }
    }

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
                <ToastContainer />
                <div className="contact-right">
                    <div className="contact-form">
                        <h3>Write us a message</h3>
                        <form onSubmit={(e) => handleContactSubmit(e)}>
                            <div className="contact-name-email">
                                <input type="text" placeholder="Name" className="contact-name" onChange={(e) => setContactDetails({ ...contactDetails, name: e.target.value })} />
                                <input type="email" placeholder="Email" className="contact-email" onChange={(e) => setContactDetails({ ...contactDetails, email: e.target.value })} />
                            </div>
                            <textarea name="message" className="contact-message" placeholder="Message..." onChange={(e) => setContactDetails({ ...contactDetails, message: e.target.value })} ></textarea>
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