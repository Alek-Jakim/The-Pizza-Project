import React from "react"
import "./Header.css"


import Navbar from "../Navbar/Navbar"

const Header = () => {
    return (
        <div className="main-container">

            <Navbar />

            {/* HEADER */}
            <div className="header-container">
                <div className="text-container">
                    <h1 className="header-title">Pizza never <br />tasted better</h1>
                    <p className="header-text">What are you waiting for ?</p>
                    <button className="header-btn">Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default Header