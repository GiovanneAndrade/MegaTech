import React, { useEffect, useState } from "react";
import {
  ImageContainer,
  InformationProducts,
  ProductsContainer,
} from "./ProducsSlyles";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import banner from "../../assets/images/ipad-card-40-pro-202108 1.png";
import { Checkbox } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import { useCreateFavorites } from "../../hooks/UseFavorites";
import { FavoritesContext } from "../../contexts/FavoritesContext";
export const Products = ({
  name,
  avaliações,
  image,
  description,
  quantity,
  id,
  isFavorite,
}) => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const { productOverview, setProductOverview } =
    React.useContext(ProductContext);
  const { myFavorities, setMyFavorities, favorities } =
    React.useContext(FavoritesContext);

  useEffect(() => {
    if (favorities?.filter((f) => f.id === id).length > 0 || isFavorite) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [favorities, id, isFavorite]);

  function showProduct(name, avaliações, image, description, quantity, id) {
    setProductOverview({
      name,
      price: avaliações,
      image,
      description,
      quantity,
      id,
    });
    navigate("/product");
  }
  const { createFavorites, removeFavorites } = useCreateFavorites();

  async function handleCheckboxChange() {
    setChecked(!checked);
    if (!checked) {
      const hasError = await createFavorites(id);
      setMyFavorities(id);
    } else {
      const hasError = await removeFavorites(id);
    }
  }

  return (
    <ProductsContainer>
      <ImageContainer
        onClick={() => showProduct(name, avaliações, image, description, 1, id)}
      >
        <img src={image} />
      </ImageContainer>
      <InformationProducts>
        <h1
          onClick={() =>
            showProduct(name, avaliações, image, description, 1, id)
          }
        >
          {name}
        </h1>

        <p
          onClick={() =>
            showProduct(name, avaliações, image, description, 1, id)
          }
        >
          {" "}
          {avaliações}
        </p>
        <div className="containerProductsLow">
          Avaliações
          <div>
            <Checkbox
              {...label}
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
              sx={{
                "&.Mui-checked": {
                  color: "#fb8500",
                },
              }}
              checked={checked}
              onChange={handleCheckboxChange}
            />
          </div>
        </div>
      </InformationProducts>
    </ProductsContainer>
  );
};
