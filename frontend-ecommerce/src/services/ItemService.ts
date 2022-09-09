import axios from "axios";

export const getAllItems = async () => {
  const items = await axios.get(`${process.env.REACT_APP_URL}/items/all`);
  return items;
};
