import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

function useShoppingCart() {
  const existingCart = localStorage.getItem("megaTechCart");
  let initialItemsState = [];

  if (existingCart) {
    initialItemsState = JSON.parse(existingCart);
  }

  const [items, setItems] = useState(initialItemsState);

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );

  const handleAddItem = (id) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, quantity: Number(item.quantity) + 1 } : item
    );
    setItems(newItems);
  };

  const handleRemoveItem = (id) => {
    const newItems = items.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(Number(item.quantity) - 1, 0) }
        : item
    );
    setItems(newItems);
  };

  return {
    items,
    handleAddItem,
    handleRemoveItem,
    handleDeleteItem,
    subtotal,
  };
}

export default useShoppingCart;

export const useAddCart = () => {
  const { numberCart, setNumberCart } = React.useContext(CartContext);
  const navigate = useNavigate();

  function handleAddCart(productOverview) {
    setNumberCart(Number(numberCart) + 1);
  
    const existingCart = localStorage.getItem("megaTechCart");
    if (existingCart) {
      const cartArray = JSON.parse(existingCart);
      const productIndex = cartArray.findIndex(item => item.id === productOverview.id);
      if (productIndex >= 0) {
        cartArray[productIndex].quantity += productOverview.quantity;
      } else {
        cartArray.push(productOverview);
      }
      localStorage.setItem("megaTechCart", JSON.stringify(cartArray));
    } else {
      const cartArray = [productOverview];
      localStorage.setItem("megaTechCart", JSON.stringify(cartArray));
    }
  }
  
  

  function showShopping(typeButton, productOverview) {
    const existingCart = localStorage.getItem("megaTechCart");
    if (existingCart) {
      const cartArray = JSON.parse(existingCart);
      const productIndex = cartArray.findIndex(item => item.id === productOverview.id);
      if (productIndex >= 0) {
        cartArray[productIndex].quantity += productOverview.quantity;
      } else {
        cartArray.push(productOverview);
      }
      localStorage.setItem("megaTechCart", JSON.stringify(cartArray));
    } else {
      const cartArray = [productOverview];
      localStorage.setItem("megaTechCart", JSON.stringify(cartArray));
    }
    navigate(typeButton);
  }

  return { handleAddCart, showShopping };
};
