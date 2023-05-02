import React from "react";

export const AppContext = React.createContext({});
const teste = "teste";
export const AppProvider = (props) => {
  return (
    <AppContext.Provider value={{ teste }}>
      {props.children}
    </AppContext.Provider>
  );
};
