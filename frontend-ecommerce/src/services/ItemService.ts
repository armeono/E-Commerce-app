import axios from "axios";

export const getAllItems = async () => {
  const items = await axios.get(`${process.env.REACT_APP_URL}/items/all`);

  return items;
};

export const getOneItem = async (id: number) => {

  const items = await axios.get(`${process.env.REACT_APP_URL}/items/get/${id}`);

  return items.data;
};

export const getSearchResult = async (searchTerm: string | undefined) => {
  const searchResults = await axios.get(`${process.env.REACT_APP_URL}/items/search/${searchTerm}`);

  return searchResults.data;
}
