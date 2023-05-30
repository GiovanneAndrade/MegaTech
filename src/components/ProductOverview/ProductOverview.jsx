import { ListProducts } from "../listProducts/ListProducts";
import { SlideImgProducts } from "../slideImgProducts/SlideImgProducts";
import { Titles } from "../title/Title";
import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import {
  ButtonsStyles,
  ContainerLeft,
  ContainerProduct,
  ContainerProductImg,
  ContainerProductList,
  ContainerProductOverview,
  ContainerRight,
  ProductOverviewContainer,
  ProductOverviewShowCategory,
} from "./ProductOverviewStyles";
import { Buttons } from "../button/Button";
import { CategoriesContext } from "../../contexts/Categories";
import { ProductContext } from "../../contexts/ProductContext";
import { ShowCategory } from "../../pages/categories/ShowCategory";

export const ProductOverview = () => {
  const { category, showCategory, setShowCategory } =
    React.useContext(CategoriesContext);
  const { productOverview, setProductOverview } =
    React.useContext(ProductContext);

  return (
    <>
      <ProductOverviewContainer>
        <div>
          <ContainerProduct>
            <ContainerLeft>
              <ContainerProductImg>
                <SlideImgProducts />
              </ContainerProductImg>
              <ContainerProductOverview>
                <div className="allTexts">
                  <h1>{productOverview?.name}</h1>
                  <Stack
                    spacing={1}
                    sx={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <Rating
                      name="half-rating-read"
                      defaultValue={5}
                      precision={0.5}
                      readOnly
                    />
                    (150)
                  </Stack>
                </div>
                <div className="allTexts">
                  <h2>R$ {productOverview?.avaliações}</h2>
                  <p>em 12x 16</p>
                  <p>{productOverview?.description}</p>
                </div>

                <ButtonsStyles>
                  <Buttons
                    text={"adicionar ao carrinho"}
                    typeButton={null}
                    productOverview={productOverview}
                  />
                  <Buttons
                    text={"comprar agora"}
                    typeButton={"/shopping"}
                    productOverview={productOverview}
                  />
                </ButtonsStyles>
              </ContainerProductOverview>
            </ContainerLeft>
            <ContainerRight>div 2 </ContainerRight>
          </ContainerProduct>
        </div>
        <ContainerProductList>
          {showCategory ? (
            <div className="containerRight">
              {category?.map((category) => (
                <>
                  <Titles titles={category} />
                  <ListProducts products={category?.products} />
                </>
              ))}
              v
            </div>
          ) : (
            <ProductOverviewShowCategory>
              <ShowCategory />
            </ProductOverviewShowCategory>
          )}
        </ContainerProductList>
      </ProductOverviewContainer>
    </>
  );
};
