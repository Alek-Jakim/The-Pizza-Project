import React, { FC, useContext, useEffect } from "react"
import "./App.css"
import { pageTitle } from "./utils/pageTitle"

import Header from "./components/Header/Header"
import TopChoices from "./components/TopChoices/TopChoices"
import { RouteProps } from "./components/Interfaces"
import CartContext from "./context/CartContext"
import { calculateTotal } from "./utils/mainFunctions"

//React.ReactNode for component props

const App: FC<RouteProps> = ({ cartComp }) => {

  // Sets the tab title of the current page
  pageTitle("The Pizza Project | Home");

  const { pizzaCart, cartItems, setCartTotal } = useContext(CartContext);

  useEffect(() => setCartTotal(calculateTotal(cartItems)), [cartItems])

  return (

    <div>
      <Header />
      <TopChoices />
      {
        pizzaCart && <div style={{ position: "relative" }}>{cartComp}</div>
      }
    </div>
  )
}

export default App