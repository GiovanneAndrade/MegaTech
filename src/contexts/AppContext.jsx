import React, {  useState } from "react";

export const AppContext = React.createContext({});
 
export const AppProvider = (props) => {
 const [ newCard, setNewCard] = useState([{ name: "Selecione um cartão" }])
 const [ showCard, setShowCard ] = useState( null)
 const [ saved , setSaved ] = useState(false)
  return (
    <AppContext.Provider value={{  newCard, setNewCard,  showCard, setShowCard , saved , setSaved}}>
      {props.children}
    </AppContext.Provider>
  );
};
