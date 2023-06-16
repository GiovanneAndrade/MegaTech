import React, { useEffect, useState } from "react";
import { getRequests } from "../services/Services";

export const OrderContext = React.createContext({});
export const OrderProvider = (props) => {
  const [isChecked, setIsChecked] = React.useState(false);
  const [isTotal, setIsTotal] = React.useState();
  const [finalOrder, setFinalOrder] = React.useState();
  const [errorOrder, setErrorOrder] = React.useState(true);
  const [order, setOrder] = React.useState();
  const [newOrder, setNewOrder] = React.useState(false);
  const [wait, setWait] = useState(false);
  useEffect(() => {
    const orders = getRequests();
    orders
      .then((response) => {
        setOrder(response?.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, [newOrder]);

  return (
    <OrderContext.Provider
      value={{
        isChecked,
        setIsChecked,
        isTotal,
        setIsTotal,
        finalOrder,
        setFinalOrder,
        errorOrder,
        setErrorOrder,
        order,
        setOrder,
        setNewOrder,
        wait,
        setWait,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};
