import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

function useShoppingCart() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Product A",
      price: 10,
      quantity: 1,
      imageUrl: "https://imgs.casasbahia.com.br/55011374/1xg.jpg?imwidth=292",
    },
    {
      id: 2,
      name: "Product B",
      price: 20,
      quantity: 1,
      imageUrl: "https://imgs.casasbahia.com.br/55011374/1xg.jpg?imwidth=292",
    },
    {
      id: 3,
      name: "Product C",
      price: 15,
      quantity: 1,
      imageUrl: "https://imgs.casasbahia.com.br/55011374/1xg.jpg?imwidth=292",
    },
  ]);

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleAddItem = (id) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setItems(newItems);
  };

  const handleRemoveItem = (id) => {
    const newItems = items.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
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

  function handleAddCart(){
    setNumberCart(numberCart + 1)
  }

  function showShopping (typeButton){
    navigate(typeButton)
  }

  return {  handleAddCart, showShopping };
};