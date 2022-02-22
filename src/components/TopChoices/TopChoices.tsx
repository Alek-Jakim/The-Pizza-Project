import React, { useContext } from "react"
import "./TopChoices.css"
import pizzaData from "../../data/pizzaData.json"
import CartContext from "../../context/CartContext"
import { ICartItems } from "../../components/Interfaces"

const TopChoices = () => {

    const { cartItems, setCartItems } = useContext(CartContext);

    const addToCart = (image: string, name: string, price: number) => {
        setCartItems([...cartItems, { image, name, price }])
    }

    return (
        <section className="main-choices-container">
            <h3 className="choices-title">Our Top Choices</h3>
            <div className="choices-container">
                {pizzaData && pizzaData.filter(pizza => pizza.id <= 6).map((pizza, index) => (
                    <div className="pizza-card" key={index}>
                        <img className="pizza-img" src={pizza.img} />
                        <h3 className="pizza-name">{pizza.name}</h3>
                        <p className="pizza-ingredients">{pizza.ingredients}</p>
                        <p className="pizza-price"><span className="price-symbol">€</span>{pizza.price}</p>
                        <button className="pizza-btn" onClick={() => addToCart(pizza.img, pizza.name, pizza.price)}>Add To Cart</button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TopChoices