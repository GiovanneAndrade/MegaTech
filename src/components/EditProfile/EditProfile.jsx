import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import styled from "styled-components";
import { ContainerHome } from "../../pages/home/Home";
import { NewContainerHome } from "../../pages/historic/Historic";
import EditIcon from "@mui/icons-material/Edit";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SecurityIcon from "@mui/icons-material/Security";
import PaletteIcon from "@mui/icons-material/Palette";
import EmailIcon from "@mui/icons-material/Email";
import EditProfileForm from "./UserProfileComponents/EditProfileForm";
import HelpIcon from "@mui/icons-material/Help";
import { Notifications } from "@mui/icons-material";
import {
  ControllerNotifications,
  H1,
} from "./UserProfileComponents/ControllerNotifications";
import { Help } from "./UserProfileComponents/Help";
import { EditAppearance } from "./UserProfileComponents/EditAppearance";
import { EditSecurity } from "./UserProfileComponents/EditSecurity";
import { Message } from "./UserProfileComponents/Message";
import { UserContext } from "../../contexts/UserContext";
function EditProfile() {
  const { showOtherComponent, setShowOtherComponent } =
    React.useContext(UserContext);

  const handleClick = (componentName) => {
    setShowOtherComponent(componentName);
  };

  return (
    <ContainerHome>
      <EditProfileContainer>
        <div className="scroll">
          <div className="menuLeft">
            <li
              onClick={() => handleClick("editProfile")}
              className={showOtherComponent === "editProfile" ? "selected" : ""}
            >
              <EditIcon className="icon" /> Editar Perfil
            </li>
            <li
              onClick={() => handleClick("controllerNotifications")}
              className={
                showOtherComponent === "controllerNotifications"
                  ? "selected"
                  : ""
              }
            >
              <NotificationsActiveIcon className="icon" /> Notificações
            </li>
            <li
              onClick={() => handleClick("security")}
              className={showOtherComponent === "security" ? "selected" : ""}
            >
              <SecurityIcon className="icon" /> Segurança
            </li>
            <li
              onClick={() => handleClick("appearance")}
              className={showOtherComponent === "appearance" ? "selected" : ""}
            >
              <PaletteIcon className="icon" />
              Aparencia
            </li>
            <li
              onClick={() => handleClick("message")}
              className={showOtherComponent === "message" ? "selected" : ""}
            >
              <EmailIcon className="icon" /> Mensagens
            </li>
            <li
              onClick={() => handleClick("help")}
              className={showOtherComponent === "help" ? "selected" : ""}
            >
              <HelpIcon className="icon" /> Ajuda
            </li>
          </div>
        </div>

        <div className="menuRight">
          {showOtherComponent === "controllerNotifications" ? (
            <ControllerNotifications />
          ) : showOtherComponent === "help" ? (
            <Help />
          ) : showOtherComponent === "appearance" ? (
            <EditAppearance />
          ) : showOtherComponent === "security" ? (
            <EditSecurity />
          ) : showOtherComponent === "message" ? (
            <Message />
          ) : (
            <>
              <div className="menuRightTop">
                <H1>Editar Perfil</H1>
              </div>
              <div className="menuRightBotton">
                <EditProfileForm />
              </div>
            </>
          )}
        </div>
      </EditProfileContainer>
    </ContainerHome>
  );
}

export default EditProfile;

export const EditProfileContainer = styled(NewContainerHome)`
  background: #fff;
  width: 40%;
  padding-left: 0px;
  // border-radius: 0;
  //height: 40%;

  .selected {
    height: 50px;
    border-right: solid 5px #f6ae2d;
    display: flex;
    text-align: center;
    //transition: height 0.7s ease, border-right 0.3s ease;
  }
  flex-direction: row;
  .menuLeft {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: left;
    border-right: solid 0.5px #dadada;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    font-size: 15px;
    gap: 35px;
    list-style: none;
   
    li {
      width: 100%;
      display: flex;
      justify-content: left;
      align-items: center;
  
    }
    // background: #000;
  }
  .menuRight {
    width: 70%;
    height: 100%;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    align-items: center;
    // justify-content: center;
    flex-direction: column;
    padding: 30px 30px 30px 30px;
    //background: #f6ae2d;
  }
  li {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px 10px 0 0px;
    width: 100%;
    gap: 15px;
    height: 40px;
    border-right: solid 5px transparent;
    // transition:  border-right 0.3s ease;
  }
  .icon {
    color: #f6ae2d !important;
  }
  .menuRightTop {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 10px;
    font-size: 20px;
    // margin-bottom:20px;
    padding: 0 0 20px 0;
    // background:#000;
  }
  .menuRightBotton {
    width: 100%;
    height: 70%;
    border-bottom-right-radius: 10px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    padding: 0 10px;
    margin-top: 0;
    background: transparent;
    .menuLeft {
      width: 100%;
      height: 30%;
      flex-direction: row;
      overflow: scroll;
      gap: 5px;
      padding-left: 10px;
      border-radius: 0;
    }
    .menuRight {
      min-width: 109%;
    }
    li {
      padding: 1px 1px 0 4px;
      font-size: 15px;
      min-width: 130px;
    }
    .selected {
      height: 50px;
      //  background: blue;
      // min-width: 150px;
      border-right: 0;
      border-bottom: solid 7px #f6ae2d;
      /*  display: flex;
      text-align: center;
      transition: height 0.7s ease, border-right 0.3s ease; */
    }
    .scroll {
      display: flex;
     // overflow-x: hidden;
      width: 100%;
    }
  }
`;
