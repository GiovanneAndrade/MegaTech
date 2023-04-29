import React from "react";
import { Banner } from "../../components/banner/Banner";
import { ListProducts } from "../../components/listProducts/ListProducts";
import { Nav } from "../../components/nav/Nav";
import styled from "styled-components";
import banner from "../../assets/images/ipad-card-40-pro-202108 1.png";
import { style } from "@mui/system";
import { ContainerLeft } from "../../components/containerLeft/ContainerLeft";
import { ContainerRight } from "../../components/containerRight/ContainerRight";
export const Home = () => {
  return (
    <>
      <Nav />
      <Banner />
      <ContainerHome>
        <Conteiner>
          <div className="containerLeft">
            <ContainerLeft />
            <div className="banner">
              <button>Ir Agora</button> 50% de Desconto
            </div>
            <ContainerLeft />
          </div>
          <ContainerRight />
        </Conteiner>
      </ContainerHome>
    </>
  );
};

export const ContainerHome = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
 
`;
export const Conteiner = styled.div`
  display: flex;
  gap: 1em;
  padding: 10px;
  width: 170vh;
  background:#fff;
  margin-top: 30px;
  border-radius: 5px;
 
  .banner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 95%;
    height: 100px;
    background: #f6ae2d;
    color: #000;
    font-size: 20px;
    padding: 30px;
    text-align: center;
    gap: 0.5em;
    border-radius: 2%;
  }
  .banner button {
    width: 70%;
    height: 80px;
  }
  .containerLeft {
    display: flex;
    flex-direction: column;
    gap: 65px;
    padding: 20px 0;
    width: 20%;
  
  }
  
  @media screen and (max-width: 768px) {
    width: 100%;

    .containerLeft {
      display: none;
    }
  }
`;
