import React from "react";
import styled from "styled-components";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Button } from "@mui/material";
import { AppContext } from "../../contexts/AppContext";
import Lottie from "react-lottie";
import animationData from "../../assets/images/card.json";
import Success from "../lottie/Success";
export const Saved = () => {
  const { newCard, setNewCard, showCard, setShowCard, saved, setSaved } =
    React.useContext(AppContext);

  function addCard() {
    setSaved(false);
  }

  return (
    <SavedContainer>
     <Success message={'cartão salvo com sucesso'} icon={animationData}/>
      
      <Button onClick={addCard}>adicionar novo cartão</Button>
    </SavedContainer>
  );
};

export const SavedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 20px;
`;
