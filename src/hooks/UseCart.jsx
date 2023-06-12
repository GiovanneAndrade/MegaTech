import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import { saveToLocalStorage } from "../localStorage/LocalStorage";
import { CategoriesContext } from "../contexts/Categories";

function useShoppingCart() {
  const { productOverview, setProductOverview } = React.useContext(ProductContext);
  const { setIsCategory } = React.useContext(CategoriesContext);

  const navigate = useNavigate();

  const existingCart = localStorage.getItem("megaTechCart");
  let initialItemsState = [];

  if (existingCart) {
    initialItemsState = JSON.parse(existingCart);
  }
  const { numberCart, setNumberCart } = React.useContext(CartContext);
   const [items, setItems] = useState(initialItemsState);

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    setNumberCart(numberCart - 1)
    localStorage.setItem("megaTechCart", JSON.stringify(newItems));
  };
  

  const subtotal = items.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );

  const handleAddItem = (id) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, quantity: Number(item.quantity) + 1 } : item
    );
    setItems(newItems);
    localStorage.setItem("megaTechCart", JSON.stringify(newItems));
  };

  const handleRemoveItem = (id) => {
    const newItems = items.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(Number(item.quantity) - 1, 0) }
        : item
    );
    setItems(newItems);
    localStorage.setItem("megaTechCart", JSON.stringify(newItems));
  };

  function showProduct(
    name,
    avaliações,
    image,
    description,
    quantity,
    id,
    category,
    stoke,
    productOverview
  ) {
    setProductOverview({
      name,
      price: avaliações,
      image,
      description,
      quantity,
      id,
      category,
      stoke
    });
     saveToLocalStorage("productOverview", {
      name,
      price: avaliações,
      image,
      description,
      quantity,
      id,
      category,
      stoke
    })
     
    setIsCategory(category);
    navigate("/product");
  }

  return {
    items,
    showProduct,
    handleAddItem,
    handleRemoveItem,
    handleDeleteItem,
    subtotal,
  };
}

export default useShoppingCart;

export const useAddCart = () => {
  const { numberCart, setNumberCart } = React.useContext(CartContext);
  const navigate = useNavigate();

  function handleAddCart(productOverview) {
    const existingCart = localStorage.getItem("megaTechCart");
    if (existingCart) {
      const cartArray = JSON.parse(existingCart);
      const productIndex = cartArray.findIndex(item => item.id === productOverview.id);
      if (productIndex >= 0) {
        // O produto já está no carrinho, apenas incrementa a quantidade
        cartArray[productIndex].quantity += productOverview.quantity;
        localStorage.setItem("megaTechCart", JSON.stringify(cartArray));
        // Não incrementa numberCart
      } else {
        // O produto não está no carrinho, adiciona o produto
        cartArray.push(productOverview);
        localStorage.setItem("megaTechCart", JSON.stringify(cartArray));
        setNumberCart(Number(numberCart) + 1); // Adiciona 1 ao numberCart (em vez de quantity)
      }
    } else {
      // O carrinho está vazio, adiciona o produto
      const cartArray = [productOverview];
      localStorage.setItem("megaTechCart", JSON.stringify(cartArray));
      setNumberCart(Number(numberCart) + 1); // Adiciona 1 ao numberCart (em vez de quantity)
    }
  }
  
  
  
  

  // Função para lidar com a adição de produtos ao carrinho de compras e navegação para uma determinada rota
function showShopping(typeButton, productOverview) {
  // Recuperar o carrinho existente do armazenamento local
  const existingCart = localStorage.getItem("megaTechCart");

  // Verificar se o carrinho existe
  if (existingCart) {
    // Se o carrinho existir, transforme a string JSON do armazenamento local em um array JavaScript
    const cartArray = JSON.parse(existingCart);

    // Encontre o índice do produto atual no carrinho de compras
    const productIndex = cartArray.findIndex(item => item.id === productOverview.id);

    // Verifique se o produto já está no carrinho
    if (productIndex >= 0) {
      // Se o produto estiver no carrinho, incremente a quantidade desse produto
      cartArray[productIndex].quantity += productOverview.quantity;
    } else {
      // Se o produto não estiver no carrinho, adicione o produto ao carrinho
      cartArray.push(productOverview);
    }

    // Salve o carrinho atualizado de volta ao armazenamento local
    localStorage.setItem("megaTechCart", JSON.stringify(cartArray));
  } else {
    // Se o carrinho não existir, crie um novo carrinho com o produto atual e salve-o no armazenamento local
    const cartArray = [productOverview];
    localStorage.setItem("megaTechCart", JSON.stringify(cartArray));
  }

  // Navegue para a rota especificada pelo typeButton
  navigate(typeButton);
}


  return { handleAddCart, showShopping };
};
