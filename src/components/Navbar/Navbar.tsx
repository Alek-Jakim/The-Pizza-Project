import React, { FC, useEffect, useState, useContext } from "react"
import { Link, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai"
import { GiFullPizza } from "react-icons/gi"
import "./Navbar.css"
import CartContext from "../../context/CartContext"

const Navbar: FC = () => {

    const location = useLocation();

    const [currentPath, setCurrentPath] = useState<string>(location.pathname);
    const { pizzaCart, setPizzaCart, cartItems, burgerMenu, setBurgerMenu } = useContext(CartContext);

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [currentPath]);

    function handleBurger() {
        let burger: any = document.querySelector(".burger-links-container");
        setBurgerMenu(!burgerMenu);

        if (!burgerMenu) {
            burger.style.display = "block"
            setPizzaCart(false);
        } else {
            burger.style.display = "none"
        }
    }

    const handlePizzaCart = (): void => {
        let burger: any = document.querySelector(".burger-links-container");
        setPizzaCart(!pizzaCart);
        setBurgerMenu(!burgerMenu);
        burger.style.display = "none"
    }


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
                {
                    cartItems.length !== 0 && (
                        <Link to="/checkout" style={currentPath === "/checkout" ? { borderBottom: "2px solid var(--red-tide)" } : {}}>Checkout</Link>)
                }
            </div>


            <GiFullPizza className="burger-icon" onClick={handleBurger} />

            <div className="burger-links-container">
                <div className="burger-close">
                    <GiFullPizza className="burger-icon burger-icon-close" onClick={handleBurger} />
                </div>

                <div className="burger-links">
                    <Link to="/" style={currentPath === "/" ? { borderBottom: "2px solid var(--red-tide)" } : {}}>Home</Link>
                    <Link to="/about" style={currentPath === "/about" ? { borderBottom: "2px solid var(--red-tide)" } : {}}>About</Link>
                    <Link to="/menu" style={currentPath === "/menu" ? { borderBottom: "2px solid var(--red-tide)" } : {}}>Menu</Link>
                    <Link to="/contact" style={currentPath === "/contact" ? { borderBottom: "2px solid var(--red-tide)" } : {}}>Contact Us</Link>
                    {
                        cartItems.length !== 0 && (
                            <Link to="/checkout" style={currentPath === "/checkout" ? { borderBottom: "2px solid var(--red-tide)" } : {}}>Checkout</Link>)
                    }
                </div>
            </div>

            <div className="cart-icon-cont" onClick={handlePizzaCart}>
                <AiOutlineShoppingCart className="cart-icon" />
                <small className="cart-icon-num">{cartItems.length}</small>
            </div>
        </nav>
    )
}

export default Navbar