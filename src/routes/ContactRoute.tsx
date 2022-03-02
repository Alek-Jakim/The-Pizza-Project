import React, { useContext, FC } from "react"
import CartContext from "../context/CartContext";
import { pageTitle } from "../utils/pageTitle";
import { RouteProps } from "../components/Interfaces"
import Contact from "../components/Contact/Contact";

const ContactRoute: FC<RouteProps> = ({ cartComp }) => {

    const { pizzaCart } = useContext(CartContext);
    pageTitle("The Pizza Project | Our Menu");

    return (
        <div>
            <Contact />

            {
                pizzaCart && <div style={{ position: "relative" }}>{cartComp}</div>
            }
        </div>
    )
}

export default ContactRoute