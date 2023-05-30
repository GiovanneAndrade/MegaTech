import React from "react";
import { Nav } from "../../components/nav/Nav";
import { ContainerHome } from "../home/Home";
import styled from "styled-components";
import definicoes from "../../assets/images/definicoes.gif";
import Lottie from 'react-lottie';
import animationData from '../../assets/images/embreve.json';
export const Historic = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 

    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const lottieStyle = {
    width: "500px",  
    height: "500px", 
  }
  return (
    <>
      <Nav />
      <ContainerHome>
        <NewContainerHome>
          Trabalhando Nisso
          <Lottie options={defaultOptions} style={lottieStyle} />
        </NewContainerHome>
      </ContainerHome>
    </>
  );
};
export const NewContainerHome = styled(ContainerHome)`
  width: 500px;
  height: 500px;
  margin-top: 50px;
  font-size: 30px;
  border-radius: 10px;
  justify-content: center;
  //background: #fff;
  img {
    width: 300px;
  }
`;
