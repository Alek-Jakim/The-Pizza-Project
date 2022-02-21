import React, { FC } from "react"
import "./styles/App.css"
import Layout from "./components/Layout/Layout"


const App: FC = () => {
  return (
    <Layout title="The Pizza Project | Find your favorite pizza" description="Find the best pizzas in town" keywords="pizza, food, italian, enjoy">
      <div className="app-container">

      </div>
    </Layout>
  )
}

export default App