import { PrismaClient } from "@prisma/client";
import { Response } from "express";
const prisma = new PrismaClient();


export const getAllCartItems = async () => {
  const cartItems = await prisma.cart.findMany();

  return cartItems;
};

export const getAllCartItemsOfUser = async (id: number, res: Response) => {
  const cartItems = await prisma.cart.findMany({
    where: {
      userId: id,
    },
  });

  res.send(cartItems);
};

export const addItemToCart = (userId: number, itemId: number) => {
  prisma.cart.create({
    data: {
      userId: userId,
      itemId: itemId,
    },
  });
};

export const removeItemFromCart = (cartItemId: number) => {
  prisma.cart.delete({
    where: {
      id: cartItemId,
    },
  });
};
