import React from "react";
import { Nav } from "../../components/nav/Nav";
import styled from "styled-components";
import { ContainerHome } from "../home/Home";
import definicoes from "../../assets/images/definicoes.gif";
import { NewContainerHome } from "../historic/Historic";
import Lottie from "react-lottie";
import animationData from "../../assets/images/offers.json";
export const Offers = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,

    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const lottieStyle = {
    width: "500px",
    height: "500px",
    
  };
  return (
    <>
      <Nav />
      <ContainerHome>
        <NewContainerHome>
          Ofertas Em Breve{" "}
          <Lottie options={defaultOptions} style={lottieStyle} />
        </NewContainerHome>
      </ContainerHome>
    </>
  );
};
