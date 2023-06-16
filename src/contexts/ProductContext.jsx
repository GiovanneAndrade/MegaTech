import React, { useState } from "react";

export const ProductContext = React.createContext({});

export const ProductProvider = (props) => {
  const [productOverview, setProductOverview] = useState();
  const [scroll, setScroll] = useState(false);
  const [inputScroll, setInputScroll] = useState(false);
  const [page, setPage] = React.useState(1);
  const [wait, setWait] = useState(false);

  return (
    <ProductContext.Provider
      value={{
        productOverview,
        setProductOverview,
        scroll,
        setScroll,
        inputScroll,
        setInputScroll,
        page,
        setPage,
        wait,
        setWait,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
