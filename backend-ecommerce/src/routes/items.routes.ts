import express, { Request, Response } from "express";
import {
  createNewItem,
  getAllItems,
  deleteAll,
  getOneItem,
  getSearchItems,
} from "../controllers/items.controller";

const router = express.Router();

router.get("/all", (req: Request, res: Response) => {
  getAllItems(res);
});

router.get("/get/:id", (req: Request, res: Response) => {
  console.log(req);
  getOneItem(Number(req.params.id), res);
});

router.get("/createItem", (req: Request, res: Response) => {
  createNewItem();
});

router.get("/deleteAll", (req, res) => {
  deleteAll(res);
});

router.get("/search/:searchTerm", (req: Request, res: Response) => {
  getSearchItems(req.params.searchTerm, res);
});

export default router;
