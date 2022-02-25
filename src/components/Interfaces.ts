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
}

export interface PizzaQuantity {
    ["Margherita Elegance"]: number
    ["Pepperoni Fire"]: number
    ["Hawaiian Heaven"]: number
    ["Four Cheese Madness"]: number
    ["Four Seasons"]: number
    ["Devil-Style Diavola"]: number
}

export interface ValidObject {
    id: number;
    name: string;
    price: number;
}


export interface ICartContext {
    pizzaCart: boolean;
    setPizzaCart: React.Dispatch<React.SetStateAction<boolean>>;
    cartItems: ValidObject[];
    setCartItems: React.Dispatch<React.SetStateAction<ValidObject[]>>;
    pizzaQuantity: PizzaQuantity;
    setPizzaQuantity: React.Dispatch<React.SetStateAction<PizzaQuantity>>;
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

