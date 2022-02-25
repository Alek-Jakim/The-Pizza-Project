import React, { FC, useContext } from "react"
import "./App.css"
import { pageTitle } from "./utils/pageTitle"

import Header from "./components/Header/Header"
import TopChoices from "./components/TopChoices/TopChoices"
import { RouteProps } from "./components/Interfaces"
import CartContext from "./context/CartContext"

//React.ReactNode for component props

const App: FC<RouteProps> = ({ cartComp }) => {

  // Sets the tab title of the current page
  pageTitle("The Pizza Project | Home");

  const { pizzaCart } = useContext(CartContext);


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