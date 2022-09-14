import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllCartItems = async () => {
  const cartItems = await prisma.cart.findMany();

  return cartItems;
}

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
      id: cartItemId
    },
  });
};
