import styled from "styled-components";

export const CloseOrderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProductSummary = styled.div`
  width: 750px;
  height: 100px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // border: 1px solid #ccc;
  gap: 10px;
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  img {
    max-width: 40px;
  }
  .closeOrderQuantitys {
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      color: #9e9b9b;
      font-size: 20px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 600;
      font-size: 17px;
      line-height: 20px;
    }
  }
  .closeOrderLeft {
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 10px;
    width: 50%;
    height: 100%;
    // background: #000;
  }
  .closeOrderQuantity {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 100%;
    // background: #ccc;
  }
  .closeOrderPrice {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 20%;
    height: 100%;
    //  background: #620808;
  }
  p {
    font-size: 20px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 20px;
  }
  .responsive {
    display: none;
  }
  @media screen and (max-width: 768px) {
    .responsive {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      //gap: 10px;
      display: block;
    }
    .nameResponsive {
      font-size: 15px;
    }
    .name {
      display: none;
    }
    .closeOrderPrice {
      display: none;
    }
    .closeOrderLeft {
      width: 70%;
    }
    .price {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 800;
      font-size: 20px;
      line-height: 28px;
      letter-spacing: 0.03em;
      margin-top: 10px;
    }
    .closeOrderQuantitys h3 {
      font-size: 15px;
    }
  }
`;
