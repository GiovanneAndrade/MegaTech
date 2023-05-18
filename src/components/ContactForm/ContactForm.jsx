import * as React from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export const ContactForm = () => {

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
    setSelectedReasonError
  } = useHandleSubmit();
  

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Preencha o formulário de contato</h2>
      <TextField
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setNameError(false);
        }}
        error={nameError}
        helperText={nameError && "O nome é obrigatório"}
      />
      <TextField
        label="E-mail"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setEmailError(false);
        }}
        error={emailError}
        helperText={emailError && "O e-mail é obrigatório"}
      />
      <FormControl
        fullWidth
        margin="normal"
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
      <FormControl fullWidth margin="normal" error={selectedReasonError}>
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

      <TextField
        label="Mensagem"
        variant="outlined"
        multiline
        rows={5}
        fullWidth
        margin="normal"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          setMessageError(false);
        }}
        error={messageError}
        helperText={messageError && "A mensagem é obrigatória"}
      />
      <Button type="submit" variant="contained">
        Enviar
      </Button>
      {formSubmitted && (
        <p>Obrigado pelo seu contato! Responderemos em breve.</p>
      )}
    </Form>
  );
};
import styled from "styled-components";
import { useHandleSubmit } from "../../hooks/UseContact";

export const Form = styled.form`
  width: 880px;
  h2{
    margin: 20px 0;
  }
`;
