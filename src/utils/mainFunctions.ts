import { ICartItems } from "../components/Interfaces"

export function increment(item: ICartItems, cartItems: ICartItems[], setCartItems: React.Dispatch<React.SetStateAction<ICartItems[]>>): void {

    const { name, quantity } = item;

    if (quantity >= 0 && quantity < 10) {
        // 1. Make a shallow copy of the items
        let items = [...cartItems];
        // 2. Make a shallow copy of the item you want to mutate
        let updatedItem = items.find(i => i.name === name);
        let updatedItemIndex = cartItems.indexOf(item);
        // 3. Increase quantity
        updatedItem.quantity += 1;
        // 4.Put it back into the array. I am mutating the array here, but that's why I made a copy first
        items[updatedItemIndex] = updatedItem;
        // 5.Set the state to the new copy
        setCartItems(items);
    }
}

// Decrements the quantity of the pizzas in the cart
export function decrement(item: ICartItems, cartItems: ICartItems[], setCartItems: React.Dispatch<React.SetStateAction<ICartItems[]>>): void {

    const { name, quantity } = item;



    if (quantity > 0) {
        let items = [...cartItems];

        let updatedItem = items.find(i => i.name === name);

        let updatedItemIndex = cartItems.indexOf(item);

        updatedItem.quantity -= 1;

        items[updatedItemIndex] = updatedItem;

        setCartItems(items);
    }
}


export const checkQuantity = (cartItems: ICartItems[], setCartItems: React.Dispatch<React.SetStateAction<ICartItems[]>>): void => {

    for (let key in cartItems) {
        if (cartItems[key].quantity <= 0) {
            setCartItems([...cartItems.filter(item => item.id !== cartItems[key].id)]);
        }
    }

}


export const calculateTotal = (cartItems: ICartItems[], cartTotal: number, setCartTotal: React.Dispatch<React.SetStateAction<number>>) => {
    let total = 0;

    for (let key in cartItems) {
        if (cartItems[key].quantity === 0) {
            total += cartItems[key].price
        } else {
            let pq = cartItems[key].quantity * cartItems[key].price
            total += pq;
        }
    }
    return total
}

