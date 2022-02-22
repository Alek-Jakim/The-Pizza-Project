import React, { FC } from "react"
import Navbar from "../components/Navbar/Navbar"
import { RouteProps } from "../components/Interfaces"



const MenuRoute: FC<RouteProps> = () => {
    return (
        <div>
            <Navbar />
            <h1>Menu Page</h1>
        </div>
    )
}

export default MenuRoute