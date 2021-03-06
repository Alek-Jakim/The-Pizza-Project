import React, { useContext } from "react"
import "./TopChoices.css"
import pizzaData from "../../data/pizzaData.json"
import CartContext from "../../context/CartContext"
import Footer from "../Footer/Footer"


const TopChoices = () => {

    const { cartItems, setCartItems } = useContext(CartContext);

    function addToCart(id: number, name: string, price: number, quantity: number, img: string, e: any) {

        let itemExists = cartItems.some(item => item.name === name);

        if (!itemExists) {
            setCartItems([...cartItems, { id, name, price, quantity, img }]);
            e.target.disabled = true;
            e.target.innerHTML = "Added";
        }
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
                        <button className={`pizza-btn btn-${pizza.id}`} onClick={(e) => addToCart(pizza.id, pizza.name, pizza.price, 1, pizza.img, e)
                        }>Add to Cart</button>
                    </div>
                ))}
            </div>
            <Footer />
        </section>
    )
}

export default TopChoices