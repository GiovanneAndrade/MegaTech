import React from "react";

export const useHandleSubmit = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [nameError, setNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [messageError, setMessageError] = React.useState(false);
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [selectedOrder, setSelectedOrder] = React.useState("");
  const [selectedOrderError, setSelectedOrderError] = React.useState(false);
  const [selectedReasonError, setSelectedReasonError] = React.useState(false);
  const [selectedReason, setSelectedReason] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !message || !selectedOrder || !selectedReason) {
      if (!name) setNameError(true);
      if (!email) setEmailError(true);
      if (!message) setMessageError(true);
      if (!selectedOrder) setSelectedOrderError(true);
      if (!selectedReason) setSelectedReasonError(true);
      return;
    }

    setFormSubmitted(true);
  };

  return {
    handleSubmit,
    name,
    setName,
    nameError,
    setNameError,
    email,
    setEmail,
    emailError,
    setEmailError,
    message,
    setMessage,
    messageError,
    setMessageError,
    formSubmitted,
    selectedOrder,
    setSelectedOrder,
    selectedOrderError,
    setSelectedOrderError,
    selectedReason,
    setSelectedReason,
    selectedReasonError,
    setSelectedReasonError,
  };
};
