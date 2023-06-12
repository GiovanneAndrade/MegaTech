import React, { useEffect } from "react";
import { CategoriesContext } from "../../contexts/Categories";
import { Title, Titles } from "../../components/title/Title";
import { ListProducts } from "../../components/listProducts/ListProducts";
import { ContainerRightInternal } from "../../components/containerRight/ContainerRightStyles";
import { getFromLocalStorage } from "../../localStorage/LocalStorage";
import { ProductContext } from "../../contexts/ProductContext";
import Success from "../../components/lottie/Success";
import isResult from "../../assets/images/error.json";
import styled from "styled-components";
import CustomIcons from "../../components/Pagintion/Pagintion";
import { Box } from "@mui/material";
export const ShowCategory = () => {
  const { category, setShowCategory, isCategory, setIsCategory, showCategory } =
    React.useContext(CategoriesContext);
  const {
    productOverview,
    setProductOverview,
    scroll,
    setScroll,
    inputScroll,
    setInputScroll,
  } = React.useContext(ProductContext);

  useEffect(() => {
    if (!scroll) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      if (scroll) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      if (inputScroll || !showCategory) {
        window.scrollTo({
          top: 600,
          behavior: "smooth",
        });
      }
      setScroll(false);
    }
  }, [isCategory, productOverview, showCategory]);

  return (
    <ContainerRightInternal>
      <Titles titles={isCategory?.name} isHome={false} />
      {isCategory?.products?.length === 0 ? (
        <IsResul>
          <Success message={"Sem Resultado"} icon={isResult} isResult={true} />
        </IsResul>
      ) : (
        <ListProducts
          type={"isCategory"}
          products={isCategory?.products}
          category={isCategory}
        />
      )}
      <PagintionContainer>
        <CustomIcons />
      </PagintionContainer>
    </ContainerRightInternal>
  );
};

export const IsResul = styled.div`
  width: 100%;
  height: 100%;
`;
export const PagintionContainer = styled(Title)`
  display: flex;
  justify-content: center;
`;
