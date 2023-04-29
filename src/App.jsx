import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { Home } from "./pages/home/Home";
import { Product } from "./pages/product/Product";
import { Shopping } from "./components/shopping/Shopping";
import Orders from "./pages/orders/Orders";
import MyCart from "./pages/cart/MyCart";
import  Favorites  from "./pages/favorites/Favorites";
import { Contact } from "./pages/contact/Contact";

 
 

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<MyCart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/contact" element={<Contact />} />
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
