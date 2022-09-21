import { PrismaClient } from "@prisma/client";
import { Response } from "express";
const prisma = new PrismaClient();
import nodemailer from "nodemailer";

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

export const sendEmail = (res: Response) => {
  let transporter = nodemailer.createTransport({
    service: "hotmail",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  transporter.sendMail(
    {
      from: `${process.env.EMAIL}`,
      to: ["ahadzigrahic@gmail.com"],
      subject: "Order receipt",
      text: `Hello, Arman. Please find attached your order receipt. Thank you for shopping with us!`,
      html: "<b>Order</b> ",
    },
    (err: any) => {
      if (err) res.send(err);

      res.status(200).send("Email sent!");
    }
  );
};
