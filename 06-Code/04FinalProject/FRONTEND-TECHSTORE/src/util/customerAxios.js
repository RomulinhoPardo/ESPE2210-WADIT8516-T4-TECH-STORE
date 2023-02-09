import axios from "axios";
const baseUrl = "http://localhost:3004/api/customers";

export async function getCustomers() {
  try {
    const customers = await axios.get(`${baseUrl}`);
    return customers.data;
  } catch (error) {
    console.log(error);
  }
}

export async function postCustomer(body) {
  try {
    const customer = await axios.post(`${baseUrl}`, body);
    return customer.data;
  } catch (error) {
    console.log(error);
  }
}

export async function putCustomer(id, body) {
  try {
    const customer = await axios.put(`${baseUrl}/${id}`, body);
    return customer.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteCustomer(id) {
  try {
    const customer = await axios.delete(`${baseUrl}/${id}`);
    return customer.data;
  } catch (error) {
    console.log(error);
  }
}
