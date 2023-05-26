import React from "react";
import { Nav } from "../../components/nav/Nav";
import { NewContainerHome } from "../historic/Historic";
import UserRegistrationForm from "../../components/signup/UserRegistrationForm";
import FormLogin from "../../components/nav/formSignin/FormLogin";

export const Signin = () => {
  return (
    <>
      <Nav />
      <NewContainerHome>
        <FormLogin/>
      </NewContainerHome>
    </>
  );
};
