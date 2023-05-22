import React, { useState } from "react";
import { List } from "@material-ui/core";
import { Nav } from "../../components/nav/Nav";
import styled from "styled-components";
import { ContainerHome } from "../home/Home";
import { OrderContext } from "../../contexts/OrderContext";
import { AccordionOders } from "../../components/accordionOders/AccordionOders";

function Orders() {
  const { order } = React.useContext(OrderContext);
  const products = order?.map((product) => product?.products);
 

  return (
    <>
      <Nav />
      <ContainerHome>
        {
          order?.map(item =>(
            <AccordionOders orders={item}/>
          ))
        }
      
      </ContainerHome>
    </>
  );
}

export default Orders;

export const NewList = styled(List)`
  width: 800px;
`;
