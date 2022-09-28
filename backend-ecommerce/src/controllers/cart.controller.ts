import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();
import nodemailer from "nodemailer";
import { getAllItemsFromList } from "./items.controller";

export const getAllCartItems = async () => {
  const cartItems = await prisma.cart.findMany();

  return cartItems;
};

export const getAllCartItemsOfUser = async (id: number, res: Response) => {


  if (id) {
    const cartItems = await prisma.cart
      .findMany({
        where: {
          userId: id,
        },
      })
      .then((items) => res.send(items));
  }
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

export const sendEmail = (req: Request, res: Response) => {
  const emailDetails = req.body.data;

  getAllItemsFromList(emailDetails?.items).then((response) => {
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
        from: `Tech Online Store <${process.env.EMAIL}>`,
        to: [`${emailDetails.email}`],
        subject: "Order receipt",
        text: ``,
        html: `<h1>Hello, ${
          emailDetails.firstName
        }</h1><p>Please find attached your order receipt. Thank you for shopping with us!</p> <h2>Items you ordered: </h2> <ul>
       ${response?.map(
         (item) =>
           `<li><b>Item:<b/> ${item.name}  |   <b>Price: </b> ${item.price}$</li>`
       )}
       <ul/>
        <h2>Shipping details:</h2>
        <p>City: ${emailDetails.city}<p/>
        <p>Country: ${emailDetails.country}</p>
        <p>Zip Code: ${emailDetails.zipcode}</p>`,
      },
      (err: any) => {
        if (err) res.send(err);

        res.status(200).send("Email sent!");
      }
    );
  });
};
