import React, { FC, useContext, useState } from "react"
import "./Checkout.css"
import Navbar from "../Navbar/Navbar"
import CartContext from "../../context/CartContext"
import { ICardDetails } from "../Interfaces"
import { formatDate, isPassedDate, validCardData } from "../../utils/helperFunctions"

const Checkout: FC = () => {

    const { cartItems, cartTotal } = useContext(CartContext);

    let defaultDate = new Date();

    const [cardDetails, setCardDetails] = useState<ICardDetails>({
        cardType: "",
        cardHolder: "",
        cardNumber: 0,
        cardDate: defaultDate.getMonth() + "-" + defaultDate.getFullYear(),
        cardCode: 0
    });
    const [error, setError] = useState<string>("");



    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const hasEmptyFields: boolean = Object.values(cardDetails).some((el) => el === "" || el === 0);

        if (hasEmptyFields) {
            //toastify
            setError("All card fields must be filled out!");
            return;
        } else if (validCardData(cardDetails)) {
            setError("Invalid card data!");
        }

        console.log(isPassedDate(cardDetails.cardDate))
    }



    return (
        <div className="checkout-container">
            <Navbar />

            <div className="checkout-items-container">
                {cartItems.length !== 0 && cartItems.map((item, index) => (
                    <div key={index} className="checkout-item">
                        <img src={item.img} className="checkout-img" alt={item.name} />
                        <div className="checkout-name">
                            <p className="checkout-name-col">Pizza</p>
                            <p>{item.name}</p>
                        </div>
                        <div className="checkout-quantity">
                            <p className="checkout-quantity-col">Quantity</p>
                            <p>{item.quantity}X</p>
                        </div>
                        <div className="checkout-price">
                            <p className="checkout-price-col">Price</p>
                            <p>€{item.price}</p>
                        </div>
                    </div>
                ))}
                <div className="checkout-total">
                    <p>Total: €{cartTotal.toFixed(1)}</p>
                </div>
            </div>

            <div className="checkout-payment">
                <form className="checkout-select-card" onSubmit={(e) => handleSubmit(e)}>
                    <select className="select-menu" placeholder="Select Card" onChange={(e) => setCardDetails({ ...cardDetails, cardType: e.target.value })} defaultValue={"DEFAULT"}>
                        <option value={"DEFAULT"} disabled={true}>Select Card</option>
                        <option value="mastercard">Mastercard</option>
                        <option value="visa">Visa</option>
                        <option value="american-express">American Express</option>
                    </select>
                    <input type="text" className="cardholder" placeholder="Name of cardholder" onChange={(e) => setCardDetails({ ...cardDetails, cardHolder: e.target.value })} />
                    <input type="number" className="cardnumber" placeholder="Number" maxLength={16} onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: parseInt(e.target.value) })} />
                    <div className="card-year-code">
                        <input type="date" className="cardyear" placeholder="MM/JJJJ" onChange={(e) => setCardDetails({ ...cardDetails, cardDate: formatDate(e.target.value) })} />
                        <input type="number" className="cardcode" placeholder="Verification Code" onChange={(e) => setCardDetails({ ...cardDetails, cardCode: parseInt(e.target.value) })} />
                    </div>
                    <input type="submit" value="Confirm Payment" className="payment-btn" />
                </form>
            </div>
        </div>
    )
}

export default Checkout