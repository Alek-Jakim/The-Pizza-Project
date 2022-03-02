import React, { FC, useContext, useEffect } from "react"
import Checkout from "../components/Checkout/Checkout"
import { RouteProps } from "../components/Interfaces"
import CartContext from "../context/CartContext"
import { useNavigate, useLocation } from "react-router-dom";
import { pageTitle } from "../utils/pageTitle";

const CheckoutRoute: FC<RouteProps> = ({ cartComp }) => {

    const { pizzaCart, cartItems } = useContext(CartContext);

    pageTitle("The Pizza Project | Checkout");


    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (cartItems.length === 0 && location.pathname === "/checkout") {
            // Doesn't allow you to access the checkout page if there are no cart items
            navigate("/", { replace: true })
        }
    }, [cartItems])

    return (
        <div>
            <Checkout />

            {
                pizzaCart && <div style={{ position: "relative" }}>{cartComp}</div>
            }
        </div>
    )
}

export default CheckoutRoute