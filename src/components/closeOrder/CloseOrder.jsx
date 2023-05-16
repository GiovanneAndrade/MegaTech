import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { CloseOrderContainer, ProductSummary } from "./CloseOrderStyles";
import banner from "../../assets/images/ipad-card-40-pro-202108 1.png";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@material-ui/core";
import { OrderContext } from "../../contexts/OrderContext";

export const CloseOrder = ({ img, quantitys, price, name, id, productSelection }) => {
  const [checked, setChecked] = React.useState(false);
  const [quantity, setQuantity] = React.useState(quantitys);
  
  const { teste,setTeste } = React.useContext(OrderContext);
   
  React.useEffect(() => {

    
      const existingProducts = JSON.parse(localStorage?.getItem("selectedProducts")) || []; 
      console.log(existingProducts)
      const foundIndex = productSelection?.findIndex((product) => product.id === id);
      if (foundIndex >= 0) {
        setChecked(true);
      }  
    
  }, []);
  
  

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked) {
      const selectedProduct = { id, img, name, price, quantity };
      const existingProducts = JSON.parse(localStorage.getItem("selectedProducts")) || [];
      const index = existingProducts.findIndex((product) => product.id === id);
      if (index !== -1) {
        existingProducts[index].quantity += quantity;
        const updatedProducts = [...existingProducts];
        localStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));
      } else {
        const updatedProducts = [...existingProducts, selectedProduct];
        localStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));
      }
    } else {
      const existingProducts = JSON.parse(localStorage.getItem("selectedProducts")) || [];
      const updatedProducts = existingProducts.filter((product) => product.id !== id);
      localStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));
    }
  };
  
  React.useEffect(() => {
    const existingProducts = JSON.parse(localStorage.getItem("selectedProducts")) || []; 
    const foundIndex = productSelection?.findIndex((product) => product.id === id);
    if (foundIndex >= 0) {
      setChecked(true);
    }
  }, []);
  
  React.useEffect(() => {
    const existingProducts = JSON.parse(localStorage.getItem("selectedProducts")) || [];
    const index = existingProducts.findIndex((product) => product.id === id);
    if (index !== -1) {
      existingProducts[index].quantity = quantity;
      const updatedProducts = [...existingProducts];
      setTeste(updatedProducts)
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
  return (
    <CloseOrderContainer>
      <ProductSummary>
        <div>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />

          <img src={img} />
          <p>{name} </p>
        </div>
        <div className="quantity-container">
          <IconButton onClick={handleDecrement}>
            <RemoveIcon />
          </IconButton>
          <p className="quantity">{quantity}</p>

          <IconButton onClick={handleIncrement}>
            <AddIcon />
          </IconButton>
        </div>
        <p className="price">R$ {price * quantity}</p>
        <p>valor total </p>
      </ProductSummary>
    </CloseOrderContainer>
  );
};
