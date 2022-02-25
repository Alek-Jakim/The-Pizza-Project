import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext"
import "./index.css"

//Routes
import App from "./App";
import MenuRoute from "./routes/MenuRoute"
import AboutRoute from "./routes/AboutRoute"
import ContactRoute from "./routes/ContactRoute"
import Cart from "./components/Cart/Cart"

ReactDOM.render(
  <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App cartComp={<Cart />} />} />
        <Route path="/menu" element={<MenuRoute cartComp={<Cart />} />} />
        <Route path="/about" element={<AboutRoute cartComp={<Cart />} />} />
        <Route path="/contact" element={<ContactRoute />} />
      </Routes>
    </BrowserRouter></CartProvider>, document.getElementById("root"));


