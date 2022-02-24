export const defaultQuantityValues = {
    ["Margherita Elegance"]: 1,
    ["Pepperoni Fire"]: 1,
    ["Hawaiian Heaven"]: 1,
    ["Four Cheese Madness"]: 1,
    ["Four Seasons"]: 1,
    ["Devil-Style Diavola"]: 1,
}

export const defaultValues = {
    pizzaCart: false,
    setPizzaCart: () => true,
    cartItems: [],
    setCartItems: () => [],
    pizzaQuantity: defaultQuantityValues,
    setPizzaQuantity: () => defaultQuantityValues
}

