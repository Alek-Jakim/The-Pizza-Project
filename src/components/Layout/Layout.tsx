import React, { FC } from "react"
import Navbar from "../Navbar/Navbar"
import "./Layout.css"


interface LayoutInterface {
  description: string;
  keywords: string;
  title: string;
  children?: any
}

const Layout: FC<LayoutInterface> = ({ description, keywords, title, children }) => {
  return (
    <div>
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </head>



      <div className="layout-container">
        <Navbar />
        {children}
      </div>

      {/* FOOTER */}
    </div>
  )
}

export default Layout

Layout.defaultProps = {
  title: "The Pizza Project | Delicious and Creative",
  description: "Find the best pizzas in town",
  keywords: "pizza, food, italian, enjoy"
}