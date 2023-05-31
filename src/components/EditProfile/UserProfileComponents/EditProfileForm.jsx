import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
} from "@mui/material";
import styled from "styled-components";
import Success from "../../lottie/Success";
import animationData from "../../../assets/images/data.json";
function EditProfileForm() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [city, setCity] = useState("");
  const [estado, setEstado] = useState("");
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to update user's information
    setSuccess(true);
  };
  const handleNomeChange = (event) => {
    setCity(event.target.value);
  };

  const handleSobrenomeChange = (event) => {
    setEstado(event.target.value);
  };

  return (
    <>
      {success ? (
       <Success message={'dados editado com sucesso'} icon={animationData}/>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <StyledTextField
                label="Nome"
                placeholder="Digite seu nome"
                variant="outlined"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <StyledTextField
                label="Sobrenome"
                placeholder="Digite seu sobrenome"
                variant="outlined"
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              label="Email"
              placeholder="Digite seu Email"
              variant="outlined"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              label="Endereço"
              placeholder="Digite seu Endereço"
              variant="outlined"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              label="Numero de Contado"
              placeholder="Numero de Contado"
              variant="outlined"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Nome</InputLabel>
                <Select value={nome} onChange={handleNomeChange} label="Nome">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="nome1">Nome 1</MenuItem>
                  <MenuItem value="nome2">Nome 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Sobrenome</InputLabel>
                <Select
                  value={sobrenome}
                  onChange={handleSobrenomeChange}
                  label="Sobrenome"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="sobrenome1">Sobrenome 1</MenuItem>
                  <MenuItem value="sobrenome2">Sobrenome 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              label="Senha"
              placeholder="Digite sua Senha"
              variant="outlined"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid
            container
            spacing={2}
            justify="flex-end"
            style={{ width: "100%", display: "flex", justifyContent: "end" }}
          >
            <Grid item>
              <Button
                variant="outlined"
                color="secondary"
                style={{ marginTop: "20px" }}
              >
                Cancelar
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ marginTop: "20px" }}
              >
                Salvar
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </>
  );
}

export default EditProfileForm;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const StyledTextField = styled(TextField)`
  && {
    max-width: 500px;
    .MuiInputBase-input {
      // text-align: center;
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
`;
export const StyledSelect = styled(Select)`
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
`;
