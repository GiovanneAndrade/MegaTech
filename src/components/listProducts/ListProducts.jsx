import React, { useState } from "react";
import { Products } from "../products/Products";
import {
  HomeContainer,
  ListProductsContainer,
  Next,
  Prev,
} from "./ListProductsStyles";
import banner from "../../assets/images/ipad-card-40-pro-202108 1.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GrPrevious, GrNext } from "react-icons/gr";
export const ListProducts = ({ products, type }) => {
  const [prevBgColor, setPrevBgColor] = useState("#F6AE2D");
  const [nextBgColor, setNextBgColor] = useState("#F6AE2D");
 
  const prev = () => {
    setNextBgColor("#F6AE2D");
  };
  const next = () => {
    setNextBgColor("transparent");
  };
  const handleNextMouseLeave = () => {
    setPrevBgColor("#F6AE2D");
  };
  const handlePrevMouseLeave = () => {
    setPrevBgColor("transparent");
  };
  const prevArrow = prevBgColor === "transparent" ? "none" : "block";
  const nextArrow = nextBgColor === "transparent" ? "none" : "block";
  return (
    <HomeContainer>
      <ListProductsContainer type={type}>
        {/*  <Next
          onClick={() =>  toast("Pra diretia",{ theme: "dark" })}
          
          prevBgColor={prevBgColor}
          onMouseEnter={handleNextMouseLeave}
          onMouseLeave={handlePrevMouseLeave}
        >
          <ToastContainer />
          <GrPrevious style={{ display: `${prevArrow}` }} />
        </Next> */}
        {products?.map((product) => (
          <Products
            name={product.name}
            avaliações={product.price}
            image={product?.image}
            description={product.description}
            quantity={product?.quantity}
            id={product?.id}
          />
        ))}
        {/*  <Prev
          onClick={() => toast("Pra diretia",{ theme: "dark" })}
          nextBgColor={nextBgColor}
          onMouseEnter={prev}
          onMouseLeave={next}
        >
          <GrNext style={{ display: `${nextArrow}` }} />
        </Prev> */}
      </ListProductsContainer>
    </HomeContainer>
  );
};
