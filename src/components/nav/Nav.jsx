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
import { Cart } from "../cart/Cart";
import { useNavigate } from "react-router-dom";
import { Categories } from "../../pages/categories/Categories";
import { AppContext } from "../../contexts/AppContext";
import { CategoriesContext } from "../../contexts/Categories";
export const Nav = () => {
  const { showCategory, setShowCategory } = React.useContext(CategoriesContext);
  const navigate = useNavigate();
  function home(){
    navigate("/")
    setShowCategory(true)
  }
  return (
    <NavContainer>
      <MenuList>
        <MenuLeft>
          <Logo onClick={home}>My App</Logo>
          <div>CEP 666000555</div>
        </MenuLeft>
        <MenuCentral>
          <Input />
          
          <ul>
            <li><Categories/></li>
            <li onClick={() => navigate("/offers")}>Ofertas</li>
            <li onClick={() => navigate("/historic")}>Historico</li>
            <li onClick={() => navigate("/favorites")}>Favoritos</li>
            <li onClick={() => navigate("/contact")}>Contato</li>
            <li onClick={() => navigate("/orders")} >meus pedidos</li>
          </ul>
        </MenuCentral>
        <Menu>
          <Cart />
          <ul>
            <MenuItem>Crie Sua Conta</MenuItem>
            <MenuItem>Entre</MenuItem>
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
