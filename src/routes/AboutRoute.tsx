import React, { FC, useContext } from "react"
import About from "../components/About/About"
import CartContext from "../context/CartContext"
import { RouteProps } from "../components/Interfaces"


const AboutRoute: FC<RouteProps> = ({ cartComp }) => {

    const { pizzaCart } = useContext(CartContext);

    return (
        <div>
            <About />
            {
                pizzaCart && <div style={{ position: "relative" }}>{cartComp}</div>
            }
        </div>
    )
}

export default AboutRoute