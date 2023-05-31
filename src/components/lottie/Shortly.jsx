import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/images/embreve.json";
import { ContainerHome } from "../../pages/home/Home";
import { NewContainerHome } from "../../pages/historic/Historic";
import styled from "styled-components";
export const Shortly = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,

    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const lottieStyle = {
    width: "80%",
    height: "80%",
  };
  return (
    <ContainerHomeLottie>
      <NewContainerHome>
        Trabalhando Nisso
        <Lottie options={defaultOptions} style={lottieStyle} />
      </NewContainerHome>
    </ContainerHomeLottie>
  );
};
export const ContainerHomeLottie = styled(ContainerHome)`
  align-items: center;
  justify-content: center;
`;
