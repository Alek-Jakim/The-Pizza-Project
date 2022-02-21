import React, { FC } from "react"
import "./App.css"
import { pageTitle } from "./utils/pageTitle"

import Header from "./components/Header/Header"
import TopChoices from "./components/TopChoices/TopChoices"



const App: FC = () => {

  pageTitle("The Pizza Project | Home")

  return (
    <div className="app-container">
      <Header />
      <TopChoices />
    </div>
  )
}

export default App