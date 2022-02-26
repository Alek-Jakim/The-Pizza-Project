import React, { FC } from "react"
import "./Menu.css"
import Navbar from "../Navbar/Navbar"
import pizzaData from "../../data/pizzaData.json"

const Menu: FC = () => {
    return (
        <div className="menu-container">
            <Navbar />

            <div className="cart-menu">
                <div className="cart-menu-left">
                    {
                        pizzaData && pizzaData.filter(item => item.id < 6).map((item, index) => (
                            <div key={index} className="cart-menu-item">
                                <img className="cart-menu-img" src={item.img} alt={item.name} />
                                <div className="cart-menu-item-header-left">
                                    <h3>{item.name}</h3>
                                    <p>Price: €{item.price}</p>
                                </div>

                            </div>
                        ))
                    }
                </div>
                <div className="cart-menu-right">
                    {
                        pizzaData && pizzaData.filter(item => item.id > 5).map((item, index) => (
                            <div key={index} className="cart-menu-item">
                                <div className="cart-menu-item-header-right">
                                    <h3>{item.name}</h3>
                                    <p>Price: €{item.price}</p>
                                </div>
                                <img className="cart-menu-img" src={item.img} alt={item.name} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Menu