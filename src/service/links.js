import axios from "axios";

// const baseUrl = import.meta.env.VITE_BACKEND_LINK;
const baseUrl = "/api/links";
let token = undefined;

export const setToken = (newToken) => {
  token = newToken;
};

export const getAll = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

export const create = async (newObj) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const res = await axios.post(baseUrl, newObj, config);
  return res.data;
};

export const remove = async (id) => {
  await axios.delete(`${baseUrl}/${id}`);
};
