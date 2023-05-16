import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@material-ui/core";
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Remove as RemoveIcon,
} from "@material-ui/icons";
import { Nav } from "../../components/nav/Nav";
import styled from "styled-components";
import { Buttons } from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import useShoppingCart from "../../hooks/UseCart";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    margin: "auto",
    marginTop: theme.spacing(3),
    backgroundColor: "#f5f5f5",
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  productImage: {
    width: 60,
    height: 60,
    marginRight: theme.spacing(2),
  },
}));

function MyCart() {
  const navigate = useNavigate();
  const classes = useStyles();

  const { items, handleAddItem, handleRemoveItem, handleDeleteItem, subtotal } =
    useShoppingCart();
  return (
    <>
      <Nav />
      <RootCard className={classes.root}>
        <CardHeader title="Carrinho" className={classes.cardHeader} />
        <Divider />
        <CardContent>
          <List>
            {items.map((item) => (
              <ListItem key={item.id}>
                <ListItemAvatar>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={classes.productImage}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={`$${item.price}`}
                />
                <NewListItemSecondaryAction>
                  <IconButton onClick={() => handleRemoveItem(item.id)}>
                    <RemoveIcon />
                  </IconButton>
                  {item.quantity}
                  <NewTypography> 
                    <IconButton onClick={() => handleAddItem(item.id)}>
                      <AddIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteItem(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </NewTypography>
                </NewListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
          {items.length === 0 ? (
            <Typography align="center">Your cart is empty</Typography>
          ) : (
            <>
              <Divider />
              <FinalTypography variant="subtitle1">
                Subtotal: ${subtotal.toFixed(2)}
                <Button
                  variant="contained"
                  onClick={() => navigate("/shopping")}
                >
                  Comprar
                </Button>
              </FinalTypography>
            </>
          )}
        </CardContent>
      </RootCard>
    </>
  );
}

export default MyCart;
export const RootCard = styled(Card)`
  min-width: 50%;
`;
export const NewListItemSecondaryAction = styled(ListItemSecondaryAction)`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const NewTypography = styled(Typography)`
  display: flex;
  gap: 150px;
`;
export const FinalTypography = styled(Typography)`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;
