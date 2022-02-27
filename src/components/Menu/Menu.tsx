import React, { FC, useContext } from "react"
import "./Menu.css"
import Navbar from "../Navbar/Navbar"
import pizzaData from "../../data/pizzaData.json"
import CartContext from "../../context/CartContext"
import Footer from "../Footer/Footer"

const Menu: FC = () => {

    const { cartItems, setCartItems } = useContext(CartContext);

    function addToCart(id: number, name: string, price: number, quantity: number, img: string, e: any) {

        let itemExists = cartItems.some(item => item.name === name);

        if (!itemExists) {
            setCartItems([...cartItems, { id, name, price, quantity, img }]);
            e.target.disabled = true;
            e.target.innerHTML = "Added";
        }
    }

    return (
        <div className="menu-container">
            <Navbar />

            <div className="cart-menu">

                <div className="cart-menu-inner">
                    <div className="inner-menu-header">
                        <h3>Our Menu</h3>
                        <p>Authentic Pizza</p>
                    </div>

                    {
                        pizzaData && pizzaData.map((item, index) => (
                            <div key={index} className="cart-menu-item">
                                <div className="cart-menu-img">
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <div className="cart-menu-header">
                                    <h3>{item.name}</h3>
                                    <p>Price: €{item.price}</p>
                                </div>
                                <div className="cart-menu-ingredients">
                                    <small>{item.ingredients}</small>
                                </div>
                                <div className="cart-menu-btn">
                                    <button className="cart-menu-button" onClick={(e) => addToCart(item.id, item.name, item.price, 1, item.img, e)}>Add to Cart</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Menu