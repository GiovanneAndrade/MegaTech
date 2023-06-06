import React from "react";
import {
  H1,
  NotificationsContainerBotton,
  NotificationsContainerTop,
} from "./ControllerNotifications";
import { Shortly } from "../../lottie/Shortly";

export const Message = () => {
  return (
    <>
      <NotificationsContainerTop><H1>Mensagens</H1></NotificationsContainerTop>
      <NotificationsContainerBotton>
        <Shortly />
      </NotificationsContainerBotton>
    </>
  );
};
