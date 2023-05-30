import React, { useState } from "react";
import { postRequest } from "../services/Services";
import { OrderContext } from "../contexts/OrderContext";
import { getFromLocalStorage } from "../localStorage/LocalStorage";

export const useExpandedOrderId = () => {
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const handleOrderClick = (orderId) => {
    setExpandedOrderId(orderId === expandedOrderId ? null : orderId);
  };

  return { expandedOrderId, handleOrderClick };
};

export const useCancelOrder = () => {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    console.log("Reason: ", reason);
    console.log("Message: ", message);
    handleClose();
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return {
    handleOpen,
    handleClose,
    handleCancel,
    open,
    reason,
    message,
    handleReasonChange,
    handleMessageChange,
  };
};

export function useCreateOrder() {
  const { errorOrder, setErrorOrder, order, setOrder, setNewOrder, newOrder } =
    React.useContext(OrderContext);
    const myToken = getFromLocalStorage("megaTechAuth");
  async function postOrder(finalOrder) {
    try {
      const myOrder = await postRequest(finalOrder, myToken?.id);
      console.log(myOrder.data);
      if (!newOrder) {
        setNewOrder(true);
      }else{
        setNewOrder(false);
      }

      return false;
    } catch (error) {
      console.log(error.response.data.message);
      alert(error.response.status);
      return true;
    }
  }

  return { postOrder, errorOrder };
}
