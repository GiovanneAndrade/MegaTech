import React from "react";

export const UserContext = React.createContext({});
const User = "User";
export const UserProvider = (props) => {
  return (
    <UserContext.Provider value={{ User }}>
      {props.children}
    </UserContext.Provider>
  );
};
