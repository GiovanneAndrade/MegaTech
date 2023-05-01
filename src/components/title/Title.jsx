import React from "react";
import styled from "styled-components";
export const Titles = ({ titles }) => {
  return <Title>{titles}</Title>;
};
export const Title = styled.div`
  padding: 15px 10px;
  margin-top: 20px;
  background-color: #32357b;
  color: white;
  width: 100%;
  max-height: 100px;
 
`;
