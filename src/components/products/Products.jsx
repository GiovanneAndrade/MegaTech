import React from "react";
import { ImageContainer, InformationProducts, ProductsContainer,} from "./ProducsSlyles";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import banner from "../../assets/images/ipad-card-40-pro-202108 1.png";
import { Checkbox } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
export const Products = ({ name, avaliações }) => {
  const navigate = useNavigate();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <ProductsContainer >
      <ImageContainer onClick={()=> navigate("/product")}>
        <img src={banner} />
      </ImageContainer>
      <InformationProducts >
        <h1 onClick={()=> navigate("/product")}> {name}</h1>
        <p onClick={()=> navigate("/product")}> {avaliações}</p>
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
            />
          </div>
        </div>
      </InformationProducts>
    </ProductsContainer>
  );
};
