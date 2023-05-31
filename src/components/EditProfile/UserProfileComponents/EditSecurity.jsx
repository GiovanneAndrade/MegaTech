import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  NotificationsContainerBotton,
  NotificationsContainerTop,
} from "./ControllerNotifications";
import { StyledTextField } from "./EditProfileForm";
import styled from "styled-components";
import { Grid } from "@mui/material";
import Success from "../../lottie/Success";
import animationData from "../../../assets/images/data.json";
export const EditSecurity = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [successPasswod, setSuccessPasswod] = useState(false);
  const [successEmail, setSuccessEmail] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleSubmitPassword = (event) => {
    event.preventDefault();
    // Lógica de manipulação de envio do formulário
    setSuccessPasswod(true);
  };
  const handleSubmitEmail = (event) => {
    event.preventDefault();
    // Lógica de manipulação de envio do formulário
    setSuccessEmail(true);
  };

  return (
    <>
      <NotificationsContainerTop>Segurança</NotificationsContainerTop>

      {successPasswod ? (
        <SuccessNotificationsContainerBotton>
          <Success message={'senha trocada com sucesso'} icon={animationData}/>
        </SuccessNotificationsContainerBotton>
      ) : (
        <NotificationsContainerBotton>
          <H1>Trocar Senha</H1>
          <form onSubmit={handleSubmitPassword}>
            <StyledTextField
              type={showPassword ? "text" : "password"}
              label="Senha atual"
              variant="outlined"
              style={{ width: "100%", marginBottom: "20px" }}
              placeholder="Senha atual"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <StyledTextField
              type={showPassword ? "text" : "password"}
              label="Nova senha"
              variant="outlined"
              style={{ width: "100%", marginBottom: "20px" }}
              placeholder="Nova senha"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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
          </form>
        </NotificationsContainerBotton>
      )}
      {successEmail ? (
        <SuccessNotificationsContainerBotton>
          <Success message={'email trocado com sucesso'} icon={animationData}/>
        </SuccessNotificationsContainerBotton>
      ) : (
        <NotificationsContainerBotton>
          <H1>Trocar Email</H1>
          <Form onSubmit={handleSubmitEmail}>
            <StyledTextField
              type={"email"}
              label="Email atual"
              variant="outlined"
              style={{ width: "100%", marginBottom: "20px" }}
              placeholder="Email atual"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <StyledTextField
              type={"email"}
              label="Novo Email"
              variant="outlined"
              style={{ width: "100%", marginBottom: "20px" }}
              placeholder="Novo Email"
              InputLabelProps={{
                shrink: true,
              }}
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
        </NotificationsContainerBotton>
      )}
    </>
  );
};

export const H1 = styled.h1`
  margin-bottom: 20px;
`;
export const Form = styled.form`
  width: 100%;
`;
export const SuccessNotificationsContainerBotton = styled(
  NotificationsContainerBotton
)`
  justify-content: center;
  align-items: center;
`;
