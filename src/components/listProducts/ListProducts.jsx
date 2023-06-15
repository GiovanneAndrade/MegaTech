import React, { useRef, useState } from "react";
import { Products } from "../products/Products";
import {
  HomeContainer,
  ListProductsContainer,
  Next,
  Prev,
  ScrollContainer,
} from "./ListProductsStyles";
import banner from "../../assets/images/ipad-card-40-pro-202108 1.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GrPrevious, GrNext } from "react-icons/gr";
import { Element, scroller } from "react-scroll";
import { CategoriesContext } from "../../contexts/Categories";
import { AppContext } from "../../contexts/AppContext";
import { useScroll } from "../../hooks/UseScroll";

export const ListProducts = ({ products, type, category }) => {
  const [prevHovered, setPrevHovered] = useState(false);
  const [nextHovered, setNextHovered] = useState(false);
  const { showCategory } = React.useContext(CategoriesContext);
 
  const { ref: listProductsRef, scrollLeft, scrollRight } = useScroll();

  return (
    <HomeContainer showCategory={showCategory}>
      <div
        className={`buttonLeft ${prevHovered ? "hovered" : ""}`}
        onClick={scrollLeft}
        onMouseEnter={() => setPrevHovered(true)}
        onMouseLeave={() => setPrevHovered(false)}
      >
        &lt;
      </div>

      <ListProductsContainer
        type={type}
        id="list-products-container"
        ref={listProductsRef}
      >
        {products?.map((product) => (
          <Products
            name={product.name}
            avaliações={product.price}
            images={product?.images}
            description={product.description}
            quantity={product?.quantity}
            stoke={product?.stoke}
            id={product?.id}
            category={category}
          />
        ))}
      </ListProductsContainer>

      <div
        className={`buttonRight ${nextHovered ? "hovered" : ""}`}
        onClick={scrollRight}
        onMouseEnter={() => setNextHovered(true)}
        onMouseLeave={() => setNextHovered(false)}
      >
        &gt;
      </div>
    </HomeContainer>
  );
};
