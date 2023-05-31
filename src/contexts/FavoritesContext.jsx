import React, { useEffect, useState } from "react";
import { getFavorities } from "../services/Services";

export const FavoritesContext = React.createContext({});
 
export const FavoritesProvider = (props) => {
  const [favorities, setFavorities] = useState([]);
  const [myFavorities, setMyFavorities] = useState();
  const [token, setToken] = useState();
  useEffect(() => {
    const favorities = getFavorities();
    favorities
      .then((response) => {
        console.log(response.data)
        setFavorities(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data.message);
        } else {
          console.log("Erro na requisição:", error.message);
        }
      });
  }, []);

  return (
    <FavoritesContext.Provider value={{ favorities, setFavorities, myFavorities, setMyFavorities }}>
      {props.children}
    </FavoritesContext.Provider>
  );
};
