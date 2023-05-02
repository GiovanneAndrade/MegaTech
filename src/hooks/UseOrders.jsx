import { useState } from "react";

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