import React from "react";
import {
  H1,
  NotificationsContainerBotton,
  NotificationsContainerTop,
} from "./ControllerNotifications";
import { Shortly } from "../../lottie/Shortly";

export const EditAppearance = () => {
  return (
    <>
      <NotificationsContainerTop>
        <H1>Aparencia</H1>
      </NotificationsContainerTop>
      <NotificationsContainerBotton>
        <Shortly />
      </NotificationsContainerBotton>
    </>
  );
};
