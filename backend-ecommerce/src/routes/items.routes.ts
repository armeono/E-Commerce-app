import express from "express";
import { createNewItem, getAllItems, deleteAll } from "../controllers/items.controller";

const router = express.Router();

router.get("/all", (req, res) => {
  getAllItems(res);
});

router.get("/createItem", (req, res) => {
  createNewItem();
});

router.get("/deleteAll", (req, res) => {
    deleteAll(res);
})

export default router;
