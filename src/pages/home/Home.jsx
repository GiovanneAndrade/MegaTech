import React from "react";
import styled from "styled-components";

import { Banner } from "../../components/banner/Banner";
import { Nav } from "../../components/nav/Nav";

import { ContainerLeft } from "../../components/containerLeft/ContainerLeft";
import { ContainerRight } from "../../components/containerRight/ContainerRight";

import { AppContext } from "../../contexts/AppContext";
import { CartContext } from "../../contexts/CartContext";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { OrderContext } from "../../contexts/OrderContext";
import { PaymentContext } from "../../contexts/PaymentContext";
import { ProductContext } from "../../contexts/ProductContext";
import { UserContext } from "../../contexts/UserContext";
import { CategoriesContext } from "../../contexts/Categories";
import { ShowCategory } from "../categories/ShowCategory";
import { CardsSkeleton } from "../../components/skeletons/CardsSkeleton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnddressContext } from "../../contexts/Anddress";
import GlobalModal from "../../components/orderComplete/GlobalModal";

export const Home = () => {
  const { showCategory, setShowCategory, category } =
    React.useContext(CategoriesContext);
  const { cart } = React.useContext(CartContext);
  const { Favorites } = React.useContext(FavoritesContext);
  const { Order } = React.useContext(OrderContext);
  const { Payment } = React.useContext(PaymentContext);
  const { wait, setWait } = React.useContext(ProductContext);
  const { User } = React.useContext(UserContext);

  return (
    <>
      <Nav />
      <Banner />
      <GlobalModal wait={wait} message={"Aguarde..."} />
      <ContainerHome>
        <Conteiner>
          <div className="containerLeft">
            <ContainerLeft />
            <div className="banner">
              <button>Ir Agora</button> 50% de Desconto
            </div>
          </div>
          {!category ? (
            <Skeleton>
              <CardsSkeleton />
              <CardsSkeleton />
            </Skeleton>
          ) : showCategory ? (
            <ContainerRight />
          ) : (
            <ShowCategory />
          )}
        </Conteiner>
      </ContainerHome>
    </>
  );
};

export const Skeleton = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100vh;
`;
export const ContainerHome = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Conteiner = styled.div`
  display: flex;
  gap: 1em;
  padding: 10px;
  width: 170vh;
  background: #fff;
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
    margin-top: 0;
    .containerLeft {
      display: none;
    }
  }
`;
