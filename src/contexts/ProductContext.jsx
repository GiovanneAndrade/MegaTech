import React,{ useState } from "react";
 

export const ProductContext = React.createContext({});

 
export const ProductProvider = (props) => {
 
  return (
    <ProductContext.Provider>
      {props.children}
    </ProductContext.Provider>
  );
};
