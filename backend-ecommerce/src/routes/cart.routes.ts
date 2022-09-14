import express, { Request, Response } from "express";
import {
  addItemToCart,
  getAllCartItems,
  removeItemFromCart,
} from "../controllers/cart.controller";

const router = express.Router();


router.get("/getAll", (req: Request, res: Response) => {
  const items = getAllCartItems();

  res.send(items);
})

router.post("/post", (req: Request, res: Response) => {
    addItemToCart(req.body.userId, req.body.itemId);
});

router.delete("/delete/:id", (req: Request, res: Response) => {
    removeItemFromCart(Number(req.params.id));
})

export default router;
