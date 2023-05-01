import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  min-width: 200px;
  height: 350px;
  background: #fff;
  flex-direction: column;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4),
    inset 0px 4px 8px rgba(0, 0, 0, 0.08);
  border-radius: 5px 5px 5px 5px;
  cursor: pointer;
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
    width: 130px;
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
