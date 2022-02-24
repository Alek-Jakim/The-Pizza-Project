import React, { createContext, useState, FC } from "react";
import { ICartContext, ICartProvider, validObject, PizzaQuantity } from "../components/Interfaces"
import { defaultQuantityValues, defaultValues } from "../defaults/defaults"


const CartContext = createContext<ICartContext>(defaultValues);

export const CartProvider: FC<ICartProvider> = ({ children }) => {

    const [pizzaCart, setPizzaCart] = useState<boolean>(false);
    const [cartItems, setCartItems] = useState<validObject[]>([]);
    const [pizzaQuantity, setPizzaQuantity] = useState<PizzaQuantity>(defaultQuantityValues)

    return (
        <CartContext.Provider value={{ pizzaCart, setPizzaCart, cartItems, setCartItems, pizzaQuantity, setPizzaQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext