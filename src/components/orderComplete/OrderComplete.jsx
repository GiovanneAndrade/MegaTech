import React from "react";
import { Grid, Typography, Button, Divider } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import styled from "styled-components";
import { addDays, format } from "date-fns";
import CancelOrder from "./CancelOrder";
import { OrderContext } from "../../contexts/OrderContext";
import Lottie from "react-lottie";
import animationData from "../../assets/images/data.json";

const OrderComplete = () => {
  const deliveryDate = addDays(new Date(), 15);
  const formattedDeliveryDate = format(deliveryDate, "dd/MM/yyyy");
  const { finalOrder, setFinalOrder } = React.useContext(OrderContext);

  const total = finalOrder?.map((f) => f?.total);
  const address = finalOrder?.filter((f) => f?.address);
  const card = finalOrder?.filter((f) => f?.card);
  const installmentNumber = finalOrder?.filter((f) => f?.installmentNumber);

  const defaultOptions = {
    loop: false,
    autoplay: true,

    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const lottieStyle = {
    width: "100px",
    height: "100px",
  };
  return (
    <OrderCompleteContainer>
      <div className="container">
        <Grid
          container
          direction="column"
          spacing={2}
          style={{
            background: "#f7f7f7",
            marginTop: "45px",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <Grid item container justify="center">
            <Lottie options={defaultOptions} style={lottieStyle} />
          </Grid>

          <Grid container item spacing={2}>
            <Grid item>
              <Typography variant="h5">Pedido Finalizado</Typography>
            </Grid>

            <Grid item>
              <Divider />
            </Grid>
            <Grid item container justify="space-between" alignItems="center">
              <Grid item>
                <Typography variant="body1">Total do Pedido:</Typography>
              </Grid>

              <Grid item>
                <Typography variant="h6">${total}</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="body1">Entregar em:</Typography>
              <Typography variant="body2">
                {" "}
                <strong>endereço:</strong>
                {address[0].address?.address},<br /> <strong>cidade:</strong>{" "}
                {address[0].address?.city}, <br /> <strong>numero:</strong>:
                {address[0].address?.number}, <br /> <strong>nome:</strong>
                {address[0].address?.name_recipient}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Entrega até:</Typography>
              <Typography variant="body2">{formattedDeliveryDate}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Cartão utilizado:</Typography>
              <Typography variant="body2">
                credito **** {card[0]?.card?.last4Digits}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Parcelas:</Typography>
              <Typography variant="body2">
                {installmentNumber[0]?.installmentNumber}x
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Numero do Pedido:</Typography>
              <Typography variant="body2">156198419815</Typography>
            </Grid>
            <Grid
              item
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <CancelOrder />
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: "20px", width: "400px" }}
              >
                Voltar para a Loja
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </OrderCompleteContainer>
  );
};

const OrderCompleteContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  div {
    width: 500px;
  }
`;

export default OrderComplete;
