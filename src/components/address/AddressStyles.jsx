import { Card, FormControl } from "@mui/material";
import styled from "styled-components";

export const AddAnddressContainer = styled.form`
  width: 100%;
  display: flex;
  gap:30px;
`;

export const AddAnddressSummary = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const NewCard = styled(Card)`
 display: flex;
  align-items: center;
  padding: 1px;
  padding-top: 5px;
  background-color: #352424;
  height: 70px;
  width: 300px;
  margin-top: 10px;
  border: 1px dotted #999;
 

`;