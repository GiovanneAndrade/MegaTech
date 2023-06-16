import React, { useState } from "react";
import { getSearch, postAnddress } from "../services/Services";
import { AnddressContext } from "../contexts/Anddress";
import { getFromLocalStorage } from "../localStorage/LocalStorage";
import { CategoriesContext } from "../contexts/Categories";
import { ProductContext } from "../contexts/ProductContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const AddAddress = () => {
  const { myAnddress, newAnddress, setNewAnddress, wait, setWait } =
    React.useContext(AnddressContext);
  function createAnddress() {
    const myToken = getFromLocalStorage("megaTechAuth");
    const anddress = postAnddress(myAnddress, myToken?.id);
    setWait(true);
    anddress
      .then((response) => {
        console.log(response.data);
       if(wait) setWait(false);
        setNewAnddress([...newAnddress, response.data]);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        if(wait) setWait(false);
        toast.error("Erro ao criar endereço!");
      });
  }

  return { createAnddress };
};

export const useSearch = () => {
  const { showCategory, setShowCategory, setIsCategory } =
    React.useContext(CategoriesContext);
  const { scroll, setScroll, inputScroll, setInputScroll, wait, setWait } =
    React.useContext(ProductContext);
  
  function handleSearch(searchTerm) {
     
    const name = `Busca para: ${searchTerm}`;
    const search = getSearch(searchTerm);
    setWait(true);
    search
      .then((response) => {
        console.log(response.data);
        setShowCategory(false);
        setIsCategory({ name: name, products: response.data });
        setScroll(true);
        setInputScroll(true);
        setWait(false);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setWait(false);
        toast.error("Erro ao fazer pesquisa!");
      });
  }

  return { handleSearch };
};
