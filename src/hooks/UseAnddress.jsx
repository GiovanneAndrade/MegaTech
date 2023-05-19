import React, { useState } from "react";
import { postAnddress } from "../services/Services";
import { AnddressContext } from "../contexts/Anddress";

export const AddAddress = () => {
  const { myAnddress, newAnddress, setNewAnddress} = React.useContext(AnddressContext);
  function createAnddress() {
   
    const anddress = postAnddress(myAnddress);
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
