import React from "react";
import { Nav } from "../../components/nav/Nav";
import HorizontalLinearStepper from "../../components/stepper/Stepper";
import { ContainerHome, Conteiner } from "../home/Home";

export const Shopping = () => {
  return (
    <>
      <Nav />
      <ContainerHome>
        <Conteiner>
          <HorizontalLinearStepper />
        </Conteiner>
      </ContainerHome>
    </>
  );
};
