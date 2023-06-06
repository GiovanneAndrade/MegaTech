import React from "react";
import { ContactForm } from "../../ContactForm/ContactForm";
import {
  H1,
  NotificationsContainerBotton,
  NotificationsContainerTop,
} from "./ControllerNotifications";
import { styled } from "@material-ui/core";

export const Help = () => {
  return (
    <>
      <NotificationsContainerTop><H1>Ajuda</H1></   NotificationsContainerTop>
      <NotificationsContainerBotton>
        <ContactForm help={true}/>
      </NotificationsContainerBotton>
    </>
  );
};

export const HelpContainer = styled(NotificationsContainerBotton)`
  background: #000;
  max-width: 100%;
  height: 100%;
`;
