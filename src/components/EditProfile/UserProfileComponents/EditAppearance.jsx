import React from "react";
import {
  NotificationsContainerBotton,
  NotificationsContainerTop,
} from "./ControllerNotifications";
import { Shortly } from "../../lottie/Shortly";

export const EditAppearance = () => {
  return (
    <>
      <NotificationsContainerTop>Aparencia</NotificationsContainerTop>
      <NotificationsContainerBotton>
        <Shortly />
      </NotificationsContainerBotton>
    </>
  );
};
