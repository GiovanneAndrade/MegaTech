import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  Grid,
} from "@mui/material";
import styled from "styled-components";

export const AddAnddressContainer = styled.form`
  width: 100%;
  display: flex;
  gap: 100px;
  padding: 10px;
  .message{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 50px;
  }
`;
 
export const AddAnddressSummary = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const NewCard = styled.div`
  display: flex;
  align-items: center;
  padding: 1px;
  padding: 10px;
  height: 70px;
  width: 400px;
  margin-top: 10px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 20px;
  }
`;
