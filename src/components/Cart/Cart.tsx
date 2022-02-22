import React, { FC, useContext } from "react"
import "./Cart.css"
import { AiOutlineClose } from "react-icons/ai"
import CartContext from "../../context/CartContext"


const Cart: FC = () => {

    const { pizzaCart, setPizzaCart } = useContext(CartContext);

    return (
        <div className="cart-container">
            <AiOutlineClose className="cart-close-icon" onClick={() => setPizzaCart(!pizzaCart)} />
            <h1>Cart Component</h1>
        </div>
    )
}

export default Cart