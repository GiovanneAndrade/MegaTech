import styled from "styled-components";
import { ContainerHome, Conteiner } from "../../pages/home/Home";

export const ProductOverviewContainer = styled(ContainerHome)`
  align-items: center;
  margin: 50px 0;
  justify-content: center;
  .containerRight {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
export const ContainerLeft = styled.div`
  display: flex;

  width: 75%;
  height: 500px;
  background: #fff;
  gap: 15px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const ContainerRight = styled.div`
  width: 25%;
  height: 500px;
  background: #FFF;
  border: 1px solid #DDD;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const ContainerProduct = styled(Conteiner)`
  width: 174vh;
  @media screen and (max-width: 768px) {
    width: 44vh;
  }
`;
export const ContainerProductImg = styled.div`
  width: 50%;
  height: 100%;

   padding: 20px 60px 20px 20px;
  @media screen and (max-width: 768px) {
    width: 44vh;
    height: 80%;
  }
`;
export const ContainerProductOverview = styled(ContainerProductImg)`
  
  position: relative;
  border-left: 0.1px solid #ccc;
  display: flex;
  flex-direction: column;
  gap: 20px;
  h1 {
    font-size: 20px;
  }
  .allTexts {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const ContainerProductList = styled(Conteiner)`
  width: 174vh;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const ButtonsStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 5px;
  position: absolute;
  bottom: 0;
  padding: 20px 40px;
`;

export const ProductOverviewShowCategory = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
 
`
