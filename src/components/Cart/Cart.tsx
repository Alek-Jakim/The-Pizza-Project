import React, { FC, useContext, useEffect } from "react"
import "./Cart.css"
import { AiOutlineClose } from "react-icons/ai"
import { RiShoppingCartLine } from "react-icons/ri"
import CartContext from "../../context/CartContext"
import { defaultQuantityValues } from "../../defaults/defaults"
import { returnBtnDefault } from "../../utils/helperFunctions"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import { validObject } from "../Interfaces"


const Cart: FC = () => {

    const { pizzaCart, setPizzaCart, cartItems, setCartItems, pizzaQuantity, setPizzaQuantity } = useContext(CartContext);

    // Increments the quantity of the pizzas in the cart
    function increment(item: validObject): void {

        if (pizzaQuantity[item.name] >= 0 && pizzaQuantity[item.name] < 10) {
            setPizzaQuantity({
                ...pizzaQuantity,
                [item.name]: pizzaQuantity[item.name] += 1
            });
        }
    }

    // Decrements the quantity of the pizzas in the cart
    function decrement(item: validObject): void {
        if (pizzaQuantity[item.name] > 0) {
            setPizzaQuantity({
                ...pizzaQuantity,
                [item.name]: pizzaQuantity[item.name] -= 1
            });
        }
    }


    useEffect(() => {
        // If the quantity of a pizza is set to 0, it is automatically removed from the cart
        for (let item in cartItems) {
            if (pizzaQuantity[cartItems[parseInt(item)].name] <= 0) {
                setCartItems([...cartItems.filter((i) => i.name !== cartItems[parseInt(item)].name)]);
                let targetBtn: any = document.querySelector(`.btn-${cartItems[parseInt(item)].id}`);

                targetBtn.innerHTML = "Add To Cart";
                targetBtn.disabled = false;
            }
        }
        cartItems.length === 0 && returnBtnDefault();
    }, [pizzaQuantity, cartItems.length])


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
                                {cartItems.map((item: any, index) => {
                                    return pizzaQuantity[item.name] !== 0 && <div key={index} className="cart-item-container">
                                        <div className="cart-item-text-wrap">
                                            <h3 className="cart-item-name">{item.name}</h3>
                                            <p className="cart-item-price">Price: €{item.price}</p>
                                        </div>
                                        <div className="cart-item-quantity">
                                            <MdKeyboardArrowLeft className="quantity-arrow" onClick={() => decrement(item)} />
                                            <p className="quantity-num">{pizzaQuantity[`${item.name}`]}</p>
                                            <MdKeyboardArrowRight className="quantity-arrow" onClick={() => increment(item)} />
                                        </div>
                                    </div>
                                })}
                                <div className="cart-btn-container">
                                    <button className="clear-cart-btn" onClick={() => {
                                        setCartItems([]);
                                        // Reset the pizza quantities
                                        setPizzaQuantity(defaultQuantityValues);

                                    }}>Clear Cart</button>
                                    <button className="checkout-btn">Checkout</button>
                                </div>
                            </div>
                    }
                </div>
            }

        </div>
    )
}

export default Cart