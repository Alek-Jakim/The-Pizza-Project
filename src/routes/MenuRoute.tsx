import React, { FC, useContext, useEffect } from "react"
import { RouteProps } from "../components/Interfaces"
import CartContext from "../context/CartContext"
import Menu from "../components/Menu/Menu"
import { calculateTotal } from "../utils/mainFunctions"



const MenuRoute: FC<RouteProps> = ({ cartComp }) => {

    const { pizzaCart, cartItems, setCartTotal } = useContext(CartContext);

    useEffect(() => setCartTotal(calculateTotal(cartItems)), [cartItems])


    return (
        <div>
            <Menu />

            {
                pizzaCart && <div style={{ position: "relative" }}>{cartComp}</div>
            }
        </div>
    )
}

export default MenuRoute