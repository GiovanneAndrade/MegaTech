import React, { useState } from "react";
import { CategoriesContext } from "../contexts/Categories";

// Hook customizado para gerenciar o estado das categorias selecionadas
export function useCategorySelection(initialCategory) {
  const [selectedCategory, setSelectedCategory] =
    React.useState(initialCategory);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return [selectedCategory, handleCategoryClick];
}

export const usePopover = () => {
  const { anchorEl, setAnchorEl } = React.useContext(CategoriesContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return {
    anchorEl,
    setAnchorEl,
    handleClick,
    handleClose,
  };
};
