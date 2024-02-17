import React from "react";
import { Nav } from "../../components/nav/Nav";

import styled from "styled-components";
import definicoes from "../../assets/images/definicoes.gif";
import Lottie from 'react-lottie';
import animationData from '../../assets/images/embreve.json';
import { Shortly } from "../../components/lottie/Shortly";
import { ContainerHome } from "../home/Home";
import { Products } from "../../components/products/Products";
import { NewConteiner } from "../favorites/Favorites";
import { HistoricContext } from "../../contexts/HistoricContext";
import { getFromLocalStorage } from "../../localStorage/LocalStorage";
export const Historic = () => {
  const { historic } = React.useContext(HistoricContext);
  const myToken = getFromLocalStorage("megaTechAuth");
 
  return (
    <>
      <Nav />
      <ContainerHome>
        {myToken ? (
          <NewConteiner>
            {historic?.map((historic) => (
              <div className="newDiv">
                <Products
                  name={historic?.name}
                  id={historic?.id}
                  avaliações={historic?.price}
                  images={historic?.images}
                  description={historic?.description}
                  quantity={historic?.quantity}
                  isFavorite={false}
                  category={historic?.category}
                />
              </div>
            ))}
          </NewConteiner>
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
