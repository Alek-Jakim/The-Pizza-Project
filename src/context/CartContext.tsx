import React, { createContext, useState, FC } from "react";
import { ICartContext, ICartProvider, ValidObject, PizzaQuantity } from "../components/Interfaces"
import { defaultQuantityValues, defaultValues } from "../defaults/defaults"


const CartContext = createContext<ICartContext>(defaultValues);

export const CartProvider: FC<ICartProvider> = ({ children }) => {

    const [pizzaCart, setPizzaCart] = useState<boolean>(false);
    const [cartItems, setCartItems] = useState<ValidObject[]>([]);
    const [pizzaQuantity, setPizzaQuantity] = useState<PizzaQuantity>(defaultQuantityValues);
    const [cartTotal, setCartTotal] = useState<number>(0);



    return (
        <CartContext.Provider value={{ pizzaCart, setPizzaCart, cartItems, setCartItems, pizzaQuantity, setPizzaQuantity, cartTotal, setCartTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext