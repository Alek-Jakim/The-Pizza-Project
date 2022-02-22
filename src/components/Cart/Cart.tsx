import React, { FC, useContext } from "react"
import "./Cart.css"
import { AiOutlineClose } from "react-icons/ai"
import { RiShoppingCartLine } from "react-icons/ri"
import CartContext from "../../context/CartContext"


interface item {
    image: string;
    name: string;
    price: number;
}


const Cart: FC = () => {

    const { pizzaCart, setPizzaCart, cartItems } = useContext(CartContext);



    return (
        <div className="cart-container">
            <AiOutlineClose className="cart-close-icon" onClick={() => setPizzaCart(!pizzaCart)} />
            {
                <div className="cart-inner">
                    <h1 className="cart-inner-title">Your Pizzas</h1>

                    {
                        cartItems.length === 0 ?
                            <div className="cart-empty">
                                <RiShoppingCartLine className="cart-empty-icon" />
                                <h3 className="cart-empty-text">Your cart is empty.</h3>
                            </div>
                            :
                            <div className="cart-items">
                                {cartItems.map((item: any, index) => (
                                    <div key={index} className="cart-item-container">
                                        <img className="cart-item-img" src={item.image} alt={item.name} />
                                        <div className="cart-item-text-wrap">
                                            <h3 className="cart-item-name">{item.name}</h3>
                                            <p className="cart-item-price">Price: {item.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                    }
                </div>
            }

        </div>
    )
}

export default Cart