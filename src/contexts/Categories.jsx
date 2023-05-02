import React, { useState } from "react";

export const CategoriesContext = React.createContext({});

 
export const CategoriesProvider = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
 
  return (
    <CategoriesContext.Provider value={{ anchorEl, setAnchorEl}}>
      {props.children}
    </CategoriesContext.Provider>
  );
};
