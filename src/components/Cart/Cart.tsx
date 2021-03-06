import { FC, useContext, useEffect } from "react"
import "./Cart.css"
import { AiOutlineClose } from "react-icons/ai"
import { RiShoppingCartLine } from "react-icons/ri"
import CartContext from "../../context/CartContext"
import { returnBtnDefault } from "../../utils/helperFunctions"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { increment, decrement, checkQuantity, calculateTotal } from "../../utils/mainFunctions"
import { Link } from "react-router-dom";



const Cart: FC = () => {

    const { pizzaCart, setPizzaCart, cartItems, setCartItems, cartTotal, setCartTotal, } = useContext(CartContext);


    useEffect(() => {
        // If the quantity of a pizza is set to 0, it is automatically removed from the cart
        for (let item in cartItems) {
            if (cartItems[item].quantity <= 0) {
                let targetBtn: any = document.querySelector(`.btn-${cartItems[parseInt(item)].id}`);

                if (targetBtn && targetBtn !== null) {
                    targetBtn.innerHTML = "Cart";
                    targetBtn.disabled = false;
                }
            }
        }
        cartItems.length === 0 && returnBtnDefault();
        checkQuantity(cartItems, setCartItems);
        setCartTotal(calculateTotal(cartItems));
    }, [cartItems])




    return (
        <div className="cart-container">
            <AiOutlineClose className="cart-close-icon" onClick={() => {
                setPizzaCart(!pizzaCart);
            }} />
            {
                <div className="cart-inner">
                    <h1 className="cart-inner-title">Your Items</h1>

                    {
                        cartItems.length === 0 ?
                            <div className="cart-empty">
                                <RiShoppingCartLine className="cart-empty-icon" />
                                <h3 className="cart-empty-text">Your cart is empty.</h3>
                            </div>
                            :
                            <div className="cart-items">
                                {cartItems.map((item: any, index) => {
                                    return item.quantity !== 0 && <div key={index} className="cart-item-container">
                                        <div className="cart-item-text-wrap">
                                            <h3 className="cart-item-name">{item.name}</h3>
                                            <p className="cart-item-price">Price: ???{item.price}</p>
                                        </div>
                                        <div className="cart-item-quantity">
                                            <AiOutlineMinus className="quantity-arrow" onClick={() => decrement(item, cartItems, setCartItems)} />
                                            <p className="quantity-num">{item.quantity}</p>
                                            <AiOutlinePlus className="quantity-arrow" onClick={() => increment(item, cartItems, setCartItems)} />
                                        </div>
                                    </div>
                                })}
                                <div className="cart-total">
                                    <p>Total: ???{cartTotal.toFixed(1)}</p>
                                </div>
                                <div className="cart-btn-container">
                                    <button className="clear-cart-btn" onClick={() => {
                                        setCartItems([]);
                                        setCartTotal(0);
                                    }}>Clear Cart</button>
                                    <button className="checkout-btn" onClick={() => setPizzaCart(false)}><Link to="/checkout" style={{ textDecoration: "none", color: "#ce2711", fontSize: "1.3rem" }}>Checkout</Link></button>
                                </div>
                            </div>
                    }
                </div>
            }

        </div>
    )
}

export default Cart