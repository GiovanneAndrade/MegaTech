import React from "react";
import { ListProducts } from "../listProducts/ListProducts";
import { Titles } from "../title/Title";
import { ContainerRightInternal } from "./ContainerRightStyles";
import { CategoriesContext } from "../../contexts/Categories";

export const ContainerRight = () => {
  const { category } = React.useContext(CategoriesContext);
   
  return (
    <ContainerRightInternal >
      {category?.map((category) => (
        <>
          <Titles titles={category} />
          <ListProducts  type={'allCategory'} products={category?.products}/>
        </>
      ))}
    </ContainerRightInternal>
  );
};
