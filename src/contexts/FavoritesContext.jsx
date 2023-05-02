import React from "react";

export const FavoritesContext = React.createContext({});
const Favorites = "Favorites";
export const FavoritesProvider = (props) => {
  return (
    <FavoritesContext.Provider value={{ Favorites }}>
      {props.children}
    </FavoritesContext.Provider>
  );
};
