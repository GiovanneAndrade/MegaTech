import React from "react";

export const OrderContext = React.createContext({});
const Order = "Order";
export const OrderProvider = (props) => {
  return (
    <OrderContext.Provider value={{ Order }}>
      {props.children}
    </OrderContext.Provider>
  );
};
