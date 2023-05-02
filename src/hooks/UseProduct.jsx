import React, { useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { useNavigate } from "react-router-dom";
 

/* export const useAddCart = () => {
  const { numberCart, setNumberCart } = React.useContext(ProductContext);
  const navigate = useNavigate();

  function handleAddCart(){
    setNumberCart(numberCart + 1)
  }

  function showShopping (typeButton){
    navigate(typeButton)
  }

  return {  handleAddCart, showShopping };
}; */
