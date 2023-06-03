import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { Home } from "./pages/home/Home";
import { Product } from "./pages/product/Product";
import { Shopping } from "./pages/shopping/Shopping";
import Orders from "./pages/orders/Orders";
import MyCart from "./pages/cart/MyCart";
import Favorites from "./pages/favorites/Favorites";
import { Contact } from "./pages/contact/Contact";
import { Historic } from "./pages/historic/Historic";
import { Offers } from "./pages/offers/Offers";
import { Signup } from "./pages/signup/Signup";
import { Signin } from "./pages/signin/Signin";
import { User } from "./pages/user/User";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
        />
        
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/user" element={<User />} />
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<MyCart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/historic" element={<Historic />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
