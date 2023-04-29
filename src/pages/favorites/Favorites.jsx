import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Nav } from "../../components/nav/Nav";
import {
  ImageContainer,
  InformationProducts,
  ProductsContainer,
} from "../../components/products/ProducsSlyles";
import styled from "styled-components";
import { ContainerHome, Conteiner } from "../home/Home";
import banner from "../../assets/images/ipad-card-40-pro-202108 1.png";
import { Products } from "../../components/products/Products";
const useStyles = makeStyles({
  root: {
    maxWidth: 240,
  },
  media: {
    height: 140,
  },
});
const products = [
  {
    avaliações: "Preço R$ 5000",
    name: "IPad 6 32GB Cinza Espacial Apple",
  },
  {
    avaliações: "Preço R$ 5000",
    name: "IPad 6 32GB Cinza Espacial Apple",
  },
  {
    avaliações: "Preço R$ 5000",
    name: "IPad 6 32GB Cinza Espacial Apple",
  },
  {
    avaliações: "Preço R$ 5000",
    name: "IPad 6 32GB Cinza Espacial Apple",
  },
  {
    avaliações: "Preço R$ 5000",
    name: "IPad 6 32GB Cinza Espacial Apple",
  },
  {
    avaliações: "Preço R$ 5000",
    name: "IPad 6 32GB Cinza Espacial Apple",
  },
  {
    avaliações: "Preço R$ 5000",
    name: "IPad 6 32GB Cinza Espacial Apple",
  },
  {
    avaliações: "Preço R$ 5000",
    name: "IPad 6 32GB Cinza Espacial Apple",
  },
  {
    avaliações: "Preço R$ 5000",
    name: "IPad 6 32GB Cinza Espacial Apple",
  },
];
function Favotites() {
  const classes = useStyles();

  return (
    <>
      <Nav />
      <ContainerHome>
        <NewConteiner>
          {products.map((product) => (
            <div className="newDiv">
              <Products name={product.name} avaliações={product.avaliações} />
            </div>
          ))}
        </NewConteiner>
      </ContainerHome>
    </>
  );
}

export default Favotites;
export const NewProductsContainer = styled(ProductsContainer)`
  width: 50px;
`;
export const NewInformationProducts = styled(InformationProducts)``;
export const NewConteiner = styled(Conteiner)`
  flex-wrap: wrap;
  background: transparent;
  gap: 60px;
 
 justify-content: center;
  .newDiv {
    width: 200px;
  }
`;
