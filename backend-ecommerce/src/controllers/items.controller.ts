import { PrismaClient } from "@prisma/client";
import { resolve } from "path";
const prisma = new PrismaClient();
import { Request, Response } from "express";

export const createNewItem = () => {
  // prisma.items
  //   .create({
  //     data: {
  //       name: "Microsoft Surface",
  //       category: "Laptop",
  //       description:
  //         "Processor: Intel Core i7 3.4GHz, Graphics Card: NVIDIA® GeForce RTX™ 3050 Ti, 4 GB GDDR6, Memory: 16 GB RAM, 1000 GB SSD ",
  //       rating: 5,
  //       price: 1600

  //   }}).then(() => console.log('item created'))

  prisma.images.create({
    data: {
      image_url: "https://firebasestorage.googleapis.com/v0/b/e-commerce-a9979.appspot.com/o/Macbook%2016%2Fvpavic_191118_3800_0122.jpg?alt=media&token=563ebe62-cdb7-4f47-bdfd-15e3795298b8",
      itemsId: 1
    }
  }).then(() => console.log('item created'))



  // prisma.images.delete({where: {id: 10}}).then(() => console.log('image deleted'))

  // prisma.images.findMany().then((res) => console.log(res))
};



export const getAllItems = async (res: Response) => {
  const items = await prisma.items.findMany({include: {images: true, carts: true}});

  return res.send(items);
};

export const getOneItem = async (requestId: number, res: Response) => {

  const item = await prisma.items.findUnique({
    where: {
      id: requestId,
    }, include: {images: true, carts: true}
  });

  return res.send(item);
};

export const deleteAll = (res: any) => {
  prisma.items.deleteMany().then(() => res.send("deleted everything"));
};
