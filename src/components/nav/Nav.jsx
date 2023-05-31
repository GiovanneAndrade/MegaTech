import React from "react";
import { Input } from "../input/Input";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import {
  Logo,
  Menu,
  MenuCentral,
  MenuItem,
  MenuLeft,
  MenuList,
  NavContainer,
  NewMenuCentral,
} from "./NavStyles";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../../assets/images/megaTech-back.png";
import { Cart } from "../cart/Cart";
import { Link, useNavigate } from "react-router-dom";
import { Categories } from "../../pages/categories/Categories";
import { AppContext } from "../../contexts/AppContext";
import { CategoriesContext } from "../../contexts/Categories";
import RoomIcon from "@mui/icons-material/Room";
import Lottie from "react-lottie";
import animationData from "../../assets/images/cep.json";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
export const Nav = () => {
  const [notifications, setNotifications] = React.useState(5);
  const { showCategory, setShowCategory } = React.useContext(CategoriesContext);
  const navigate = useNavigate();
  function home() {
    navigate("/");
    setShowCategory(true);
  }
  function pedidos() {
    if (newOrder) {
      setNewOrder(false);
    } else {
      setNewOrder(true);
    }
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,

    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const lottieStyle = {
    width: "50px",
    height: "50px",
    margin: "0",
  };
  return (
    <NavContainer>
      <MenuList>
        <MenuLeft>
          <Logo src={logo} onClick={home} />

          <div>
            Cep <Lottie options={defaultOptions} style={lottieStyle} />
          </div>
        </MenuLeft>
        <MenuCentral>
          <Input />

          <ul>
            <li>
              <Categories />
            </li>
            <li onClick={() => navigate("/offers")}>Ofertas</li>
            <li onClick={() => navigate("/historic")}>Historico</li>
            <li onClick={() => navigate("/favorites")}>Favoritos</li>
            <li onClick={() => navigate("/contact")}>Contato</li>
            <li onClick={() => navigate("/orders")}>meus pedidos</li>
          </ul>
        </MenuCentral>
        <Menu>
          <div>
            <Badge
              badgeContent={notifications}
              color="error"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <NotificationsActiveIcon
                sx={{ color: "#f6ae2d", cursor: "pointer", marginRight: "9px" }}
              />
            </Badge>

            <AccountCircleIcon
              onClick={() => navigate("/user")}
              sx={{ color: "#f6ae2d", cursor: "pointer" }}
            />
            <Cart />
          </div>

          <ul>
            <MenuItem onClick={() => navigate("/signup")}>
              Crie Sua Conta
            </MenuItem>

            <MenuItem onClick={() => navigate("/signin")}>Entre</MenuItem>
          </ul>
        </Menu>
        <NewMenuCentral>
          <Input />
          <ul>
            <li>Categorias</li>
            <li>Ofertas</li>
            <li>Historico</li>
            <li>Favoritos</li>
            <li>Contato</li>
          </ul>
        </NewMenuCentral>
      </MenuList>
    </NavContainer>
  );
};
