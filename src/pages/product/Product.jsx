import React from "react";
import { Nav } from "../../components/nav/Nav";
import { ProductOverview } from "../../components/ProductOverview/ProductOverview";
import { CategoriesContext } from "../../contexts/Categories";
import { ShowCategory } from "../categories/ShowCategory";

export const Product = () => {
  const { category, showCategory, setShowCategory } =
    React.useContext(CategoriesContext);
  return (
    <>
      <Nav />
      <ProductOverview />
    </>
  );
};
