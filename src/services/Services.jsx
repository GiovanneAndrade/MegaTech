import axios from "axios";

const APIprefix = "http://localhost:5000";

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
  return axios.get(`${APIprefix}/favorities/1`);
}
function getAddress() {
  return axios.get(`${APIprefix}/address`);
}
function deleteMyAddress(id) {
  return axios.delete(`${APIprefix}/address/${id}`);
}
function updateMyAddress(currentAddress, previousAddress) {
  return axios.put(`${APIprefix}/address/${currentAddress}/${previousAddress}`);
}

export {
  getCategories,
  getProductsHot,
  getProducts,
  getFavorities,
  getAddress,
  deleteMyAddress,
  updateMyAddress
};
