import React from "react"
import "./TopChoices.css"
import pizzaData from "../../data/pizzaData.json"


const TopChoices = () => {
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
                        <button className="pizza-btn">Add To Cart</button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TopChoices