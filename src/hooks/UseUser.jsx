import React, { useState } from "react";
import { postAnddress, postUser, postSignin } from "../services/Services";
import { AnddressContext } from "../contexts/Anddress";
import { UserContext } from "../contexts/UserContext";
import { saveToLocalStorage } from "../localStorage/LocalStorage";

export function UseUser() {
  const { token, setToken } = React.useContext(UserContext);
 

  async function createUser(signup) {
    try {
      const user = await postUser(signup);
      console.log(user.data);
      return false;
    } catch (error) {
      console.log(error.response.data.message);
     // alert(error.response.status);
      return true;
    }
  }

  return { createUser };
}
export function UseSignin() {
  const { token, setToken } = React.useContext(UserContext);
  

  async function createSignin(login) {
    try {
      const user = await postSignin(login);
      saveToLocalStorage('megaTechAuth', user.data)
      setToken(user.data)
      return false;
    } catch (error) {
      console.log(error.response.data.message);
     // alert(error.response.status);
      return error.response.data.message;
    }
  }

  return { createSignin };
}
