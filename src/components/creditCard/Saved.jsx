import React from "react";
import styled from "styled-components";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Button } from "@mui/material";
import { AppContext } from "../../contexts/AppContext";
export const Saved = () => {
  const { newCard, setNewCard, showCard, setShowCard, saved , setSaved  } =
  React.useContext(AppContext);

  function addCard(){
    setSaved(false)
  }
  return (
    <SavedContainer>
      <CheckCircleIcon
        color="primary"
        fontSize="large"
        style={{ color: "green", fontSize: "100px" }}
      />
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
