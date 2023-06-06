import React, { useState } from "react";
import { ListProducts } from "../listProducts/ListProducts";
import { Titles } from "../title/Title";
import { ContainerRightInternal } from "./ContainerRightStyles";
import { CategoriesContext } from "../../contexts/Categories";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
export const ContainerRight = () => {
  const { category } = React.useContext(CategoriesContext);
  const [scroll, setScroll] = useState(false);
  function showScroll() {
    setScroll(true);
    if (scroll) {
      window.scrollTo({
        top: 0,  
        behavior: "smooth"
      });
    }
  }
  return (
    <ContainerRightInternal>
      {category?.map((category) => (
        <>
          <Titles titles={category} isHome={true} />
          <ListProducts
            type={"allCategory"}
            products={category?.products}
            category={category}
          />
        </>
      ))}
      <div className="scroll-to-top" onClick={showScroll}>
        <ArrowCircleUpIcon  style={{ fontSize: 60, color:'#32357b' }} />
      </div>
    </ContainerRightInternal>
  );
};
