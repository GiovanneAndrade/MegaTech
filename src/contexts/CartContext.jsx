import React, { useEffect, useState } from "react";

export const CartContext = React.createContext({});
 

export const CartProvider = (props) => {
  const [numberCart, setNumberCart] = useState(0);

  useEffect(() => {
    const existingCart = localStorage.getItem("megaTechCart");
    if (existingCart) {
      const cartArray = JSON.parse(existingCart);
      setNumberCart(cartArray.length);
    }
  }, []);

  return (
    <CartContext.Provider value={{ numberCart, setNumberCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

