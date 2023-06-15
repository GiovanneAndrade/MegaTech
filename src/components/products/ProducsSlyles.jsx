import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  max-width: 200px;
  min-width: 200px;
  height: 350px;
  max-height: 500px;
  background: #fff;
  flex-direction: column;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4),
    inset 0px 4px 8px rgba(0, 0, 0, 0.08);
  border-radius: 5px 5px 5px 5px;
  cursor: pointer;
  @media (max-width: 600px) {
    max-width: 165px;
    min-width: 165px;
    height: 275px;
  }
  .containerProductsLow {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  height: 50%;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4),
    inset 0px 4px 8px rgba(0, 0, 0, 0.08);
  border-radius: 5px 5px 5px 5px;
  img {
    padding: 10px;
    max-width: 190px;
    @media (max-width: 600px) {
      //padding: 35px;
     // max-width: 90px;
      min-width: 70px;
    }
  }
`;
export const InformationProducts = styled(ImageContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  padding: 10px;
  h1 {
    font-size: 15px;
  }
`;
