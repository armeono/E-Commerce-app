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
      image_url: "https://firebasestorage.googleapis.com/v0/b/e-commerce-a9979.appspot.com/o/Microsoft%20Surface%2Fc73cd750-ed07-11ec-abdf-7b1af5b1e683.cf.jpg?alt=media&token=5ad1ae7e-6364-4f2a-baf1-bdd22b17c70e",
      itemsId: 4
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
