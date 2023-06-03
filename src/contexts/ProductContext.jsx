import React, { useState } from "react";

export const ProductContext = React.createContext({});

export const ProductProvider = (props) => {
  const [productOverview, setProductOverview] = useState();
  const [scroll, setScroll] = useState(false);
  const [inputScroll, setInputScroll] = useState(false);
  return (
    <ProductContext.Provider
      value={{
        productOverview,
        setProductOverview,
        scroll,
        setScroll,
        inputScroll,
        setInputScroll,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
