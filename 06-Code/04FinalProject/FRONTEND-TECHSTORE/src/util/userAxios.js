import axios from "axios";
const baseUrl = "http://ec2-52-23-176-81.compute-1.amazonaws.com:3004/api/users";

export async function getUsers() {
  try {
    const users = await axios.get(`${baseUrl}`);
    return users.data;
  } catch (error) {
    console.log(error);
  }
}

export async function postUser(body) {
  try {
    const user = await axios.post(`${baseUrl}`, body);
    return user.data;
  } catch (error) {
    console.log(error);
  }
}

export async function putUser(id, body) {
  try {
    const user = await axios.put(`${baseUrl}/${id}`, body);
    return user.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUser(id) {
  try {
    const user = await axios.delete(`${baseUrl}/${id}`);
    return user.data;
  } catch (error) {
    console.log(error);
  }
}
