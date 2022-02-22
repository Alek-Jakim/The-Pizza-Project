import React from "react"

export interface RouteProps {
    cartComp: React.ReactNode;
}

export interface ICartProvider {
    children: React.ReactNode
}


export interface ICartContext {
    pizzaCart: boolean;
    setPizzaCart: React.Dispatch<React.SetStateAction<boolean>>;
}