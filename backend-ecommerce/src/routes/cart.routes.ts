import { json } from "body-parser";
import express, { Request, Response } from "express";
import {
  addItemToCart,
  getAllCartItems,
  removeItemFromCart,
  getAllCartItemsOfUser,
} from "../controllers/cart.controller";


const router = express.Router();

router.get("/getAll/:id", async (req: Request, res: Response) => {
  const items = await getAllCartItemsOfUser(Number(req.params.id), res);

  res.send(items);
});

router.get("/getAll", async (req: Request, res: Response) => {
  const items = await getAllCartItems();

  res.send(items);
});

router.post("/post", (req: Request, res: Response) => {
  console.log("request", req.body);

  addItemToCart(req.body.userId, req.body.itemId);
});

router.delete("/delete/:id", (req: Request, res: Response) => {
  removeItemFromCart(Number(req.params.id));
});

export default router;
