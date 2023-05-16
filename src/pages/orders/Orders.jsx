import { useState } from "react";
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

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#f5f5f5",
    margin: "auto",
  },
}));

function Orders() {
  const classes = useStyles();
  const { expandedOrderId, handleOrderClick } = useExpandedOrderId();

  return (
    <>
      <Nav />
      <ContainerHome>
        <NewList component="nav">
          <Accordion expanded={expandedOrderId === "order1"}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              onClick={() => handleOrderClick("order1")}
            >
              <ListItemText primary="Order #1" secondary="Status: Delivered" />
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <p>Product name: Product A</p>
                <p>Date of purchase: January 1, 2023</p>
                <p>Delivery address: 123 Main St.</p>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expandedOrderId === "order2"}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              onClick={() => handleOrderClick("order2")}
            >
              <ListItemText primary="Order #2" secondary="Status: In transit" />
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <p>Product name: Product B</p>
                <p>Date of purchase: February 15, 2023</p>
                <p>Delivery address: 456 Elm St.</p>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expandedOrderId === "order3"}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              onClick={() => handleOrderClick("order3")}
            >
              <ListItemText primary="Order #3" secondary="Status: Pending" />
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <p>Product name: Product C</p>
                <p>Date of purchase: March 31, 2023</p>
                <p>Delivery address: 789 Oak St.</p>
              </div>
            </AccordionDetails>
          </Accordion>
        </NewList>
      </ContainerHome>
    </>
  );
}

export default Orders;
import styled from "styled-components";
import { ContainerHome } from "../home/Home";
import { useExpandedOrderId } from "../../hooks/UseOrders";

export const NewList = styled(List)`
  width: 800px;
`;
