import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Routes
import App from "./App";
import MenuRoute from "./routes/MenuRoute"
import AboutRoute from "./routes/AboutRoute"
import ContactRoute from "./routes/ContactRoute"

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/menu" element={<MenuRoute />} />
      <Route path="/about" element={<AboutRoute />} />
      <Route path="/contact" element={<ContactRoute />} />
    </Routes>
  </BrowserRouter>, document.getElementById("root"));


