import React, { FC, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"

const Navbar: FC = () => {

    const location = useLocation();

    const [currentPath, setCurrentPath] = useState<string>(location.pathname);

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [currentPath])

    return (
        <nav className="navbar">
            <div className="nav-title">
                <h3>The Pizza Project</h3>
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
        </nav>
    )
}

export default Navbar