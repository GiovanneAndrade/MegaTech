import React, { useState } from "react";

export const CartContext = React.createContext({});
 

export const CartProvider = (props) => {
  const [ numberCart, setNumberCart ] = useState(0)
  return (
    <CartContext.Provider value={{ numberCart, setNumberCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
