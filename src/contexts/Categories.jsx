import React, { useEffect, useState } from "react";
import { getCategories } from "../services/Services";
import { ProductContext } from "./ProductContext";

export const CategoriesContext = React.createContext({});

export const CategoriesProvider = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [category, setCategory] = useState();
  const [showCategory, setShowCategory] = useState(true);
  const [isCategory, setIsCategory] = useState([]);
  useEffect(() => {
    const categories = getCategories();
    categories
      .then((response) => {
        setCategory(response?.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  return (
    <CategoriesContext.Provider
      value={{
        anchorEl,
        setAnchorEl,
        category,
        setCategory,
        showCategory,
        setShowCategory,
        isCategory,
        setIsCategory,
      }}
    >
      {props.children}
    </CategoriesContext.Provider>
  );
};
