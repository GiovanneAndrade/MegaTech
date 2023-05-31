import React from "react";
import {
  NotificationsContainerBotton,
  NotificationsContainerTop,
} from "./ControllerNotifications";
import { Shortly } from "../../lottie/Shortly";

export const Message = () => {
  return (
    <>
      <NotificationsContainerTop>Mensagens</NotificationsContainerTop>
      <NotificationsContainerBotton>
        <Shortly />
      </NotificationsContainerBotton>
    </>
  );
};
