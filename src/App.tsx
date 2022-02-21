import React, { FC } from "react"
import "./App.css"
import { pageTitle } from "./utils/pageTitle"
import Navbar from "./components/Navbar/Navbar"


const App: FC = () => {

  pageTitle("The Pizza Project | Home")

  return (
    <div className="app-container">
      <Navbar />

      <div className="header-container">
        <div className="text-container">
          <h1 className="header-title">Pizza never <br />tasted better</h1>
          <p className="header-text">What are you waiting for ?</p>
          <button className="header-btn">Place Order</button>
        </div>
      </div>
    </div>
  )
}

export default App