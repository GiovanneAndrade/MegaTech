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
import { Box } from "@mui/material";

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
          <NewList>
            {items.map((item) => (
              <NewListItem key={item.id}>
                <LeftBox>
                  <ListItemAvatar>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={classes.productImage}
                    />
                  </ListItemAvatar>
                  <Box>
                    <ListItemText
                      primary={item.name}
                      secondary={`$${item.price}`}
                    />
                    <ResponsiveBox>
                      quantidade
                      <IconButton onClick={() => handleRemoveItem(item.id)}>
                        <RemoveIcon />
                      </IconButton>
                      {item.quantity}
                      <IconButton onClick={() => handleAddItem(item.id)}>
                        <AddIcon />
                      </IconButton>
                    </ResponsiveBox>
                  </Box>
                </LeftBox>

                <NewListItemSecondaryAction>
                  <WebBox>
                    <IconButton onClick={() => handleRemoveItem(item.id)}>
                      <RemoveIcon />
                    </IconButton>
                    {item.quantity}

                    <IconButton onClick={() => handleAddItem(item.id)}>
                      <AddIcon />
                    </IconButton>
                  </WebBox>
                  <DeleteBox>
                    <IconButton onClick={() => handleDeleteItem(item.id)}>
                      <DeleteIcon className="icon" />
                    </IconButton>
                  </DeleteBox>
                </NewListItemSecondaryAction>
              </NewListItem>
            ))}
          </NewList>
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
export const LeftBox = styled(Box)`
  display: flex;
`;

export const WebBox = styled(Box)`
  display: flex;
  justify-content: center;

  align-items: center;
  // background-color: #000;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const DeleteBox = styled(Box)`
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: right;
    text-align: end;
    .icon {
      margin-right: -22px;
    }
  }
`;
export const ResponsiveBox = styled(Box)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: relative;
    z-index: 1000;
  }
`;

export const NewListItemSecondaryAction = styled(ListItemSecondaryAction)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  height: 100%;
  width: 50%;
  //background-color: #000;
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
export const NewList = styled(List)`
  display: flex;
  flex-direction: column;

  gap: 15px;
`;
export const NewListItem = styled(ListItem)`
  @media screen and (max-width: 768px) {
    height: 120px;
    padding: 10px;
    padding-right: 0;
    font-size: 13px;
    gap: 5px;
  /*   background: #eee;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.1);
    border-radius: 4px; */
  }
`;
