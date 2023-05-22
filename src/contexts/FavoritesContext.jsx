import React, { useEffect, useState } from "react";
import { getFavorities } from "../services/Services";

export const FavoritesContext = React.createContext({});
 
export const FavoritesProvider = (props) => {
  const [favorities, setFavorities] = useState([]);
  const [myFavorities, setMyFavorities] = useState();
 
  useEffect(() => {
    const favorities = getFavorities();
    favorities
      .then((response) => {
        setFavorities(response.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  return (
    <FavoritesContext.Provider value={{ favorities, setFavorities, myFavorities, setMyFavorities }}>
      {props.children}
    </FavoritesContext.Provider>
  );
};
