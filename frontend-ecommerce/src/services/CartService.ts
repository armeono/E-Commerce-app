import axios from "axios";

export const getAllItemsOfUsers = (userID: number) => {
  axios
    .get(`${process.env.REACT_APP_URL}/cart/getAll/${userID}`)
    .then((response) => response.data);
};

export const addItemToCart = (userID: number, itemID: number) => {
  axios
    .post(`${process.env.REACT_APP_URL}/cart/post`, {
      data: {
        userId: userID,
        itemId: itemID,
      },
    })
    .catch((err) => console.log(err));
};

export const removeItemFromCart = (cartItemID: number) => {
  axios
    .delete(`${process.env.REACT_APP_URL}/cart/delete/${cartItemID}`)
    .catch((err) => console.log(err));
};
