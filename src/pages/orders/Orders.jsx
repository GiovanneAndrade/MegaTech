import React, { useState } from "react";
import { List } from "@material-ui/core";
import { Nav } from "../../components/nav/Nav";
import styled from "styled-components";
import { ContainerHome } from "../home/Home";
import { OrderContext } from "../../contexts/OrderContext";
import { AccordionOders } from "../../components/accordionOders/AccordionOders";
import pare from "../../assets/images/pare.gif";
import { getFromLocalStorage } from "../../localStorage/LocalStorage";
import { NewContainerHome } from "../historic/Historic";
import Lottie from "react-lottie";
import animationData from "../../assets/images/signin.json";
function Orders() {
  const { order } = React.useContext(OrderContext);
  const products = order?.map((product) => product?.products);

  const myToken = getFromLocalStorage("megaTechAuth");
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
        {myToken ? (
          <>
            {order?.map((item) => (
              <AccordionOders orders={item} />
            ))}
          </>
        ) : (
          <NewContainerHome>
            Faça Login Para Prosseguir
            <Lottie options={defaultOptions} style={lottieStyle} />
          </NewContainerHome>
        )}
      </ContainerHome>
    </>
  );
}

export default Orders;

export const NewList = styled(List)`
  width: 800px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
