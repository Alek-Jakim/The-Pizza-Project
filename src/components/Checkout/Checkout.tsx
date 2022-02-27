import React, { FC, useContext } from "react"
import "./Checkout.css"
import Navbar from "../Navbar/Navbar"
import CartContext from "../../context/CartContext"

const Checkout: FC = () => {

    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <div className="checkout-container">
            <Navbar />

            <div className="checkout-items-container">
                {cartItems.length !== 0 && cartItems.map((item, index) => (
                    <div key={index} className="checkout-item">
                        <img src={item.img} className="checkout-img" alt={item.name} />
                        <div className="checkout-name">
                            <p className="checkout-name-col">Pizza</p>
                            <p>{item.name}</p>
                        </div>
                        <div className="checkout-quantity">
                            <p className="checkout-quantity-col">Quantity</p>
                            <p>{item.quantity}X</p>
                        </div>
                        <div className="checkout-price">
                            <p className="checkout-price-col">Price</p>
                            <p>€{item.price}</p>
                        </div>
                    </div>
                ))}
                <div className="checkout-total">

                </div>
            </div>
        </div>
    )
}

export default Checkout