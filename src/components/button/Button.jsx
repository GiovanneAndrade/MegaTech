import * as React from "react";
import Button from "@mui/material/Button";
import { useAddCart } from "../../hooks/UseCart";
import { AppContext } from "../../contexts/AppContext";

export const Buttons = ({ text, typeButton, productOverview, cardData,  variant  }) => {
  const { handleAddCart, showShopping } = useAddCart();
  const { newCard, setNewCard, saved, setSaved } = React.useContext(AppContext);
  const [invalidData, setInvalidData] = React.useState(true);
 
  React.useEffect(() => {
    const regex = /^[0-9]{16}$/;
    if (cardData?.number && regex.test(cardData.number)) {
      setInvalidData(false);
    } else {
      setInvalidData(true);
    }
  }, [cardData]);

  return (
    <div>
      <Button
        variant={variant}
        disabled={text === "Salvar Cartão" ? invalidData : false}
        onClick={() => {
          if (text === "Salvar Cartão") {
            const last4Digits = cardData?.number.slice(-4); // "3456"
            setNewCard([
              ...newCard,
              { name: "Credit Card", last4Digits: last4Digits },
            ]);
            setSaved(true);
          }
          if (text === "adicionar ao carrinho") {
            handleAddCart(productOverview);
          } else if ("comprar agora") {
            showShopping(typeButton, productOverview);
          }
        }}
        sx={{
          '@media (max-width:660px)': {
            fontSize: '0.8rem',  
            padding: '10px',   
          }
        }}
      >
        {text}
      </Button>
    </div>
  );
};
