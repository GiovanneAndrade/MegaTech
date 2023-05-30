import React from "react";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { Nav } from "../../components/nav/Nav";
import { ContainerHome } from "../home/Home";
import pare from "../../assets/images/pare.gif";
import { NewContainerHome } from "../historic/Historic";
import { getFromLocalStorage } from "../../localStorage/LocalStorage";


export const Contact = () => {
  const myToken = getFromLocalStorage("megaTechAuth");
  return (
    <>
      <Nav />
      <ContainerHome>
        {myToken ? (
          <ContactForm />
        ) : (
          <NewContainerHome>
            Faça Login Para Prosseguir
            <img src={pare} />
          </NewContainerHome>
        )}
      </ContainerHome>
    </>
  );
};
