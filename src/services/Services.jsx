import axios from "axios";
import { getFromLocalStorage } from "../localStorage/LocalStorage";

const APIprefix = "http://localhost:5000";


const tokenLocal = getFromLocalStorage('megaTechAuth')
 
const config = {
  headers: {
    Authorization: `Bearer ${tokenLocal?.token}`,
  },
};


function getProductsHot() {
  return axios.get(`${APIprefix}/product/hot`);
}

function getProducts() {
  return axios.get(`${APIprefix}/product`);
}

function getCategories() {
  return axios.get(`${APIprefix}/categories`);
}

function getFavorities() {
  
  return axios.get(`${APIprefix}/favorities`, config);
}

function postFavorities(id, userId) {
  const Favorities = {
    productId: [{ id: id }],
    userId: Number(userId),
  };
  return axios.post(`${APIprefix}/favorities`, Favorities, config);
}

function postRemoveFavorities(id, userId) {
  const Favorities = {
    productId: [{ id: id }],
    userId: Number(userId),
  };
  return axios.put(`${APIprefix}/favorities`, Favorities, config);
}

function getAddress() {
  return axios.get(`${APIprefix}/address`, config);
}
function postAnddress(myAnddress, userId) {
  const data = {
    cep: Number(myAnddress.cep),
    address: "",
    name_recipient: myAnddress.name_recipient,
    number: 27,
    district: myAnddress.bairro,
    city: myAnddress.city,
    uf: myAnddress.uf,
    complement: "",
    userId: Number(userId),
  };

  return axios.post(`${APIprefix}/address`, data, config);
}
function deleteMyAddress(id) {
  return axios.delete(`${APIprefix}/address/${id}`, config);
}
function updateMyAddress(currentAddress, previousAddress) {
  return axios.put(`${APIprefix}/address/${currentAddress}/${previousAddress}`, config);
}

function getRequests() {
  return axios.get(`${APIprefix}/request`, config);
}

function postUser(signup) {
  const data = {
    name: "newUser",
    email: "newUser@newUser.com",
    password: "gege",
    cpf: "12348948784",
    phone: 1243758689,
  };
  console.log(signup)
  return axios.post(`${APIprefix}/signup`, signup);
}

function postSignin(login) {

  console.log(login)
  return axios.post(`${APIprefix}/signin`, login);
}


function postRequest(finalOrder, userId) {
  const Product = finalOrder[0].products.map((product) => ({ id: product.id }));
  const addressId = finalOrder[1].address.id;
  const total = finalOrder[2].total;

  const paymentsInformation = JSON.stringify({
    ...finalOrder[4],
    ...finalOrder[3].card,
  });
  const data = {
    total: total,
    message: paymentsInformation,
    addressId: addressId,
    userId: Number(userId),
    products: Product,
  };

  return axios.post(`${APIprefix}/request`, data, config);
}

export {
  getCategories,
  getProductsHot,
  getProducts,
  getFavorities,
  postFavorities,
  getAddress,
  postAnddress,
  deleteMyAddress,
  updateMyAddress,
  postRequest,
  postRemoveFavorities,
  getRequests,
  postUser,
  postSignin
};
