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
import { ControllerNotifications } from "./UserProfileComponents/ControllerNotifications";
import { Help } from "./UserProfileComponents/Help";
import { EditAppearance } from "./UserProfileComponents/EditAppearance";
import { EditSecurity } from "./UserProfileComponents/EditSecurity";
import { Message } from "./UserProfileComponents/Message";
function EditProfile() {
  const [showOtherComponent, setShowOtherComponent] = useState("editProfile");
  console.log(showOtherComponent);
  const handleClick = (componentName) => {
    setShowOtherComponent(componentName);
  };

  return (
    <ContainerHome>
      <EditProfileContainer>
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
              showOtherComponent === "controllerNotifications" ? "selected" : ""
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
              <div className="menuRightTop">Editar Perfil</div>
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
  // border-radius: 0;
  .selected {
    height: 50px;
    border-right: solid 5px #f6ae2d;
    display: flex;
    text-align: center;
    transition: height 0.7s ease, border-right 0.3s ease;
}
  flex-direction: row;
  .menuLeft {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: solid 0.5px #dadada;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    font-size: 15px;
    gap: 35px;
    list-style: none;

    // background: #000;
  }
  .menuRight {
    width: 70%;
    min-height: 100%;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px;
    //background: #f6ae2d;
  }
  li {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px 10px 0 40px;
    width: 100%;
    gap: 15px;
    height: 40px;  /* Or whatever the unselected height should be */
    border-right: solid 5px transparent; /* To ensure smooth transition */
    transition: height 0.7s ease, border-right 0.3s ease;
}
  .icon {
    color: #f6ae2d !important;
  }
  .menuRightTop {
    width: 100%;
    // height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 10px;
    font-size: 20px;
    // margin-bottom:20px;
    padding: 10px 0 30px 0;
    //background:#000;
  }
  .menuRightBotton {
    width: 100%;
    height: 70%;
    border-bottom-right-radius: 10px;
  }
`;
