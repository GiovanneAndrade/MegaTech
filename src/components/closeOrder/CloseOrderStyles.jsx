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
  border: 1px solid #ccc;
  gap: 10px;

  img {
    width: 50px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
  p {
    font-size: 20px;
  }
`;
