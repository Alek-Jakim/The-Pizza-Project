import React, { FC } from "react"
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar: FC = () => {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link to="/menu">Complete Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
        </nav>
    )
}

export default Navbar