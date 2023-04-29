import React from "react";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { Nav } from "../../components/nav/Nav";
import { ContainerHome } from "../home/Home";

export const Contact = () => {
  return (
    <>
      <Nav />
      
      <ContainerHome>
        <ContactForm />
      </ContainerHome>
    </>
  );
};
