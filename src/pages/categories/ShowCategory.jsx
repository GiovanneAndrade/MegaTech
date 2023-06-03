import React, { useEffect } from "react";
import { CategoriesContext } from "../../contexts/Categories";
import { Titles } from "../../components/title/Title";
import { ListProducts } from "../../components/listProducts/ListProducts";
import { ContainerRightInternal } from "../../components/containerRight/ContainerRightStyles";
import { getFromLocalStorage } from "../../localStorage/LocalStorage";
import { ProductContext } from "../../contexts/ProductContext";
import Success from "../../components/lottie/Success";
import isResult from "../../assets/images/error.json";
import styled from "styled-components";
export const ShowCategory = () => {
  const { showCategory, setShowCategory, isCategory, setIsCategory } =
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
      if (inputScroll) {
        window.scrollTo({
          top: 600,
          behavior: "smooth",
        });
      }
      setScroll(false);
    }
  }, [isCategory, productOverview]);

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
    </ContainerRightInternal>
  );
};

export const IsResul = styled.div`
  width: 100%;
  height: 100%;
`;
