import { useState } from "react";
import { Box, Typography } from "@mui/material";
import QRCode from "react-qr-code";

export function PaymentQRCode() {
  const [showQRCode, setShowQRCode] = useState(false);
  const paymentValue = 100; // replace with your payment value

  const handleClick = () => {
    setShowQRCode(true);
  };

  return (
    <Box sx={{ bgcolor: "#f7f7f7", p: 2 }}>
      <Typography variant="h6">QR Code de Pagamento via PIX</Typography>
      {showQRCode ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <QRCode value={`chave_pix?amount=${paymentValue}`} size={256} />
        </Box>
      ) : null}
      {!showQRCode ? (
        <Typography
          variant="body1"
          sx={{ textAlign: "center", mt: 2 }}
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          Clique aqui para exibir o QR Code de pagamento de R${paymentValue.toFixed(2)} via PIX
        </Typography>
      ) : null}
    </Box>
  );
}
