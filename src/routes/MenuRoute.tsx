import React, { FC, useContext } from "react"
import { RouteProps } from "../components/Interfaces"
import CartContext from "../context/CartContext"
import Menu from "../components/Menu/Menu"



const MenuRoute: FC<RouteProps> = ({ cartComp }) => {

    const { pizzaCart } = useContext(CartContext)

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