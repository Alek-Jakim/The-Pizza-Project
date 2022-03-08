import React from "react"
import Navbar from "../Navbar/Navbar"
import "./Contact.css"

const Contact = () => {
    return (
        <div className="contact-container">
            <Navbar />

            <div className="contact-center-container">
                <div className="contact-left"></div>
                <div className="contact-right">
                    <div className="contact-form">
                        <h3>Write us a message</h3>
                        <form>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact