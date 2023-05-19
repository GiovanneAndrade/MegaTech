import React, { useState } from "react";
import { postFavorities, postRemoveFavorities } from "../services/Services";
import { FavoritesContext } from "../contexts/FavoritesContext";
 

export function useCreateFavorites() {
  const { favorities, setFavorities, myFavorities, setMyFavorities  } = React.useContext(FavoritesContext);

  async function createFavorites(id) {
  
    try {
      const myFavorites = await postFavorities(id);
      if (myFavorites?.data) {
        setFavorities([...favorities, myFavorites.data]);
      }
      return false;
    } catch (error) {
      console.log(error.response);
      alert(error.response.status);
      return true;
    }
  }

  async function removeFavorites(id) {
 
    try {
      const myFavorites = await postRemoveFavorities(id);
      const newFavorite = favorities.filter(f => f.id !== id);
       if (myFavorites.data) {
        setFavorities(newFavorite)
      } 
      return false;
    } catch (error) {
      console.log(error.response);
      alert(error.response.status);
      return true;
    }
  }

  return { createFavorites, removeFavorites };
}

 
