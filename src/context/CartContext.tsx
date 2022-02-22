import React, { createContext, useState, FC } from "react";
import { ICartContext, ICartProvider } from "../components/Interfaces"


const defaultValues = {
    pizzaCart: false,
    setPizzaCart: () => false,
    cartItems: [{}],
    setCartItems: () => []
}

const CartContext = createContext<ICartContext>(defaultValues);

export const CartProvider: FC<ICartProvider> = ({ children }) => {

    const [pizzaCart, setPizzaCart] = useState<boolean>(false);

    const [cartItems, setCartItems] = useState<object[]>([]);


    return (
        <CartContext.Provider value={{ pizzaCart, setPizzaCart, cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext