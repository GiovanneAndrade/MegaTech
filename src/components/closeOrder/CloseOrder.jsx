import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { CloseOrderContainer, ProductSummary } from "./CloseOrderStyles";
import banner from "../../assets/images/ipad-card-40-pro-202108 1.png";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@material-ui/core";
import { OrderContext } from "../../contexts/OrderContext";
import { AnddressContext } from "../../contexts/Anddress";
import { makeStyles } from "@material-ui/core/styles";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "../../localStorage/LocalStorage";

export const CloseOrder = ({
  img,
  quantitys,
  price,
  name,
  id,
  productSelection,
}) => {
  const [checked, setChecked] = React.useState(false);
  const [quantity, setQuantity] = React.useState(quantitys);

  const { isTotal, setIsTotal, isChecked, setIsChecked } =
    React.useContext(OrderContext);

  React.useEffect(() => {
    const existingProducts =
      JSON.parse(localStorage?.getItem("selectedProducts")) || [];

    const foundIndex = productSelection?.findIndex(
      (product) => product.id === id
    );
    if (foundIndex >= 0) {
      setChecked(true);
    }
  }, []);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked) {
      const selectedProduct = {
        id,
        img,
        name,
        price,
        quantity,
        totalPrice: price * quantity,
      };
      const existingProducts =
        JSON.parse(localStorage.getItem("selectedProducts")) || [];
      console.log(existingProducts);
      const index = existingProducts.findIndex((product) => product.id === id);

      if (index !== -1) {
        existingProducts[index].quantity += quantity;
        existingProducts[index].totalPrice += price * quantity;
        const updatedProducts = [...existingProducts];
        localStorage.setItem(
          "selectedProducts",
          JSON.stringify(updatedProducts)
        );
        setIsTotal(updatedProducts);
      } else {
        const updatedProducts = [...existingProducts, selectedProduct];
        localStorage.setItem(
          "selectedProducts",
          JSON.stringify(updatedProducts)
        );
        setIsTotal(updatedProducts);
      }
    } else {
      const existingProducts =
        JSON.parse(localStorage.getItem("selectedProducts")) || [];
      const updatedProducts = existingProducts.filter(
        (product) => product.id !== id
      );
      localStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));
      setIsTotal(updatedProducts);
    }
  };

  React.useEffect(() => {
    removeFromLocalStorage("selectedProducts");
    const existingProducts =
      JSON.parse(localStorage.getItem("selectedProducts")) || [];
    const foundIndex = productSelection?.findIndex(
      (product) => product.id === id
    );
    if (foundIndex >= 0) {
      setChecked(true);
    }
  }, []);

  React.useEffect(() => {
    const existingProducts =
      JSON.parse(localStorage.getItem("selectedProducts")) || [];
    const index = existingProducts.findIndex((product) => product.id === id);
    if (index !== -1) {
      existingProducts[index].quantity = quantity;
      const updatedProducts = [...existingProducts];
      setIsTotal(updatedProducts);
      localStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));
    }
  }, [quantity]);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  window.onload = () => {
    localStorage.removeItem("selectedProducts");
  };

  const myToken = getFromLocalStorage("megaTechAuth");
  return (
    <CloseOrderContainer>
      <ProductSummary>
        <div className="closeOrderLeft">
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />

          <img src={img} />
          <p className="name">{name} </p>
          <div className="responsive">
            <p className="nameResponsive">{name} </p>
            <p className="price">R$ {price * quantity}</p>
          </div>
        </div>
        <div className="closeOrderQuantitys">
          <h3>quantidade</h3>
          <div className="closeOrderQuantity">
            <IconButton onClick={handleDecrement}>
              <RemoveIcon />
            </IconButton>
            <p className="quantity">{quantity}</p>

            <IconButton onClick={handleIncrement}>
              <AddIcon />
            </IconButton>
          </div>
        </div>
        <div className="closeOrderPrice">
          <p className="price">R$ {price * quantity}</p>
        </div>
      </ProductSummary>
    </CloseOrderContainer>
  );
};
