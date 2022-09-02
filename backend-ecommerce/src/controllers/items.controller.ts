import { PrismaClient } from "@prisma/client";
import { resolve } from "path";
const prisma = new PrismaClient();
import {Request, Response } from 'express';

export const createNewItem = () => {
  prisma.items
    .create({
      data: {
        name: "Asus ZenBook 14",
        category: "Laptop",
        description:
          "Processor: 9th Intel Core i5 2.6GHz, Graphics Card: NVIDIA® GeForce RTX™ 3050 Ti, 4 GB GDDR6, Memory: 16 GB RAM, 512 GB SSD ",
        rating: 3,
        price: 1120,
      },
    })
    .then(() => console.log("item created"));
};

export const getAllItems = (res: any) => {
  prisma.items.findMany().then((items) => {
    res.send(items);
  });
};

export const getOneItem = async (requestId: number, res: Response) => {
   const item = await prisma.items.findUnique({
        where: {
            id: requestId
        }
    })

    return res.send(item);
}

export const deleteAll = (res: any) => {
  prisma.items.deleteMany().then(() => res.send("deleted everything"));
};
