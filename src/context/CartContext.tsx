import React, { createContext, useEffect, useState, FC } from "react";
import { ICartContext, ICartProvider } from "../components/Interfaces"


const defaultValues = {
    pizzaCart: false,
    setPizzaCart: () => false
}

const CartContext = createContext<ICartContext>(defaultValues);

export const CartProvider: FC<ICartProvider> = ({ children }) => {

    const [pizzaCart, setPizzaCart] = useState<boolean>(false);


    return (
        <CartContext.Provider value={{ pizzaCart, setPizzaCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext