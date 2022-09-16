import axios from "axios";

export const getAllItemsOfUsers = async (userID: number) => {
  const items = await axios.get(
    `${process.env.REACT_APP_URL}/cart/getAll/${userID}`
  );

  return items;
};

export const addItemToCart = (userID: number, itemID: number) => {
  return axios
    .post(`${process.env.REACT_APP_URL}/cart/post`, {
      data: {
        userId: userID,
        itemId: itemID,
      },
    })
    .catch((err) => console.log(err));
};

export const removeItemFromCart = (cartItemID: number) => {
  return axios
    .delete(`${process.env.REACT_APP_URL}/cart/delete/${cartItemID}`)
    .then(() => console.log("item removed!"))
    .catch((err) => console.log(err));
};
