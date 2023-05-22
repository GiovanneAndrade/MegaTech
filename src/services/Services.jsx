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

function postFavorities(id) {

  const Favorities = {
    productId: [{ id: id }],
    userId: 1,
  };
  return axios.post(`${APIprefix}/favorities`, Favorities);
}

function postRemoveFavorities(id) {
  const Favorities = {
    productId: [{ id: id }],
    userId: 1,
  };
  return axios.put(`${APIprefix}/favorities`, Favorities);
}

function getAddress() {
  return axios.get(`${APIprefix}/address`);
}
function postAnddress(myAnddress) {
  const data = {
    cep: Number(myAnddress.cep),
    address: "",
    name_recipient: myAnddress.name_recipient,
    number: 27,
    district: myAnddress.bairro,
    city: myAnddress.city,
    uf: myAnddress.uf,
    complement: "",
    userId: 1,
  };

  return axios.post(`${APIprefix}/address`, data);
}
function deleteMyAddress(id) {
  return axios.delete(`${APIprefix}/address/${id}`);
}
function updateMyAddress(currentAddress, previousAddress) {
  return axios.put(`${APIprefix}/address/${currentAddress}/${previousAddress}`);
}

function getRequests() {
  return axios.get(`${APIprefix}/request`);
}

function postRequest(finalOrder) {
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
    addressId: 12,
    userId: 1,
    products: Product,
  };


  return axios.post(`${APIprefix}/request`, data);
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
  getRequests
};
