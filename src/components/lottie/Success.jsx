import React from "react";
import Lottie from "react-lottie";

import animationCard from "../../assets/images/card.json";
import styled from "styled-components";
const Success = ({ message, icon, isResult }) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,

    animationData: icon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const lottieStyle = {
    width: isResult ? "40%" : "100px",
    height: isResult ? "40%" : "100px",
  };
  return (
    <SuccessContainer>
      <Lottie options={defaultOptions} style={lottieStyle} />
      <p>{message}</p>
    </SuccessContainer>
  );
};

export default Success;

export const SuccessContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p{
    font-size: 20px;
    color:#dadada;
    text-align: center
  }
`;
