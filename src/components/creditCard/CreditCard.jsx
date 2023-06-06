import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import styled from "styled-components";
import { Buttons } from "../button/Button";

function CreditCard() {
  const [cardData, setCardData] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
    cardUser: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCardData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <CreditCardWrapper>
      <Cards
        cvc={cardData.cvc}
        expiry={cardData.expiry}
        focused={cardData.focus}
        name={cardData.name}
        number={cardData.number}
      />
      <FormWrapper>
        <Label htmlFor="number">Número do cartão</Label>
        <Input
          type="tel"
          name="number"
          maxLength="16"
          placeholder="xxxx xxxx xxxx xxxx"
          value={cardData.number}
          onChange={handleInputChange}
          onFocus={(event) =>
            setCardData((prevState) => ({
              ...prevState,
              focus: event.target.name,
            }))
          }
        />

        <Label htmlFor="name">Nome do titular</Label>
        <Input
          type="text"
          name="name"
          placeholder="Nome do titular"
          value={cardData.name}
          onChange={handleInputChange}
          onFocus={(event) =>
            setCardData((prevState) => ({
              ...prevState,
              focus: event.target.name,
            }))
          }
        />

        <Label htmlFor="expiry">Validade</Label>
        <Input
          type="tel"
          name="expiry"
          maxLength="4"
          placeholder="MM/YY"
          value={cardData.expiry}
          onChange={handleInputChange}
          onFocus={(event) =>
            setCardData((prevState) => ({
              ...prevState,
              focus: event.target.name,
            }))
          }
        />

        <Label htmlFor="cvc">CVC</Label>
        <Input
          type="tel"
          name="cvc"
          maxLength="3"
          placeholder="CVC"
          value={cardData.cvc}
          onChange={handleInputChange}
          onFocus={(event) =>
            setCardData((prevState) => ({
              ...prevState,
              focus: event.target.name,
            }))
          }
        />
        {/*  <Input
          type="text"
          name="Apelido"
          maxLength="20"
          placeholder="Apelido"
          value={cardData.cardUser}
          onChange={handleInputChange}
          onFocus={(event) =>
            setCardData((prevState) => ({
              ...prevState,
              focus: event.target.name,
            }))
          }
        /> */}
        <Buttons
          text={"Salvar Cartão"}
          cardData={cardData}
          typeButton={null}
          variant={"contained"}
        />
      </FormWrapper>
    </CreditCardWrapper>
  );
}

export default CreditCard;

const CreditCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    min-width: 100%;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-top: 10px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #d6d6d6;
  font-size: 16px;
  margin-bottom: 20px;
  padding: 10px;
  width: 60%;
  text-align: center;
  &:focus {
    border-bottom: 1px solid #000;
    outline: none;
  }
`;
