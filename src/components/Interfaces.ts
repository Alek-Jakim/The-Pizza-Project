import React from "react"

export interface RouteProps {
    cartComp: React.ReactNode;
}

export interface ICartProvider {
    children: React.ReactNode
}


export interface ICartItems {
    id: number;
    name: string;
    price: number;
    quantity: number;
    img: string;
}


export interface ICartContext {
    pizzaCart: boolean;
    setPizzaCart: React.Dispatch<React.SetStateAction<boolean>>;
    cartItems: ICartItems[];
    setCartItems: React.Dispatch<React.SetStateAction<ICartItems[]>>;
    cartTotal: number;
    setCartTotal: React.Dispatch<React.SetStateAction<number>>;
}

export interface itemObject {
    id: number,
    img: string,
    ingredients: string,
    name: string,
    price: number
}

