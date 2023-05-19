import { TextField, Grid, Button, InputAdornment } from "@mui/material";
import {
  AddAnddressContainer,
  AddAnddressSummary,
  NewCard,
} from "./AddressStyles";
import axios from "axios";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddressMap from "./AddressMap";

export function AddAnddress() {
  const { newAnddress, setNewAnddress, myAnddress, setMyAddress } =
    React.useContext(AnddressContext);

  function buscardistrict(cep) {
    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        const { logradouro, bairro, localidade, uf } = response.data;

        const district = {
          district: logradouro,
          bairro,
          city: localidade,
          uf: uf,
        };

        setMyAddress((prevAddress) => ({
          ...prevAddress,
          ...district,
        }));
      })
      .catch((error) => console.log(error));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setMyAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  }

  function handleBuscardistrict() {
    buscardistrict(myAnddress.cep);
  }
  function handleBuscardistrict() {
    buscardistrict(myAnddress.cep);
  }
  const { createAnddress } = AddAddress();
  return (
    <AddAnddressContainer>
      <Grid container spacing={2} sx={{ width: "50%" }}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="name_recipient"
            name="name_recipient"
            variant="outlined"
            value={myAnddress.name_recipient}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Endereço"
            name="district"
            variant="outlined"
            value={myAnddress.district}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="city"
            name="city"
            variant="outlined"
            value={myAnddress.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="uf"
            name="uf"
            variant="outlined"
            value={myAnddress.uf}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="CEP"
            name="cep"
            variant="outlined"
            value={myAnddress.cep}
            onChange={handleInputChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button variant="contained" onClick={handleBuscardistrict}>
                    <SearchIcon />
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ width: "100%", display: "flex", justifyContent: "end" }}
        >
          <Button variant="contained" color="primary" onClick={createAnddress}>
            Adicionar Endereço
          </Button>
        </Grid>
      </Grid>
      <AddAnddressSummary>
        {newAnddress.length === 0 ? (
          "Não existe endereço cadastrado"
        ) : (
          <AddressSummary newAnddress={newAnddress} />
        )}
      </AddAnddressSummary>
    </AddAnddressContainer>
  );
}
import { Card, CardContent, Typography, Checkbox } from "@mui/material";
import { AnddressContext } from "../../contexts/Anddress";
import { AddAddress } from "../../hooks/UseAnddress";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function AddressSummary({ newAnddress }) {
  const { selectedAddress, setSelectedAddress } =
    React.useContext(AnddressContext);

  return (
    <FormControl
      sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <FormLabel sx={{ mr: 2 }}>Selecione um endereço:</FormLabel>
      <RadioGroup
        aria-label="Selecione um endereço"
        defaultValue=""
        name="address"
      >
        {newAnddress.map((a) => (
          <FormControlLabel
            key={a.id}
            value={a.id}
            control={<Radio />}
            label={
              <NewCard>
                <CardContent>
                  <Typography variant="h6" component="h2">
                    {a.name_recipient}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {a.district}, {a.city} - {a.uf}, {a.cep}
                  </Typography>
                </CardContent>
              </NewCard>
            }
            onClick={() => setSelectedAddress(a)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
