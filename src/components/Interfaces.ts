import React from "react"

export interface RouteProps {
    cartComp: React.ReactNode;
}

export interface ICartProvider {
    children: React.ReactNode
}


export interface ICartItems {
    image: string;
    name: string;
    price: number;
}

export interface ICartContext {
    pizzaCart: boolean;
    setPizzaCart: React.Dispatch<React.SetStateAction<boolean>>;
    cartItems: object[];
    setCartItems: React.Dispatch<React.SetStateAction<object[]>>;
}

