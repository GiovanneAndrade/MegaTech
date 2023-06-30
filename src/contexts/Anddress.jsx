import React, { useEffect, useState } from "react";
import { getAddress } from "../services/Services";

export const AnddressContext = React.createContext({});

export const AnddressProvider = (props) => {
  const [selectedAddress, setSelectedAddress] = useState();
  const [wait, setWait] = useState(false);
  const [newAnddress, setNewAnddress] = useState([]);
  const [waitAddress, setWaitAddress] = useState(false);
  const [myAnddress, setMyAddress] = useState({
    name_recipient: "",
    district: "",
    city: "",
    uf: "",
    cep: "",
  });
 
  useEffect(() => {
    const address = getAddress();
    setWaitAddress(false)
    address
      .then((response) => {
        setNewAnddress(response.data);
        setWaitAddress(true)
      })
      .catch((error) => {
        console.log(error);
        setWaitAddress(false)
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
        wait,
        setWait,
        waitAddress,
        setWaitAddress,
      }}
    >
      {props.children}
    </AnddressContext.Provider>
  );
};
