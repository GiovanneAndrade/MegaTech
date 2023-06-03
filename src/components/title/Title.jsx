import React from "react";
import styled from "styled-components";
import { useCategorySelection } from "../../hooks/UseCategory";
import { CategoriesContext } from "../../contexts/Categories";
import { ProductContext } from "../../contexts/ProductContext";
export const Titles = ({ titles, isHome }) => {
  const { showCategory, setShowCategory, isCategory, setIsCategory } =
    React.useContext(CategoriesContext);
  const [selectedCategory, handleCategoryClick] = useCategorySelection();
  const { productOverview, setProductOverview } =
    React.useContext(ProductContext);
  function newTitle(titles, isHome) {
    if (isHome) {
      handleCategoryClick(titles);
    }
    return;
  }

  return (
    <Title onClick={() => newTitle(titles, isHome)}>
      <h1> {!titles?.name ? titles : titles?.name}</h1>
    </Title>
  );
};
export const Title = styled.div`
  padding: 15px 10px;
  margin-top: 20px;
  background-color: #32357b;
  color: white;
  width: 100%;
  max-height: 100px;
  cursor: pointer;
`;
