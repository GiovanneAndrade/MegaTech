import React from "react";

export const PaymentContext = React.createContext({});
const Payment = "Payment";
export const PaymentProvider = (props) => {
  return (
    <PaymentContext.Provider value={{ Payment }}>
      {props.children}
    </PaymentContext.Provider>
  );
};
