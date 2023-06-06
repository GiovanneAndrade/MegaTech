import {
  Checkbox,
  FormControlLabel,
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import QRCode from "react-qr-code";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import React, { useEffect, useState } from "react";
import { FormCheck, Total } from "./SummaryStyles";
import { Height } from "@mui/icons-material";
import { PaymentQRCode } from "./QrCode";
import { getFromLocalStorage } from "../../localStorage/LocalStorage";
import { OrderContext } from "../../contexts/OrderContext";
import { AnddressContext } from "../../contexts/Anddress";
import { AppContext } from "../../contexts/AppContext";
import { H1 } from "../EditProfile/UserProfileComponents/ControllerNotifications";

export default function OrderSummary({ isTotal }) {
  const { selectedAddress, setSelectedAddress } =
    React.useContext(AnddressContext);
  const { finalOrder, setFinalOrder } = React.useContext(OrderContext);
  console.log(finalOrder);
  const { newCard, setNewCard, showCard, setShowCard } =
    React.useContext(AppContext);
  const existingProducts =
    JSON.parse(localStorage.getItem("selectedProducts")) || [];

  const [installmentNumber, setInstallmentNumber] = useState();
  const [order, setOrder] = useState([
    { products: existingProducts },
    { address: selectedAddress },
    { total: isTotal },
  ]);

  useEffect(() => {
    const newInstallmentNumber = !installmentNumber ? 1 : installmentNumber;
    setFinalOrder([
      ...order,
      { card: showCard },
      { installmentNumber: newInstallmentNumber },
    ]);
  }, [order, setFinalOrder, installmentNumber, showCard]);
  const paymentValue = 100.0;
  const [selectedOption, setSelectedOption] = React.useState("standard");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const addresses = [
    { street: "Street Name", number: "123", city: "City", state: "State" },
  ];

  const installmentOptions = [1, 2, 3, 4, 5, 6];

  const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState(
    newCard[0]?.name
  );

  const [selectedInstallments, setSelectedInstallments] = React.useState(
    installmentOptions[0]
  );

  const handlePaymentMethodSelect = (method) => {
    if (method.last4Digits) {
      setShowCard(method);
    } else {
      setShowCard(null);
    }
  };
  const handleNumberInstallmentSelect = (option) => {
    setInstallmentNumber(option);
  };

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handleInstallmentsChange = (event) => {
    setSelectedInstallments(event.target.value);
  };

  const roundCheckbox = (
    <Checkbox
      checkedIcon={<RadioButtonCheckedIcon />}
      icon={<RadioButtonUncheckedIcon />}
      sx={{
        "& .MuiSvgIcon-root": {
          borderRadius: "50%",
        },
      }}
    />
  );
  const selectedProducts = getFromLocalStorage("selectedProducts");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        //bgcolor: "#f7f7f7",
        p: 2,
        width: { sx: "100%", sm: "50%" },
        padding: { sx: "25px ", sm: "25px 0px " },
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          width: "80%",
          bgcolor: "#f7f7f7",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Grid item xs={12} sx={{ borderBottom: "1px dashed #000" }}>
          <Typography variant="h6">Resumo do Pedido</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <H1>Produtos Selecionados:</H1>
          </Typography>
          {selectedProducts?.map((product) => (
            <Typography key={product.name} variant="body2">
              - {product.name} x{product.quantity}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            <H1>Endereço Selecionado:</H1>
          </Typography>

          <Typography variant="body2">
            {`${selectedAddress?.name_recipient}, ${selectedAddress?.number} - ${selectedAddress?.city} - ${selectedAddress?.cep}`}
          </Typography>
        </Grid>

        <FormCheck>
          <Typography variant="body1">
            <H1>Selecione a Entrega:</H1>
          </Typography>
          <FormControlLabel
            value="standard"
            control={roundCheckbox}
            label="Padrão - R$10"
            checked={selectedOption === "standard"}
            onChange={handleChange}
          />
          <FormControlLabel
            value="express"
            control={roundCheckbox}
            label="Expressa - R$20"
            checked={selectedOption === "express"}
            onChange={handleChange}
          />
          <FormControlLabel
            value="superExpress"
            control={roundCheckbox}
            label="Super Expressa - R$30"
            checked={selectedOption === "superExpress"}
            onChange={handleChange}
          />
        </FormCheck>
        <Grid item xs={12}>
          <Typography variant="body1">
            <H1>Método de Pagamento:</H1>
          </Typography>
          <Select
            value={selectedPaymentMethod}
            onChange={handlePaymentMethodChange}
            sx={{ minWidth: "120px" }}
          >
            {newCard?.map((method, index) => (
              <MenuItem
                key={index}
                value={method?.name}
                onClick={() => handlePaymentMethodSelect(method)}
              >
                {`${method?.name} ${
                  !method?.last4Digits
                    ? ""
                    : `- **** **** ****  ${method?.last4Digits}`
                } `}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1"  >
            <H1>Número de Parcelas:</H1>
          </Typography>
          <Select
            value={selectedInstallments}
            onChange={handleInstallmentsChange}
            sx={{ minWidth: "120px" }}
          >
            {installmentOptions?.map((option) => (
              <MenuItem
                key={option}
                value={option}
                onClick={() => handleNumberInstallmentSelect(option)}
              >
                {`${option}x`}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
      <Total>Total R$ {isTotal}</Total>
      {/*  <PaymentQRCode /> */}
    </Box>
  );
}
