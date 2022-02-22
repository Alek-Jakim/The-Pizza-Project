import React, { FC, useEffect, useState, useContext } from "react"
import { Link, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai"
import "./Navbar.css"
import CartContext from "../../context/CartContext"

const Navbar: FC = () => {

    const location = useLocation();

    const [currentPath, setCurrentPath] = useState<string>(location.pathname);
    const { pizzaCart, setPizzaCart } = useContext(CartContext);

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [currentPath]);



    return (
        <nav className="navbar">
            <div className="nav-title">
                <h3>The Pizza Project</h3>
            </div>
            <div className="nav-links">
                <Link to="/" style={currentPath === "/" ? { borderBottom: "2px solid var(--red-tide)" } : {}}>Home</Link>
                <Link to="/about" style={currentPath === "/about" ? { borderBottom: "2px solid var(--red-tide)" } : {}}>About</Link>
                <Link to="/menu" style={currentPath === "/menu" ? { borderBottom: "2px solid var(--red-tide)" } : {}}>Menu</Link>
                <Link to="/contact" style={currentPath === "/contact" ? { borderBottom: "2px solid var(--red-tide)" } : {}}>Contact Us</Link>
            </div>
            <div className="cart-icon-cont">
                <AiOutlineShoppingCart className="cart-icon" onClick={() => setPizzaCart(!pizzaCart)} />
                <small className="cart-icon-num">{1}</small>
            </div>
        </nav>
    )
}

export default Navbar