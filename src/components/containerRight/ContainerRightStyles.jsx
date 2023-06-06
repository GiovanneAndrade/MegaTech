import styled from "styled-components";

export const ContainerRightInternal = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  .scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
 font-size: 100px;
 
}

`;
