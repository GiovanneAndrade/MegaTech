import React, { useState } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img2 from "../../assets/images/mac2.jpg";
import img3 from "../../assets/images/mac3.jpg";
import { Rating, Stack } from "@mui/material";

import CreditCardIcon from "@mui/icons-material/CreditCard";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { ButtonsStyles } from "./ProductOverviewStyles";
import { Buttons } from "../button/Button";
import { ProductContext } from "../../contexts/ProductContext";
import { getFromLocalStorage } from "../../localStorage/LocalStorage";
const ProductOverview = () => {
  const myToken = getFromLocalStorage("megaTechAuth");
  const { productOverview, setProductOverview, scroll, setScroll } =
    React.useContext(ProductContext);
  const [selectColor, setSelectColor] = useState("");
  //const [scroll, setScroll] = useState(false);
  function color(isColor) {
    setSelectColor(isColor);
  }
  function showScroll() {
    setScroll(true);
  }

  React.useEffect(() => {
    if (scroll) {
      window.scrollTo({
        top: 1000,
        behavior: "smooth",
      });
    }
  }, [scroll, productOverview]);
  return (
    <ProductContainer color={selectColor} myToken={myToken}>
      <div className="product">
        <div className="banner">
          <div className="carousel-container">
            <Carousel
              showThumbs={false}
              showStatus={false}
              autoPlay={true}
              infiniteLoop={true}
            >
              <div>
                <img src={productOverview?.image} alt="Product 1" />
              </div>
              <div>
                <img src={img2} alt="Product 2" />
              </div>
              <div>
                <img src={img3} alt="Product 3" />
              </div>
            </Carousel>
          </div>
        </div>
        <div className="information">
          <h2>
            Purificador de Água Electrolux PE11X Prata com Painel Touch - Bivolt
          </h2>
          <Stack
            spacing={1}
            sx={{
              flexDirection: "row",
              alignItems: "center",
              gap: "5px",
              marginTop: "15px",
            }}
          >
            <Rating
              name="half-rating-read"
              defaultValue={5}
              precision={0.5}
              readOnly
            />
            (150)
          </Stack>
          <p>{productOverview?.description}</p>
          <h3>Cores:</h3>
          <div className="allColors">
            <div className="color1" onClick={() => color("color1")}></div>
            <div className="color2" onClick={() => color("color2")}></div>
            <div className="color3" onClick={() => color("color3")}></div>
          </div>
          <div className="newPrice">
            <h3 className="price"> R$ 4000 </h3>
            <div>
              <h2> R$4000 </h2>
              <ArrowDownwardIcon />
               
            </div>
          </div>

          <div className="card">
            <CreditCardIcon /> 10x1000
          </div>
          <p
            onClick={showScroll}
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            outras ofertas deste mesmo produto
          </p>

          <ButtonsStyles>
            <Buttons
              text={"adicionar ao carrinho"}
              typeButton={null}
              productOverview={productOverview}
              variant={"outlined"}
            />
            <Buttons
              text={"comprar agora"}
              typeButton={"/shopping"}
              productOverview={productOverview}
              variant={'contained'}
            />
          </ButtonsStyles>
        </div>
      </div>
    </ProductContainer>
  );
};

export const ProductContainer = styled.div`
  width: 100%;
  height: 87vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
      margin-top:50px;
    }
  .product {
    width: 70%;
    height: 80%;
    display: flex;
    justify-content: center;
    // background:#000;
    @media (max-width: 600px) {
      width: 85%;
      height: ${props => props.myToken?'65%':'70%'};
      flex-direction: column;
      align-items: center;
    }
    .banner {
      width: 40%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 600px) {
        align-items: center;
        width: 100%;
        height: 80%;
        
      }
      .carousel-container {
        width: 100%;
        position: relative;
      }
      .carousel .control-arrow {
        width: 70px;
        height: 100%;
      }
      .carousel .slide {
        background: none;
        height: 600px;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 600px) {
          height: 320px;
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        @media (max-width: 600px) {
          max-width: 100%;
          max-height: 100%;
        }
      }

      .carousel .control-dots {
        position: absolute;
        bottom: -10px;

        width: 100%;
        display: flex;
        justify-content: center;
      }

      .carousel .control-dots .dot {
        background: blue;
      }
    }

    .information {
      padding: 10px 10px 10px 20px;
      width: 40%;
      height: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      //  background-color: #b7b7b8;
      @media (max-width: 600px) {
        padding: 0;
       /// align-items: center;
        width: 100%;
      }
    }
    h2 {
      font-size: 20px;
      color: #727272;
      @media (max-width: 600px) {
        margin-top: 30px;
      }
    }
    p {
      font-size: 15px;
      color: #8f8d8d;
      margin-top: 20px;
    }
    h3 {
      margin: 20px 0;
    }
    .price {
      margin: 20px 0;
      font-size: 40px;
    }
    .allColors {
      display: flex;
      align-items: center;
      justify-content: space-around;
      @media screen and (max-width: 768px) {
        width: 100%;
        justify-content: space-between;
      }
    }

    .color1 {
      width: 113.9px;
      height: 40px;
      background: #774488;
      border: 1px solid #774488;
      box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
      border-radius: 10px;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        width: 100px;
      }
      border: ${(props) =>
        props.color === "color1" ? "2px solid #000" : "1px solid #a1c89b"};
    }
    .color2 {
      width: 113.9px;
      height: 40px;
      background: #c9a19c;
      border: 1px solid #c9a19c;
      box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
      border-radius: 10px;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        width: 100px;
      }
      border: ${(props) =>
        props.color === "color2" ? "2px solid #000" : "1px solid #a1c89b"};
    }
    .color3 {
      width: 113.9px;
      height: 40px;
      background: #a1c89b;
      // border: 1px solid #a1c89b;
      box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
      border-radius: 10px;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        width: 100px;
      }
      border: ${(props) =>
        props.color === "color3" ? "2px solid #000" : "1px solid #a1c89b"};
    }
    .card {
      display: flex;
      align-items: center;
      width: 100%;
      height: 50px;
      margin-top: -25px;
    }
    .newPrice {
      display: flex;
      align-items: center;
      gap: 1em;
      @media (max-width: 600px) {
        height: 110px;
      }
    }
    .newPrice h2 {
      font-size: 10px;
      text-decoration: line-through;
      color: #fff;
      @media (max-width: 600px) {
       margin-bottom:29px;
       font-size: 15px;
      }
    }
    .newPrice div {
      display: flex;
      width: 80px;
      height: 30px;
      align-items: center;
      justify-content: center;
      gap: 0.3rem;
      background: rgb(64, 205, 40);
      color: #fff;
      font-size: 12px;
      line-height: 18px;
      font-weight: 900;
      border-radius: 5px;
      padding: 0px 5px;
      @media (max-width: 600px) {
        width: 100px;
       text-align: center;
      }
    }
  }
`;

export default ProductOverview;
