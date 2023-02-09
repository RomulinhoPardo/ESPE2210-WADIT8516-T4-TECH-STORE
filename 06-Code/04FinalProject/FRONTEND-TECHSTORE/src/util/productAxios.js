import axios from "axios";
const baseUrl = "http://localhost:3004/api/products";

export async function GetProducts() {
  try {
    const response = await axios.get(`${baseUrl}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function postProducts(product) {
  try {
    const response = await axios.post(`${baseUrl}`, product);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export async function putProduct(id, product) {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, product);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProducts(id) {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
