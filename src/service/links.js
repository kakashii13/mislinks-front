import axios from "axios";

const baseUrl = "/api/links";

export const getAll = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

export const create = async (newObj) => {
  const res = await axios.post(baseUrl, newObj);
  return res.data;
};

export const remove = async (id) => {
  await axios.delete(`${baseUrl}/${id}`);
};
