import React from "react";
import styled from "styled-components";
import { useCategorySelection } from "../../hooks/UseCategory";
import { CategoriesContext } from "../../contexts/Categories";
export const Titles = ({ titles }) => {
  const { showCategory, setShowCategory, isCategory, setIsCategory } =
    React.useContext(CategoriesContext);
  const [selectedCategory, handleCategoryClick] = useCategorySelection();

  function teste(titles) {
    handleCategoryClick(titles);
  }

  return (
    <Title onClick={() => teste(titles)}>
      {!titles?.name ? titles : titles?.name}
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
