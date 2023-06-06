import React, { useEffect } from "react";
import { Nav } from "../../components/nav/Nav";
import ProductOverview from "../../components/ProductOverview/ProductOverview";
import { CategoriesContext } from "../../contexts/Categories";
import { ShowCategory } from "../categories/ShowCategory";
import Teste, { ProductContainer } from "../../../teste/Teste";
import { ListProducts } from "../../components/listProducts/ListProducts";
import { Titles } from "../../components/title/Title";
import {
  ContainerProductList,
  ProductOverviewContainer,
  ProductOverviewShowCategory,
} from "../../components/ProductOverview/ProductOverviewStyles";
import styled from "styled-components";
import { ProductContext } from "../../contexts/ProductContext";

export const Product = () => {
  return (
    <>
      <Nav />
      <ProductOverview />
      <ProductOverviewContainer>
        <ProductOverviewContainerBotton>
          <ProductOverviewShowCategory>
            <ShowCategory />
          </ProductOverviewShowCategory>
        </ProductOverviewContainerBotton>
      </ProductOverviewContainer>
    </>
  );
};

export const ProductOverviewContainerBotton = styled(ContainerProductList)`
  background: transparent;
`;
