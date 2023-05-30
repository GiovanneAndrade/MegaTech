import React from "react";
import styled from "styled-components";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Button } from "@mui/material";
import { AppContext } from "../../contexts/AppContext";
import Lottie from 'react-lottie';
import animationData from '../../assets/images/card.json';
export const Saved = () => {
  const { newCard, setNewCard, showCard, setShowCard, saved , setSaved  } =
  React.useContext(AppContext);

  function addCard(){
    setSaved(false)
  }

  const defaultOptions = {
    loop: false,
    autoplay: true, 

    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const lottieStyle = {
    width: "100px",  
    height: "100px", 
  }

  return (
    <SavedContainer>
     <Lottie options={defaultOptions} style={lottieStyle} />
      cartão salvo com sucesso
      <Button onClick={addCard}>
        adicionar novo cartão
      </Button>
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
