import React, { useState } from "react";
import { getSearch, postAnddress } from "../services/Services";
import { AnddressContext } from "../contexts/Anddress";
import { getFromLocalStorage } from "../localStorage/LocalStorage";
import { CategoriesContext } from "../contexts/Categories";
import { ProductContext } from "../contexts/ProductContext";

export const AddAddress = () => {
  const { myAnddress, newAnddress, setNewAnddress } =
    React.useContext(AnddressContext);
  function createAnddress() {
    const myToken = getFromLocalStorage("megaTechAuth");
    const anddress = postAnddress(myAnddress, myToken?.id);
    anddress
      .then((response) => {
        console.log(response.data);

        setNewAnddress([...newAnddress, response.data]);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        alert(error.response.status);
      });
  }

  return { createAnddress };
};

export const useSearch = () => {
  const { showCategory, setShowCategory, setIsCategory } =
    React.useContext(CategoriesContext);
  const { scroll, setScroll, inputScroll, setInputScroll } = React.useContext(ProductContext);
  
  function handleSearch(searchTerm) {
    const name = `Busca para: ${searchTerm}`;
    const search = getSearch(searchTerm);
    search
      .then((response) => {
        console.log(response.data);
        setShowCategory(false);
        setIsCategory({ name: name, products: response.data });
        setScroll(true);
        setInputScroll(true)
      })
      .catch((error) => {
        console.log(error.response.data.message);
        alert(error.response.status);
      });
  }

  return { handleSearch };
};
