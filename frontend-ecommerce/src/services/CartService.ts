import axios from "axios";
import { CheckoutType } from "../types/Types";
import { getOneItem } from "./ItemService";

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

export const OrderAndSendEmail = async (emailDetails: CheckoutType) => {

  return axios
    .post(`${process.env.REACT_APP_URL}/cart/send-email`, {
      data: {
        firstName: emailDetails.firstName,
        lastName: emailDetails.lastName,
        email: emailDetails.email,
        city: emailDetails.city,
        country: emailDetails.country,
        zipcode: emailDetails.zipCode,
        items: emailDetails.items,
      },
    })
    .then((res) => console.log(res));
};
