import React, { useEffect, useState } from "react";
import { getAddress } from "../services/Services";

export const AnddressContext = React.createContext({});

export const AnddressProvider = (props) => {
  const [selectedAddress, setSelectedAddress] = useState();
  const [newAnddress, setNewAnddress] = useState([]);
  const [myAnddress, setMyAddress] = useState({
    name_recipient: "",
    district: "",
    city: "",
    uf: "",
    cep: "",
  });
  
  useEffect(() => {
    const address = getAddress();
    address
      .then((response) => {
        setNewAnddress(response.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  return (
    <AnddressContext.Provider
      value={{
        newAnddress,
        setNewAnddress,
        myAnddress,
        setMyAddress,
        selectedAddress,
        setSelectedAddress,
      }}
    >
      {props.children}
    </AnddressContext.Provider>
  );
};
