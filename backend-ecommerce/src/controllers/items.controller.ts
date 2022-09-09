import { PrismaClient } from "@prisma/client";
import { resolve } from "path";
const prisma = new PrismaClient();
import { Request, Response } from "express";

export const createNewItem = () => {
  // prisma.items
  //   .create({
  //     data: {
  //       name: "Dell XPS 15",
  //       category: "Laptop",
  //       description:
  //         "Processor: Intel Core i7 3.4GHz, Graphics Card: NVIDIA® GeForce RTX™ 3050 Ti, 4 GB GDDR6, Memory: 16 GB RAM, 1000 GB SSD ",
  //       rating: 5,
  //       price: 1800

  //   }}).then(() => console.log('item created'))

  prisma.images.create({
    data: {
      image_url: "https://firebasestorage.googleapis.com/v0/b/e-commerce-a9979.appspot.com/o/Asus%2Fmchin_200731_5205_0004.jpg?alt=media&token=dcc4487d-b005-49e5-a251-885a8b55005bhttps://firebasestorage.googleapis.com/v0/b/e-commerce-a9979.appspot.com/o/Macbook%2016%2F211025072623-macbook-pro-14-display-5.jpeg?alt=media&token=7835a544-d3b5-4e31-82a9-c73f4010aaefhttps://firebasestorage.googleapis.com/v0/b/e-commerce-a9979.appspot.com/o/Macbook%2016%2FMacBook-Pro-Review-9to5Mac.webp?alt=media&token=c85908e2-6432-4140-98f7-f950163761achttps://firebasestorage.googleapis.com/v0/b/e-commerce-a9979.appspot.com/o/Macbook%2016%2Fvpavic_191118_3800_0122.jpg?alt=media&token=563ebe62-cdb7-4f47-bdfd-15e3795298b8https://firebasestorage.googleapis.com/v0/b/e-commerce-a9979.appspot.com/o/Macbook%2016%2Fvpavic_191118_3800_0201.jpg?alt=media&token=21d5d400-1695-460f-b92b-5a4c89cfb6c5https://firebasestorage.googleapis.com/v0/b/e-commerce-a9979.appspot.com/o/Dell%20XPS%2015%2Flaptop.jpg?alt=media&token=a3538ffe-24d7-4f9c-b3f7-0d4be13      include: {images: true}dhttps://firebasestorage.googleapis.com/v0/b/e-commerce-a9979.appspot.com/o/Dell%20XPS%2015%2Flaptop.jpg?alt=media&token=a3538ffe-24d7-4f9c-b3f7-0d4be138f00d",
      itemsId: 2
    }
  }).then(() => console.log('item created'))
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
