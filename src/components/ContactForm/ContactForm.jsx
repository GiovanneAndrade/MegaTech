import * as React from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import styled, { css } from "styled-components";
import animationData from "../../assets/images/data.json";
export const ContactForm = ({ help }) => {
  const {
    handleSubmit,
    name,
    setName,
    nameError,
    setNameError,
    email,
    setEmail,
    emailError,
    setEmailError,
    message,
    setMessage,
    messageError,
    setMessageError,
    formSubmitted,
    selectedOrder,
    setSelectedOrder,
    selectedOrderError,
    setSelectedOrderError,
    selectedReason,
    setSelectedReason,
    selectedReasonError,
    setSelectedReasonError,
    setFormSubmitted,
    newContact,
  } = useHandleSubmit();

  return (
    <>
      {formSubmitted ? (
        <>
          <Success
            message={"Obrigado pelo seu contato! Responderemos em breve."}
            icon={animationData}
          />
          <Grid
            container
            spacing={0}
            justify="flex-start"
            style={{ width: "100%", display: "flex", justifyContent: "end" }}
          >
            <Grid item>
              <Button onClick={newContact}>voltar</Button>
            </Grid>
          </Grid>
        </>
      ) : (
        <Form onSubmit={handleSubmit} help={help}>
          <h2>Preencha o formulário de contato</h2>
          <StyledTextField
            help={help}
            label="Nome"
            variant="outlined"
            fullWidth
            margin={help ? "dense" : "normal"}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError(false);
            }}
            InputLabelProps={{
              shrink: help,
            }}
            error={nameError}
            helperText={nameError && "O nome é obrigatório"}
          />
          <StyledTextField
            help={help}
            label="E-mail"
            variant="outlined"
            fullWidth
            margin={help ? "dense" : "normal"}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
            }}
            InputLabelProps={{
              shrink: help,
            }}
            error={emailError}
            helperText={emailError && "O e-mail é obrigatório"}
          />
          <FormControl
            fullWidth
            margin={help ? "dense" : "normal"}
            error={selectedOrderError}
            sx={{ maxWidth: "100%" }}
          >
            <InputLabel id="order-label">Qual pedido se trata?</InputLabel>
            <Select
              label="Qual pedido se trata?"
              labelId="order-label"
              id="order-select"
              value={selectedOrder}
              onChange={(e) => setSelectedOrder(e.target.value)}
            >
              <MenuItem value="">Selecione o pedido</MenuItem>
              <MenuItem value="Pedido 1">Pedido 1</MenuItem>
              <MenuItem value="Pedido 2">Pedido 2</MenuItem>
              <MenuItem value="Pedido 3">Pedido 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            margin={help ? "dense" : "normal"}
            error={selectedReasonError}
          >
            <InputLabel>Motivo do contato</InputLabel>
            <Select
              value={selectedReason}
              onChange={(e) => setSelectedReason(e.target.value)}
              label="motivo do contato"
            >
              <MenuItem value="">Selecione o motivo do contato</MenuItem>
              <MenuItem value="Dúvida">Dúvida</MenuItem>
              <MenuItem value="Sugestão">Sugestão</MenuItem>
              <MenuItem value="Problema">Problema</MenuItem>
            </Select>
            <FormHelperText error={selectedReasonError}>
              {selectedReasonError && "Selecione o motivo do contato."}
            </FormHelperText>
          </FormControl>

          <StyledTextField
            help={help}
            label="Mensagem"
            variant="outlined"
            multiline
            rows={help ? 3 : 5}
            fullWidth
            margin={help ? "dense" : "normal"}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setMessageError(false);
            }}
            InputLabelProps={{
              shrink: help,
            }}
            error={messageError}
            helperText={messageError && "A mensagem é obrigatória"}
          />
          <Grid
            container
            spacing={0}
            justify="flex-start"
            style={{ width: "100%", display: "flex", justifyContent: "end" }}
          >
            <Grid item>
              <Button variant="contained" color="primary" type="submit">
                Enviar
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </>
  );
};

import { useHandleSubmit } from "../../hooks/UseContact";
import Success from "../lottie/Success";

export const Form = styled.form`
  min-width: 40%;
  gap: ${(props) => !props.help || "0"};
  h2 {
    margin: 20px 0;
    margin: ${(props) => !props.help || "0 0 7px 0"};
    font-size: ${(props) => !props.help || "15px"};
  }
  @media screen and (max-width: 768px) {
    padding: ${(props) => !props.help? "0 20px":"0 1px" };
  }
`;

export const StyledTextField = styled(TextField)`
  ${({ help }) =>
    help &&
    css`
      && {
        max-width: 500px;
        .MuiInputBase-input {
          font-size: 14px;
          padding: 8px 14px;
          height: 24px;
        }
        .MuiInputLabel-root {
          font-size: 14px;
        }
        .MuiOutlinedInput-root {
          padding: 0;
        }
        .MuiOutlinedInput-notchedOutline {
          top: -5px;
        }
      }
    `}
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
