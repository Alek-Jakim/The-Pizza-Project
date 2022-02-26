import React, { createContext, useState, FC } from "react";
import { ICartContext, ICartProvider, ICartItems } from "../components/Interfaces"

export const defaultValues = {
    pizzaCart: false,
    setPizzaCart: () => true,
    cartItems: [],
    setCartItems: () => [],
    cartTotal: 0,
    setCartTotal: () => 0
}


const CartContext = createContext<ICartContext>(defaultValues);

export const CartProvider: FC<ICartProvider> = ({ children }) => {

    const [pizzaCart, setPizzaCart] = useState<boolean>(false);
    const [cartItems, setCartItems] = useState<ICartItems[]>([]);
    const [cartTotal, setCartTotal] = useState<number>(0);



    return (
        <CartContext.Provider value={{ pizzaCart, setPizzaCart, cartItems, setCartItems, cartTotal, setCartTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext