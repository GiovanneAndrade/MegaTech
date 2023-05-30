import { makeStyles } from "@material-ui/core/styles";
import { Nav } from "../../components/nav/Nav";
import {
  InformationProducts,
  ProductsContainer,
} from "../../components/products/ProducsSlyles";
import styled from "styled-components";
import { ContainerHome, Conteiner } from "../home/Home";
import { Products } from "../../components/products/Products";
import pare from "../../assets/images/pare.gif";
import React from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { getFromLocalStorage } from "../../localStorage/LocalStorage";
import { NewContainerHome } from "../historic/Historic";
const useStyles = makeStyles({
  root: {
    maxWidth: 240,
  },
  media: {
    height: 140,
  },
});

function Favotites() {
  const classes = useStyles();
  const { favorities } = React.useContext(FavoritesContext);

  const myToken = getFromLocalStorage("megaTechAuth");
  return (
    <>
      <Nav />
      <ContainerHome>
        {myToken ? (
          <NewConteiner>
            {favorities?.map((product) => (
              <div className="newDiv">
                <Products
                  name={product?.name}
                  id={product?.id}
                  avaliações={product?.price}
                  image={product?.image}
                  description={product?.description}
                  quantity={product?.quantity}
                  isFavorite={true}
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
}

export default Favotites;
export const NewProductsContainer = styled(ProductsContainer)`
  width: 50px;
`;
export const NewInformationProducts = styled(InformationProducts)``;
export const NewConteiner = styled(Conteiner)`
  flex-wrap: wrap;
  background: transparent;
  gap: 60px;

  justify-content: center;
  .newDiv {
    width: 200px;
  }
`;
 
