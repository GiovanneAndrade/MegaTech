import React from "react";
import { Nav } from "../../components/nav/Nav";
import { NewContainerHome } from "../historic/Historic";
import UserRegistrationForm from "../../components/signup/UserRegistrationForm";

export const Signup = () => {
  return (
    <>
      <Nav />

      <UserRegistrationForm />
    </>
  );
};
