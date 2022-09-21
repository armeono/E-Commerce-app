import { json } from "body-parser";
import express, { Request, Response } from "express";
import {
  addItemToCart,
  getAllCartItems,
  removeItemFromCart,
  getAllCartItemsOfUser,
} from "../controllers/cart.controller";
import { sendEmail } from "../controllers/cart.controller";

const router = express.Router();

router.get("/getAll/:id", async (req: Request, res: Response) => {
  const items = await getAllCartItemsOfUser(Number(req.params.id), res);
});

router.get("/getAll", async (req: Request, res: Response) => {
  const items = await getAllCartItems();

  res.send(items);
});

router.post("/post", (req: Request, res: Response) => {
  addItemToCart(Number(req.body.data.userId), req.body.data.itemId);
});

router.delete("/delete/:id", async (req: Request, res: Response) => {
  const response = await removeItemFromCart(Number(req.params.id));

  res.send(response);
});

router.get("/send-email", async (req: Request, res: Response) => {

  return sendEmail(res);


});

export default router;
