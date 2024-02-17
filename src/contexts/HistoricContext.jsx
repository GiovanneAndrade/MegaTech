import React, { useEffect, useState } from "react";
import { getHistoric } from "../services/Services";

export const HistoricContext = React.createContext({});
 
export const HistoricProvider = (props) => {
  const [historic, setHistoric] = useState([]);
  const [myHistoric, setMyHistoric] = useState();
   
  useEffect(() => {
    const historic = getHistoric();
    historic
      .then((response) => {
        console.log(response.data)
        setHistoric(response.data);
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
    <HistoricContext.Provider value={{ historic, setHistoric, myHistoric, setMyHistoric }}>
      {props.children}
    </HistoricContext.Provider>
  );
};
