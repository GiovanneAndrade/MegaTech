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
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1020px;
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
  overflow: hidden;
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
