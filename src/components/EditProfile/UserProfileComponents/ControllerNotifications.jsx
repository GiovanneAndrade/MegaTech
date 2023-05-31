import * as React from "react";
import Switch from "@mui/material/Switch";
import styled from "styled-components";

export const ControllerNotifications = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <NotificationsContainerTop>Notificações</NotificationsContainerTop>
      <NotificationsContainerBotton>
        <h1>Quer receber Notificações ?</h1>
        <p>promoções, status de pedidos, mensagens e etc...</p>
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </NotificationsContainerBotton>
    </>
  );
};

export const NotificationsContainerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 10px;
  font-size: 20px;
  // margin-bottom:20px;
  padding: 0 0 20px 0;
  // background:#000;
`;
export const NotificationsContainerBotton = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  
  h1 {
    font-size: 20px;
    padding: 0 10px;
  }
  p {
    font-size: 15px;
    color: #dadada;
    padding: 0 10px;
  }
`;
