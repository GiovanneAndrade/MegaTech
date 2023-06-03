import React, { useEffect, useState } from "react";
import {
  ImageContainer,
  InformationProducts,
  ProductsContainer,
} from "./ProducsSlyles";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import banner from "../../assets/images/ipad-card-40-pro-202108 1.png";
import { Box, Checkbox, Grid } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import { useCreateFavorites } from "../../hooks/UseFavorites";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { CategoriesContext } from "../../contexts/Categories";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../../localStorage/LocalStorage";
import StarIcon from "@mui/icons-material/Star";
export const Products = ({
  name,
  avaliações,
  image,
  description,
  quantity,
  id,
  isFavorite,
  category,
}) => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const { productOverview, setProductOverview } =
    React.useContext(ProductContext);
  const { myFavorities, setMyFavorities, favorities } =
    React.useContext(FavoritesContext);
  const { setIsCategory } = React.useContext(CategoriesContext);
  useEffect(() => {
    if (favorities?.filter((f) => f.id === id).length > 0 || isFavorite) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [favorities, id, isFavorite]);

  function showProduct(
    name,
    avaliações,
    image,
    description,
    quantity,
    id,
    category
  ) {
    setProductOverview({
      name,
      price: avaliações,
      image,
      description,
      quantity,
      id,
      category,
    });
    setIsCategory(category);
    navigate("/product");
  }
  const { createFavorites, removeFavorites } = useCreateFavorites();

  async function handleCheckboxChange() {
    setChecked(!checked);
    if (!checked) {
      const hasError = await createFavorites(id);
      setMyFavorities(id);
      if (hasError) {
        setChecked(false);
        toast.success("Faça Login Primeiro!", {
          className: "custom-toast",
        });
      }
     
    } else {
      const hasError = await removeFavorites(id);
    }
  }

  return (
    <ProductsContainer>
    
      <ImageContainer
        onClick={() =>
          showProduct(name, avaliações, image, description, 1, id, category)
        }
      >
        <img src={image} />
      </ImageContainer>
      <InformationProducts>
        <h1
          onClick={() =>
            showProduct(name, avaliações, image, description, 1, id, category)
          }
        >
          {name}
        </h1>

        <p
          onClick={() =>
            showProduct(name, avaliações, image, description, 1, id, category)
          }
        >
          {" "}
          R$ {avaliações}
        </p>
        <div className="containerProductsLow">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <StarIcon style={{ color: "#FB8500" }} />
            <p>4.9</p>
          </Box>
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
