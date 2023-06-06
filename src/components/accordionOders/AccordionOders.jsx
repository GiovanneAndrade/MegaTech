import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Nav } from "../../components/nav/Nav";
import { useExpandedOrderId } from "../../hooks/UseOrders";
import { NewList } from "../../pages/orders/Orders";
const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#f5f5f5",
    margin: "auto",
  },
}));
export const AccordionOders = ({ orders }) => {
  const classes = useStyles();
  const { expandedOrderId, handleOrderClick } = useExpandedOrderId();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    return formattedDate;
  };

  const formattedDate = formatDate(orders?.created_at);

  const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate;
  };

  const calculateDaysSinceOrder = () => {
    const currentDate = getCurrentDate();
    const orderDate = new Date(orders?.created_at);
    const timeDifference = currentDate.getTime() - orderDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
  };

  const getDeliveryStatus = () => {
    const daysSinceOrder = calculateDaysSinceOrder();
    if (daysSinceOrder >= 10) {
      return "Entregue";
    } else if (daysSinceOrder >= 1) {
      return "Em trânsito";
    } else {
      return "Em análise";
    }
  };

  const deliveryStatus = getDeliveryStatus();
  return (
   
      <NewList component="nav">
        <Accordion expanded={expandedOrderId === "order1"}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            onClick={() => handleOrderClick("order1")}
          >
            <ListItemText
              primary={`Pedido: ${orders.id}`}
              secondary={`Status: ${deliveryStatus}`}
            />
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <strong>Product name:</strong>
              {orders?.products?.map((product) => (
                <p> {product?.name}</p>
              ))}
              <strong>Delivery address: </strong>
              <p>
                {" "}
                {orders?.Address?.address} - {orders?.Address?.number}
              </p>

              <strong>Data da compra:</strong>
              <p>{formattedDate}</p>
            </div>
          </AccordionDetails>
        </Accordion>
      </NewList>
   
  );
};
