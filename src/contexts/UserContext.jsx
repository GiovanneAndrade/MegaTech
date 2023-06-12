import React, { useEffect, useState } from "react";
import { getFromLocalStorage } from "../localStorage/LocalStorage";

export const UserContext = React.createContext({});
 
export const UserProvider = (props) => {
  const [ token, setToken ] = useState()
  const [showOtherComponent, setShowOtherComponent] = useState("editProfile");
  useEffect(() => {
    // Verifica se há um token no local storage
    const tokenLocal = getFromLocalStorage('megaTechAuth')

    // Se houver um token no local storage, atualiza o estado com o valor do token
    if (tokenLocal) {
      setToken(tokenLocal);
    }
  }, []);
  return (
    <UserContext.Provider value={{ token, setToken, showOtherComponent, setShowOtherComponent }}>
      {props.children}
    </UserContext.Provider>
  );
};
