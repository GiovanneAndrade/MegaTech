import React, { useState } from "react";
import { CategoriesContext } from "../contexts/Categories";
import { useNavigate } from "react-router-dom";

// Hook customizado para gerenciar o estado das categorias selecionadas
export function useCategorySelection(initialCategory) {
  const {
    showCategory,
    setAnchorEl,
    setShowCategory,
    isCategory,
    anchorEl,
    setIsCategory,
  } = React.useContext(CategoriesContext);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] =
    React.useState(initialCategory);
 
  const handleCategoryClick = (category) => {
    setSelectedCategory(category?.name);
    setIsCategory(category);
    if (showCategory || anchorEl) {
      setShowCategory(false);
      setAnchorEl(null);
      navigate("/");
    }
  };

  return [selectedCategory, handleCategoryClick];
}

export const usePopover = () => {
  const { anchorEl, setAnchorEl, category } =
    React.useContext(CategoriesContext);

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
