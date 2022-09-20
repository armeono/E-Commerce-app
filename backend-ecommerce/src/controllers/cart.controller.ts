import { PrismaClient } from "@prisma/client";
import { Response } from "express";
const prisma = new PrismaClient();

export const getAllCartItems = async () => {
  const cartItems = await prisma.cart.findMany();

  return cartItems;
};

export const getAllCartItemsOfUser = async (id: number, res: Response) => {
  const cartItems = await prisma.cart
    .findMany({
      where: {
        userId: Number(id),
      },
    })
    .then((items) => res.send(items));
};

export const addItemToCart = (user: number, item: number) => {
  prisma.cart
    .create({
      data: {
        userId: user,
        itemId: item,
      },
    })
    .then(() => console.log("item added!"))
    .catch((err) => console.log(err));
};

export const removeItemFromCart = (cartItemId: number) => {
  prisma.cart
    .delete({
      where: {
        id: cartItemId,
      },
    })
    .then((res) => res);
};
