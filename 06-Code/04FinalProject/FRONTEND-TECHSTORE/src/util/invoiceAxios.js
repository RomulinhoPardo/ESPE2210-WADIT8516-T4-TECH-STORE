import axios from "axios";
const baseUrl = "http://ec2-52-23-176-81.compute-1.amazonaws.com:3004/api/invoices";

export async function GetInvoices() {
  try {
    const response = await axios.get(`${baseUrl}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function postInvoice(body) {
  try {
    const response = await axios.post(`${baseUrl}`, body);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export async function putInvoice(id, body) {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, body);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteInvoices(id) {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
