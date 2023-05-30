import React, { useState } from "react";
import { postAnddress } from "../services/Services";
import { AnddressContext } from "../contexts/Anddress";
import { getFromLocalStorage } from "../localStorage/LocalStorage";

export const AddAddress = () => {
  const { myAnddress, newAnddress, setNewAnddress} = React.useContext(AnddressContext);
  function createAnddress() {
    const myToken = getFromLocalStorage("megaTechAuth");
    const anddress = postAnddress(myAnddress, myToken?.id);
    anddress
      .then((response) => { 
        console.log(response.data);
       
        setNewAnddress([...newAnddress, response.data])
        
      })
      .catch((error) => {
        console.log(error.response.data.message);
        alert(error.response.status);
      });
  }

  return { createAnddress };
};
