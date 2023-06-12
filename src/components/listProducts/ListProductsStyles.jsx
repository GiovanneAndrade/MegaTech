import styled from "styled-components";

export const ListProductsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  gap: 2.5rem;
  padding-left: 580px;
  padding-right: 5px;
  overflow-x: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 906px;
    ${(props) => {
      if (props.type === "isCategory") {
        return `
         padding-left: 0; 
      `;
      }
    }}
  }
  ${(props) => {
    if (props.type === "isCategory") {
      return `
      
        overflow-x: hidden;
        flex-wrap: wrap;
        padding-left: 0;
         
      `;
    }
  }}
`;
export const Title = styled.div`
  padding: 0 40px;
  background-color: blue;
  width: 100%;
`;
export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: auto;
  .buttonLeft,
  .buttonRight {
    width: 50px;
    height: 85%;
    // display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 30px;
    display: ${(props) => (props.showCategory ? "flex" : "none")};
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .buttonLeft.hovered,
  .buttonRight.hovered {
    background-color: #f6ae2d;
    color: #fff;
  }
  // overflow: hidden;
`;
export const ScrollContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;
export const Prev = styled.div`
  width: 50px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.nextBgColor};

  position: absolute;
  right: 185px;
  cursor: pointer;
`;
export const Next = styled(Prev)`
  left: 510px;
  background-color: ${(props) => props.prevBgColor};
`;
